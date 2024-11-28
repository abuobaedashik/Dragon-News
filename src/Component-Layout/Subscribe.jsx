import React, { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
      if (email) {
        alert(`Thank you for subscribing with ${email}`);
        setEmail(""); // Reset email field after submission
      } else {
        alert("Please enter a valid email address.");
      }
    };
    return (
    <div className="py-7  px-6 bg-gray-100 border rounded-lg shadow-md text-center">
      <h4 className="text-gray-700 text-xl uppercase tracking-wide font-medium mb-2">
        Get First Update
      </h4>
      <p className="text-gray-600 text-base mb-4">
        Get the news in front line by{" "}
        <span className="text-red-500 font-semibold">subscribe </span> our
        latest updates
      </p>
      <div className="flex items-center gap-2 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
