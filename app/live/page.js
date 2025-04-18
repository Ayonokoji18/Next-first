async function getLiveData() {
  const res = await fetch("https://api.example.com/live", {
    cache: "no-store",
  });
  return res.json();
}

export default async function LivePage() {
  const data = await getLiveData();

  return (
    <div>
      <h1> Live Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
