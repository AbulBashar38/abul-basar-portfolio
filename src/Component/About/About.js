import React from "react";
import profileBG from "../../image/abulBasarImage.png";
import Introduction from "./Introduction";
import Skills from "./Skills";
import "./About.css";
const About = () => {
  return (
    <main className="container-fluid"  id="about" style={{marginTop:'5em'}} >
      <div className="main-part" style={{ height: "auto" }}>
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="mt-5 pt-3 w-100 d-flex justify-content-center align-items-center about-banner">
            <img
              src={profileBG}
              style={{ height: "23rem" }}
              className="img-fluid"
              alt=""
            />
          </div>
          <Introduction></Introduction>
          <Skills></Skills>
        </div>
      </div>
    </main>
  );
};

export default About;
