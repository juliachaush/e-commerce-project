import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

export async function GET(req) {
  const id = req.nextUrl.pathname.split("/").pop();

  const product = await sql`select * from products WHERE product_id = ${id};`;

  return new Response(
    JSON.stringify(product.rows.length > 0 ? product.rows : null),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store",
      },
    }
  );
}
