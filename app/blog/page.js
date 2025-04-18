async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/post/1", {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogPage() {
  const post = await getData();
  return (
    <div>
      <h1> Blog Post (SSR)</h1>
      <p> tile : {post.title}</p>
      <p>Body:{post.body}</p>
    </div>
  );
}
