export async function onRequest(context) {
  const url = new URL(context.request.url);
  const proxyUrl = new URL(url);
  proxyUrl.hostname = 'srv-cdn.solver.net.co';

  const headers = new Headers(context.request.headers);
  headers.set('Host', 'srv-cdn.solver.net.co'); // попытка установить явно

  const modifiedRequest = new Request(proxyUrl.toString(), {
    method: context.request.method,
    headers,
    body: context.request.body,
    redirect: 'follow',
  });

  return fetch(modifiedRequest);
}
