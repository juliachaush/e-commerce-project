"use client";

import { useState, useEffect } from "react";
import { Input } from "@/src/components/Input";

function PopupWithEmail() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShownPopup = localStorage.getItem("popupShown");

    if (!hasShownPopup) {
      setIsVisible(true);

      localStorage.setItem("popupShown", "true");
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 right-4 p-8 bg-white border border-gray-300 shadow-lg max-w-[600px] rounded-md z-50">
        <button
          className=" flex  float-end mr-4 text-gray-500 hover:text-gray-800"
          onClick={closePopup}
        >
          &times;
        </button>

        <div className="mt-4 mr-8 ">
          <h2 className="mb-4">STAY IN THE LOOP</h2>
          <p className="mb-2">
            Subscribe to receive free shipping on your next order (and the
            occasional Base Code update).
          </p>
          <Input />
        </div>
      </div>
    )
  );
}

export { PopupWithEmail };
