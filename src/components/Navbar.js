import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const pages = [
  ["/", "Home"],
  ["/project", "Projects"],
  ["/about", "About"],
  ["/resume", "Resume"],
];

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  return (
    <header className="site-header">
      <div className="site-shell nav-shell">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">rv</span>
          Rahul Verma
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls="site-navigation"
          aria-label={expanded ? "Close menu" : "Open menu"}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={expanded ? "site-nav is-open" : "site-nav"}
        >
          {pages.map(([path, label]) => (
            <NavLink key={path} to={path} end={path === "/"} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
          <NavLink className="mobile-contact" to="/contact" onClick={closeMenu}>
            Contact <FiArrowUpRight aria-hidden="true" />
          </NavLink>
        </nav>
        <Link className="pill-button pill-outline nav-contact" to="/contact">
          Let’s talk <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
