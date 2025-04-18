import Link from "next/link";

function About() {
  return (
    <>
      <h1> THis is about page </h1>
      <Link href="/awesome"> click to go to other page </Link>
    </>
  );
}

export default About;
