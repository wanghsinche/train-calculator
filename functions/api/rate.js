export async function onRequest(context) {
  const url = 'https://api.frankfurter.app/latest?from=CNY&to=MYR';
  const res = await fetch(url);
  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch rate' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
