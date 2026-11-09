import React from "react";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section className="site-shell inner-page">
      <div className="page-heading">
        <p className="eyebrow"><span className="index-mark" /> 03 / About</p>
        <h1>About <em>me.</em></h1>
        <p>I’m Rahul Verma, a software developer from Ranchi, India with a focus on backend systems.</p>
      </div>

      <div className="about-layout">
        <div className="surface">
          <h2>What I build</h2>
          <p>I build full-stack applications with a focus on backend performance, security, real-time communication, and clean API design.</p>
          <p>I’ve solved over 400 data structures and algorithms problems. I draw on my background in operating systems, databases, and computer networks when designing and debugging backend systems.</p>
        </div>
        <div className="surface">
          <h2>A little more about me</h2>
          <p>I graduated from IIIT Bhopal in June 2026 with a B.Tech in Electronics and Communication Engineering and a 9.00/10 GPA.</p>
          <p>As a teaching assistant at IIIT Bhopal, I helped over 150 students learn the fundamentals of computer science.</p>
          <p>Outside of coding, I enjoy playing games, exploring new technologies, and traveling.</p>
        </div>
      </div>

      <section className="stack-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Technical <em>skills.</em></h2>
        <Techstack />
      </section>

      <section className="stack-section" aria-labelledby="tools-heading">
        <h2 id="tools-heading">Tools I <em>use.</em></h2>
        <Toolstack />
      </section>

      <section className="stack-section" aria-labelledby="github-heading">
        <h2 id="github-heading">GitHub <em>activity.</em></h2>
        <Github />
      </section>
    </section>
  );
}

export default About;
