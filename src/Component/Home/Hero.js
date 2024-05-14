import React from "react";
import profilePic from "../../image/basar-profile-WB.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
            Proven software developer and Front End Team Leader with a track
            record of leading teams at SeaClub, a Canadian startup. Founding
            member and lead developer at JS Encoder, a Bangladesh-based software
            company. Actively seeking a challenging role in a dynamic startup
            environment to apply my expertise in software development and
            leadership, driving innovation and growth.
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
              href="https://drive.google.com/file/d/1zEbs69iG03s872BYAdoOVmltu7a7izww/view?usp=sharing"
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
