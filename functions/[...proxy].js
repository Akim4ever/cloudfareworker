export async function onRequest(context) {
  const modifiedRequest = new Request(context.request, {
    cf: {
      resolveOverride: 'srv-cdn.solver.net.co'
    }
  });
  return fetch(modifiedRequest);
}
