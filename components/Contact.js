import { useState } from "react";
import styles from "../styles/contactForm.module.css";
import Button from "./Button";

/* Uses data from inputs to submit POST to API */

const Contact = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = { first_name, last_name, title, email, message };
    console.log(userMessage);

    fetch("https://api.mwi.dev/content/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userMessage),
    });
  };

  function inputFocus() {}
  return (
    <div className={styles.contactForm}>
      <h1 className={styles.h1}>Heading Two</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.gridContainer}>
          <input
            className={styles.input}
            id="fname"
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            autoComplete="name"
            required
          />
          <input
            className={styles.input}
            id="lname"
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            autoComplete="name"
            required
          />
          <input
            className={styles.input}
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            autoComplete="name"
            required
          />
          <input
            className={styles.input}
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="name"
            required
          />
          <textarea
            className={styles.input5}
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            autoComplete="name"
            required
          />
        </div>
        <Button className={styles.button} />
      </form>
    </div>
  );
};

export default Contact;
