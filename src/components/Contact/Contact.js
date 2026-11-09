import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";

const email = "rahulverma.work1@gmail.com";

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const fields = new FormData(event.currentTarget);
    const subject = encodeURIComponent(fields.get("subject"));
    const body = encodeURIComponent(
      `Name: ${fields.get("name")}\nEmail: ${fields.get("email")}\n\n${fields.get("message")}`
    );

    setStatus("Opening your email app with the message filled in.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="site-shell inner-page">
      <div className="page-heading">
        <p className="eyebrow"><span className="index-mark" /> Contact</p>
        <h1>Let’s <em>talk.</em></h1>
        <p>Reach out if you’d like to collaborate or have a question about my work.</p>
      </div>

      <div className="contact-layout">
        <div className="surface contact-details">
          <h2>Say hello</h2>
          <p>You can email me directly or use the form to start a draft in your email app.</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <Form onSubmit={handleSubmit} className="surface contact-form">
          <Form.Group className="mb-3" controlId="contact-name">
            <Form.Label>Your name</Form.Label>
            <Form.Control name="name" type="text" autoComplete="name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact-email">
            <Form.Label>Your email</Form.Label>
            <Form.Control name="email" type="email" autoComplete="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact-subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control name="subject" type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact-message">
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" as="textarea" rows={5} required />
          </Form.Group>
          <button className="pill-button pill-dark" type="submit">
            Open email draft <FiArrowUpRight aria-hidden="true" />
          </button>
          <div role="status">{status && <p className="form-status">{status}</p>}</div>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
