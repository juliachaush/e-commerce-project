"use client";

import { useState } from "react";
import { BUTTON_NAMES } from "../lib/const";
import { Button } from "./Button";

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
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Something went wrong");
      } else {
        setMessage(data.message);
        setEmail("");
      }
    } catch (error) {
      setMessage("An unexpected error occurred");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative  ">
        <div className="flex  ">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            className="border border-gray-950 text-gray-950 bg-gray-100 p-2 pl-4  min-w-[160px] placeholder-gray-950 focus:outline-none focus:border-gray-500 focus:ring-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="submit"
            className="border border-gray-950 text-gray-950 p-2  bg-gray-100 min-w-[160px] hover:bg-gray-200 transition-all"
          >
            {BUTTON_NAMES.subscribeButton}
          </Button>
        </div>

        {message && (
          <div className="absolute left-0 mt-2 text-red-600 text-sm">
            <p>{message}</p>
          </div>
        )}
      </div>
    </form>
  );
};

export { Input };
