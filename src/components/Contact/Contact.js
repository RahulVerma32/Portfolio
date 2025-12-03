import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:vermarahul0745@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setStatus("Opening your email client...");
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setStatus("");
    }, 2000);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch </strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", paddingBottom: "30px" }}>
              Feel free to reach out to me for any queries or collaboration opportunities!
            </p>

            <Form onSubmit={handleSubmit} className="contact-form" style={{ position: "relative", zIndex: 2 }}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ color: "white" }}>
                  <AiOutlineUser style={{ marginRight: "10px" }} />
                  Your Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(197, 115, 230, 0.883)",
                    color: "white",
                    position: "relative",
                    zIndex: 3,
                  }}
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ color: "white" }}>
                  <AiOutlineMail style={{ marginRight: "10px" }} />
                  Your Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(197, 115, 230, 0.883)",
                    color: "white",
                    position: "relative",
                    zIndex: 3,
                  }}
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label style={{ color: "white" }}>
                  <AiOutlineMessage style={{ marginRight: "10px" }} />
                  Subject
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(197, 115, 230, 0.883)",
                    color: "white",
                    position: "relative",
                    zIndex: 3,
                  }}
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label style={{ color: "white" }}>
                  <AiOutlineMessage style={{ marginRight: "10px" }} />
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(197, 115, 230, 0.883)",
                    color: "white",
                    position: "relative",
                    zIndex: 3,
                  }}
                  className="form-control-custom"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "18px",
                  marginTop: "20px",
                }}
              >
                Send Message
              </Button>

              {status && (
                <p
                  style={{
                    color: "#c770f0",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  {status}
                </p>
              )}
            </Form>

            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <p style={{ color: "white" }}>
                Or email me directly at:{" "}
                <a
                  href="mailto:vermarahul0745@gmail.com"
                  style={{ color: "#c770f0", textDecoration: "none" }}
                >
                  vermarahul0745@gmail.com
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
