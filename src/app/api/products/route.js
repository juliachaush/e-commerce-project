// import { sql } from "@vercel/postgres";

// export async function GET(request) {
//   const products = await sql`select * from products;`;

//   return new Response(
//     JSON.stringify(products.rows.length > 0 ? products.rows : null),
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     }
//   );
// }

import { sql } from "@vercel/postgres";

export async function GET(request) {
  try {
    const result = await sql`SELECT * FROM products;`;
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
