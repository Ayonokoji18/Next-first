import Header from "./header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> Next js is Awesome, THis is home page</h1>
      <Link href="/about"> Go to about page</Link>
      <Link href="/awesome"> Go to awesome page</Link>
      <Header />
    </main>
  );
}
