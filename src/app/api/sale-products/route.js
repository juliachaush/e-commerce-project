import { sql } from "@vercel/postgres";

export async function GET(request) {
  try {
    const result =
      await sql`SELECT * FROM products WHERE sale_status = 'sale';`;
    const products = result.rows;

    return new Response(JSON.stringify(products), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
