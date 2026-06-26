export async function onRequest(context) {
  const currencies = 'MYR,USD,EUR,GBP,JPY,SGD,THB,AUD,KRW';
  const url = 'https://api.frankfurter.app/latest?from=CNY&to=' + currencies;
  const res = await fetch(url);
  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch rates' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
