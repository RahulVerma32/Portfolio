import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import Game from "../../Assets/Projects/Game.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real-time Chat Application"
              description="A real-time messaging application built with Socket.io, React.js, and Node.js. Features include private messaging, group chats, typing indicators, online status, and message history with a modern, responsive UI."
              ghLink="https://github.com/RahulVerma32/ChatMitra"
              demoLink="https://chatmitra-eb8k.onrender.com/"
            />
          </Col>
    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Job Portal"
              description="A comprehensive job portal built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include job listings, user authentication, application tracking, and employer dashboards with a clean, intuitive interface."
              ghLink="https://github.com/RahulVerma32/Job-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Notes Taking App"
              description="A full-stack notes taking application built with React.js for the frontend and Node.js with Express.js for the backend. Features include user authentication, CRUD operations for notes, and a responsive design for seamless use across devices."
              ghLink="https://github.com/RahulVerma32/NoteBoard"
              demoLink="https://noteboard-ahqy.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Interactive Ai powered Game"
              description="An interactive game developed using Python and OpenAI, featuring AI-driven adventure game with multiple paths. Players make choices that influence the storyline, showcasing AI's ability to create dynamic narratives."
              ghLink="https://github.com/RahulVerma32/Interactive-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Speech Emotion Recognition"
              description="Speech Emotion Recognition system using Python, TensorFlow, and Librosa to classify 8 (happy, sad, angry, neutral, fear, disgust, surprise, calm) emotions from audio with a 1D CNN achieving ~70-75% accuracy."
              ghLink="https://github.com/RahulVerma32/Emotion-Speech-Recognition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
