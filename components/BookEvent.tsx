"use client";

import { useState } from "react";

const BookEvent = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="book-event">
      {isSubmitted ? (
        <p className="text-sm">Thank you for signing up!</p>
      ) : (
        <form>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
