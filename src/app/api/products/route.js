import { sql } from "@vercel/postgres";

export async function GET(request) {
  const product = await sql`select * from products;`;

  return new Response(
    JSON.stringify(product.rows.length > 0 ? product.rows : null),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
