import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <div className="contact">
      <h1>yogesh@yotograph.com</h1>
      <div className="location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
        </svg>
        <p>Chennai</p>
      </div>
      <p className="available">Available for new projects</p>

      <p>
        I'm currently taking photography projects only. Drop me an email and
        I'll get back to you as soon as I can. I'd be happy to chat, learn about
        your brand, and see how I can help.
      </p>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Interested, Leave your contact mail below:</label>
        <div className="email">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}