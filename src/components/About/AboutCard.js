import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Rahul Verma</span>{" "}
            from <span className="purple">Ranchi, India</span>.
            <br />
            I'm a <span className="purple">Backend-focused MERN Developer</span>{" "}
            currently pursuing <span className="purple">B.Tech in ECE</span> at{" "}
            <span className="purple">IIIT Bhopal</span> with a{" "}
            <span className="purple">9.14 GPA</span>.
            <br />
            I specialize in building scalable full-stack applications with a strong
            focus on backend performance, security, real-time communication, and
            clean API architecture.
            <br />
            <br />
            I have solved <span className="purple">400+ DSA problems</span> and
            have strong fundamentals in{" "}
            <span className="purple">OS, DBMS, CN, and Backend Engineering</span>.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me
            engaged and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rahul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
