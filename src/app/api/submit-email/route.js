import { sql } from "@vercel/postgres";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(
      JSON.stringify({ error: "Please write your email adress" }),
      {
        status: 400,
      },
    );
  }

  try {
    const result = await sql.query(
      "INSERT INTO users(email) VALUES($1) RETURNING *",
      [email],
    );

    return new Response(
      JSON.stringify({
        message: "Email saved successfully",
        data: result.rows[0],
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
