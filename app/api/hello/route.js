export async function GET() {
  return new Response(
    JSON.stringify({ message: "Hello from Api (App routing )" }),

    {
      status: 200,
    }
  );
}
