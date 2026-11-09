import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Orbit from "./Orbit";
import Experience from "./Experience";
import { ProjectGrid } from "../Projects/Projects";

function Home() {
  return (
    <>
      <section className="site-shell hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker"><span className="index-mark" /> Software developer · Portfolio</p>
          <h1 id="hero-title">Rahul <em>Verma.</em></h1>
          <p className="hero-description">
            I build full-stack web applications with a focus on clean APIs,
            secure backends, and real-time features.
          </p>
          <div className="hero-actions">
            <Link className="pill-button pill-dark" to="/project">
              Explore my work <FiArrowDownRight aria-hidden="true" />
            </Link>
            <a className="pill-button pill-outline" href="https://github.com/RahulVerma32" target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
        <Orbit />
        <div className="hero-notes" aria-hidden="true">
          <span>Based in India</span>
          <span>Fig. 01 / Orbital study</span>
        </div>
      </section>

      <Experience />

      <section className="site-shell work-section home-projects" aria-labelledby="selected-work">
        <div className="section-intro">
          <div>
            <p className="eyebrow"><span className="index-mark" /> 02 / Projects</p>
            <h2 id="selected-work">Selected <em>work.</em></h2>
          </div>
          <Link className="text-link" to="/project">
            All projects <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <ProjectGrid featured />
      </section>

      <section className="site-shell home-about" aria-labelledby="home-about">
        <div>
          <p className="eyebrow"><span className="index-mark" /> 03 / About</p>
          <h2 id="home-about">Behind <em>the build.</em></h2>
        </div>
        <div>
          <p>I’m a software developer with a B.Tech in Electronics and Communication Engineering from IIIT Bhopal. I enjoy building APIs and working on the systems that make web apps fast and reliable.</p>
          <Link className="text-link" to="/about">More about me <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

export default Home;
