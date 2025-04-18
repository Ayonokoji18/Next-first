"use client";

import { useParams } from "next/navigation";

function ProductPage() {
  const params = useParams();
  const id = params.id;
  console.log(params);
  if (!id) return <p> Loading...</p>;
  return <h1> Product ID:{id}</h1>;
}

export default ProductPage;
