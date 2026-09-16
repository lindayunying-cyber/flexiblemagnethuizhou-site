const REQUIRED_FIELDS = ['name', 'email', 'target_market', 'product_type', 'quantity'];

function jsonResponse(body, status, extraHeaders = {}) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      ...extraHeaders
    }
  });
}

function fieldValue(formData, name) {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function validateFormData(formData) {
  const missing = REQUIRED_FIELDS.filter((name) => !fieldValue(formData, name));
  if (missing.length) {
    return `Missing required fields: ${missing.join(', ')}.`;
  }

  const email = fieldValue(formData, 'email');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please provide a valid email address.';
  }

  const attachment = formData.get('attachment');
  const hasFile = attachment && typeof attachment !== 'string' && typeof attachment.size === 'number';
  if (hasFile && attachment.size > 10 * 1024 * 1024) {
    return 'The attachment must not exceed 10 MB.';
  }

  return '';
}

async function handlePost(request, env) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ success: false, message: 'Invalid form submission.' }, 400);
  }

  const validationError = validateFormData(formData);
  if (validationError) {
    return jsonResponse({ success: false, message: validationError }, 400);
  }

  const accessKey = env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('Inquiry submission blocked: Production secret is unavailable.');
    return jsonResponse({ success: false, message: 'Inquiry service is not configured.' }, 503);
  }

  formData.set('access_key', accessKey);
  formData.set('subject', fieldValue(formData, 'subject') || 'New Flexible Magnet Website Inquiry');
  formData.set('from_name', fieldValue(formData, 'from_name') || 'Flexible Magnet Website');

  let response;
  try {
    response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    });
  } catch {
    console.error('Inquiry submission failed: Web3Forms request error.');
    return jsonResponse({ success: false, message: 'Inquiry service is temporarily unavailable.' }, 502);
  }

  let rawBody;
  try {
    rawBody = await response.text();
  } catch {
    console.error(`Inquiry submission failed: unreadable Web3Forms response (${response.status}).`);
    return jsonResponse({ success: false, message: 'Inquiry service returned an invalid response.' }, 502);
  }

  let upstream = {};
  try {
    upstream = rawBody ? JSON.parse(rawBody) : {};
  } catch {
    console.error(`Inquiry submission failed: invalid Web3Forms response (${response.status}).`);
    return jsonResponse({ success: false, message: 'Inquiry service returned an invalid response.' }, 502);
  }

  const success = response.ok && upstream && (upstream.success === true || upstream.success === 'true');
  if (!success) {
    const status = response.status >= 400 && response.status <= 599 ? response.status : 502;
    console.error(`Inquiry submission rejected by Web3Forms (${status}).`);
    return jsonResponse({ success: false, message: 'Inquiry submission was not accepted.' }, status);
  }

  console.info('Inquiry submission accepted by Web3Forms.');
  return jsonResponse({ success: true, message: 'Inquiry submitted successfully.' }, 200);
}

export async function onRequest({ request, env }) {
  try {
    if (request.method !== 'POST') {
      return jsonResponse(
        { success: false, message: 'Method not allowed. Use POST.' },
        405,
        { Allow: 'POST' }
      );
    }

    return await handlePost(request, env);
  } catch (error) {
    const errorName = error && typeof error.name === 'string' ? error.name : 'Error';
    const errorMessage = error && typeof error.message === 'string' ? error.message : 'Unknown runtime error';
    console.error(`Inquiry submission failed: unexpected ${errorName}: ${errorMessage}`);
    return jsonResponse({ success: false, message: 'Inquiry service is temporarily unavailable.' }, 500);
  }
}
