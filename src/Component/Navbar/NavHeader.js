import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavHeader = () => {
  return (
    <div>
      <nav
        style={{ background: "#111" }}
        className="navbar navbar-expand-lg navbar-dark fixed-top "
      >
        <div className="container-fluid">
          <a href="#home" className="navbar-brand fw-bold">
            Abul Basar
          </a>
          <button
            style={{ zIndex: "100" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <a href="#home" className="nav-link active" aria-current="page">
                  <FontAwesomeIcon icon={faHome} />
                </a>
              </li>
              <li className="nav-item mx-1">
                <a href="#about" className="nav-link active">
                  <FontAwesomeIcon icon={faUserTie} />
                </a>
              </li>
              <li className="nav-item mx-1">
                <a href="#portfolio" className="nav-link active">
                  <FontAwesomeIcon icon={faBriefcase} />
                </a>
              </li>
              <li className="nav-item mx-1">
                <a href="#contact" className="nav-link active">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavHeader;
