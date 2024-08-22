import { Client } from "pg";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    console.log(req.body);

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // Connect to Vercel Postgres
      const client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      });

      await client.connect();

      // Insert email into the database
      const result = await client.query(
        "INSERT INTO users(email) VALUES($1) RETURNING *",
        [email]
      );

      await client.end();

      return res
        .status(200)
        .json({ message: "Email saved successfully", data: result.rows[0] });
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
