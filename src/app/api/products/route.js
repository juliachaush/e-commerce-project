import { sql } from "@vercel/postgres";

export async function GET(request) {
  const products = await sql`select * from products;`;

  return new Response(
    JSON.stringify(products.rows.length > 0 ? products.rows : null),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
