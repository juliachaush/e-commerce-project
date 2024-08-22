"use client";

import { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "user@example.com" }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setMessage("An unexpected error occurred");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 mb-4">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          className=" border border-gray-950 text-gray-950 bg-gray-100 p-2 min-w-[200px] placeholder-gray-950 focus:outline-none focus:border-gray-500 focus:ring-0 placeholder-hidden"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="border border-gray-950 text-gray-950 ">
          SUBSCRIBE
        </button>
        {message && <p>{message}</p>}
      </div>
    </form>
  );
};

export { Input };
