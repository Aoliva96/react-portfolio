import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Define state variables for the contact form
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // Define the form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  // Define the form state update handler
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Please enter a valid ${e.target.name}.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  // JSX for Contact form component
  return (
    <div className="my-5">
      <hr style={{ marginTop: "2.5rem" }} />
      <div
        style={{
          backgroundColor: "var(--alpha-dark)",
          borderRadius: "48px",
          marginTop: "2.5rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <section className="py-2">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
