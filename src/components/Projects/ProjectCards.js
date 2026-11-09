import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({
  icon: Icon, coverName, title, titleAs: Title, category, description,
  technologies, ghLink, demoLink, number,
}) {
  return (
    <article className="project-card">
      <div className="project-media" aria-hidden="true">
        <span className="project-cover-index">Project / {String(number).padStart(2, "0")}</span>
        <div className="project-cover-tile"><Icon /></div>
        <span className="project-cover-name">{coverName}</span>
      </div>
      <div className="project-body">
        <p className="eyebrow">{String(number).padStart(2, "0")} / {category}</p>
        <Title className="project-title">{title}</Title>
        <p className="project-description">{description}</p>
        <ul className="technology-list" aria-label="Technologies">
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          <a className="text-link" href={ghLink} target="_blank" rel="noreferrer" aria-label={`${title} on GitHub`}>
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          {demoLink && (
            <a className="text-link" href={demoLink} target="_blank" rel="noreferrer" aria-label={`Live demo of ${title}`}>
              Live demo <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
