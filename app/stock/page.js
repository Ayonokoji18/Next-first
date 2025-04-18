async function getStockData() {
  const res = await fetch("https://api.example.com/stocks", {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default async function StockPage() {
  const data = await getStockData();
  return (
    <div>
      <h1>Stock updates</h1>
      <pre> {JSONG.stringify(data, null, 2)}</pre>
    </div>
  );
}
