import React from "react";
import ProjectCard from "./ProjectCards";
import { FiActivity, FiBriefcase, FiCompass, FiFileText, FiMessageSquare } from "react-icons/fi";

const projects = [
  {
    icon: FiCompass,
    coverName: "Interactive Story Game",
    title: "AI-Powered Interactive Story Game",
    category: "Generative AI",
    description: "An LLM-powered adventure that generates three-chapter branching stories. A FastAPI and PostgreSQL backend saves player choices and progress, and GitHub Actions runs 17 backend tests.",
    technologies: ["FastAPI", "React", "LangChain", "OpenRouter", "PostgreSQL", "Docker"],
    ghLink: "https://github.com/RahulVerma32/Interactive-Game",
    demoLink: "https://interactive-game-three.vercel.app",
  },
  {
    icon: FiMessageSquare,
    coverName: "ChatMitra",
    title: "ChatMitra",
    category: "Real-time systems",
    description: "A messaging platform that supports 100+ concurrent connections, with WebRTC video calls, typing indicators, read receipts, and push notifications. Optimized Cloudinary uploads cut payload size by 60%.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "WebRTC", "Cloudinary"],
    ghLink: "https://github.com/RahulVerma32/ChatMitra",
    demoLink: "https://chatmitra-eb8k.onrender.com/",
  },
  {
    icon: FiBriefcase,
    coverName: "Job Portal",
    title: "Job Portal",
    category: "Full-stack application",
    description: "A MERN job portal with listings, authentication, application tracking, and dashboards for employers.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    ghLink: "https://github.com/RahulVerma32/Job-portal",
  },
  {
    icon: FiFileText,
    coverName: "NoteBoard",
    title: "Notes Taking App",
    category: "Full-stack application",
    description: "A responsive notes app with user authentication and tools for creating, editing, and organizing notes.",
    technologies: ["React", "Node.js", "Express"],
    ghLink: "https://github.com/RahulVerma32/NoteBoard",
    demoLink: "https://noteboard-ahqy.onrender.com/",
  },
  {
    icon: FiActivity,
    coverName: "Speech Recognition",
    title: "Speech Emotion Recognition",
    category: "Machine learning",
    description: "A 1D convolutional neural network trained to recognize eight emotions in speech, with about 70–75% accuracy.",
    technologies: ["Python", "TensorFlow", "Librosa"],
    ghLink: "https://github.com/RahulVerma32/Emotion-Speech-Recognition",
  },
];

export function ProjectGrid({ featured = false }) {
  const visibleProjects = featured ? projects.slice(0, 2) : projects;
  return (
    <div className="project-grid">
      {visibleProjects.map((project, index) => (
        <ProjectCard
          key={project.title}
          number={index + 1}
          titleAs={featured ? "h3" : "h2"}
          {...project}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="site-shell inner-page">
      <div className="page-heading">
        <p className="eyebrow"><span className="index-mark" /> 02 / Projects</p>
        <h1>Selected <em>work.</em></h1>
        <p>Web applications, real-time systems, and experiments with AI.</p>
      </div>
      <ProjectGrid />
    </section>
  );
}
