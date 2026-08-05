export async function onRequestPost({ request, env }) {
  const accessKey = env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return Response.json({ success: false, message: 'Inquiry service is not configured.' }, { status: 503 });
  }

  const formData = await request.formData();
  formData.set('access_key', accessKey);
  formData.set('subject', formData.get('subject') || 'New Flexible Magnet Website Inquiry');
  formData.set('from_name', formData.get('from_name') || 'Flexible Magnet Website');

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' }
  });

  const body = await response.text();
  return new Response(body, {
    status: response.status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
