import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profilePic from "../../image/basar-profile-WB.png";
const Hero = () => {
  return (
    <main>
      <div className="row">
        <div className="col-md-5 col-sm-5 d-flex justify-content-center align-items-center ">
          <img src={profilePic} alt="" className="img-fluid hero-profile-pic" />
        </div>
        <div className="col-md-7 col-sm-7 short-description">
          <h1 className="fw-bold">
            Hey, My name is <br /> ABUL BASAR
          </h1>
          <p style={{ fontStyle: "italic", color: "#bbb" }} className="my-4">
            Senior Frontend Developer at Akbar Tech Consultancy with a strong
            background in leading frontend teams and building scalable web
            applications. Currently serving as the Frontend Team Leader for
            Bangladesh Archive, an open-source project with 300+ contributors.
            Previously led teams at SeaClub and JS Encoder, driving innovation
            in startups and software development. Passionate about crafting
            high-performance user interfaces, mentoring developers, and
            contributing to impactful projects in a dynamic, growth-oriented
            environment.
          </p>
          <div className="hero-content-part">
            <a
              href="https://www.facebook.com/abulbashar38/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white me-3 fs-4"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://github.com/AbulBashar38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white me-3 fs-4"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/abulbashar5403/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white me-3 fs-4"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://drive.google.com/file/d/1yIPkgjSNRAgFK3QRMMVPFoJzctdxoKf_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary fw-bold"
            >
              MY RESUME
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
