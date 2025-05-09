export async function onRequest(context) {
  return new Response("Test successful", { status: 200 });
}
