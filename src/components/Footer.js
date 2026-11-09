import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialLinks = [
  ["GitHub", "https://github.com/RahulVerma32", FaGithub],
  ["LinkedIn", "https://www.linkedin.com/in/rahul-verma-connect/", FaLinkedinIn],
  ["Twitter", "https://twitter.com/RahulV88481", FaTwitter],
  ["Instagram", "https://www.instagram.com/rahulverma_o7", FaInstagram],
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-invite">
          <div>
            <p className="eyebrow"><span className="index-mark" /> Get in touch</p>
            <h2>Let’s build <em>something.</em></h2>
          </div>
          <Link className="pill-button pill-dark" to="/contact">
            Say hello <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rahul Verma</span>
          <ul className="social-links">
            {socialLinks.map(([label, href, Icon]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
