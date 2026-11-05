export function onRequestGet({env}) {
 const durable=env.INQUIRY_MODE==='durable';
 const ready=!durable || (env.INQUIRY_SERVICE && env.INQUIRY_INGEST_TOKEN && env.TURNSTILE_SITE_KEY);
 return Response.json({durable,siteKey:durable?env.TURNSTILE_SITE_KEY||'':undefined},
  {status:ready?200:503,headers:{'Cache-Control':'no-store'}});
}
