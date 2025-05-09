export async function onRequest(context) {
  const modifiedRequest = new Request(context.request, {
    cf: {
      resolveOverride: 'example.com' // тест
    }
  });
  return fetch(modifiedRequest);
}
