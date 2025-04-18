// example of static fetch

async function getNews() {
  const res = await fetch("https://api.example.com/news");
  return res.json();
}

async function NewsPage() {
  const data = await getNews();
  return (
    <div>
      <h1>📰 News</h1>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
