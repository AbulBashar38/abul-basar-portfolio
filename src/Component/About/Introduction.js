import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import intoVideo from "../../videos/introduction.mp4";
import experience from "../../videos/experience.mp4";
import objective from "../../videos/objective.mp4";
const Introduction = () => {
  const handleVideoPlay = (videoName) => {
    // Pause all other videos
    document.querySelectorAll("video").forEach((video) => {
      if (video.id !== videoName && !video.paused) {
        video.pause();
      }
    });

    // Set the current playing video
    // setPlayVideo(videoName);
  };
  return (
    <section className="container-fluid">
      <div className="mt-5">
        <h4 className="">Abul basar & Software Development</h4>
        <div className="row mt-3">
          <div className="col-md-6 col-sm-6 col-12">
            <small style={{ color: "#bbb" }} className="my-4 fst-italic">
              I started my career as a Front-end Developer at Js Encoder in
              December 2022. I worked here on many project types. They included
              e-commerce, hotel management SaaS products, and admin dashboard
              templates. I achieved the Employee of the Year award from Js
              Encoder in 2023. Besides that, I was leading an international team
              at Seaclub. At Seaclub, we launched their landing page, MVP, and
              also the Alpha version of their platform .
            </small>
            <br />
            <a
              href="https://www.linkedin.com/in/abulbashar5403/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary fw-bold mt-3 mb-4"
            >
              {" "}
              <FontAwesomeIcon
                className="me-2 fs-5 text-white"
                icon={faLinkedin}
              />
              LinkedIn
            </a>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <p>
              Birthday:{" "}
              <span style={{ color: "#bbb" }} className="fst-italic ms-2">
                {" "}
                28 January 2003
              </span>
            </p>
            <p>
              Age:
              <span style={{ color: "#bbb" }} className="fst-italic ms-2">
                21
              </span>
            </p>
            <p>
              Address:
              <span style={{ color: "#bbb" }} className="fst-italic ms-2">
                Kalindi, Keranigonj, Dhaka, Bangladesh
              </span>
            </p>
            <p>
              Study:
              <span style={{ color: "#bbb" }} className="fst-italic ms-2">
                Programming Hero, Shyamoli Ideal Polytechnic Institute
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row gx-5 gy-5 bg-transparent ">
        <div className="col-12 col-md-4 col-sm-12 d-flex justify-content-center align-items-center ">
          <div class="card bg-transparent d-flex flex-col justify-content-center align-items-center ">
            <video
              id="introVideo"
              onPlay={() => handleVideoPlay("introVideo")}
              width="320"
              height="240"
              controls
            >
              <source src={intoVideo} type="video/mp4"></source>
            </video>
            <div class="card-body">
              <h5 class="card-title fw-bold">Introduction</h5>
              <p class="card-text fst-italic">
                Discover who I am in just 30 seconds. Get a glimpse into my
                journey and aspirations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-sm-12">
          <div class="card bg-transparent d-flex flex-col justify-content-center align-items-center">
            <video
              id="experience"
              onPlay={() => handleVideoPlay("experience")}
              width="320"
              height="240"
              controls
            >
              <source src={experience} type="video/mp4"></source>
            </video>
            <div class="card-body">
              <h5 class="card-title fw-bold">Professional Journey</h5>
              <p class="card-text fst-italic">
                Explore my career path as a software developer and team leader
                in this brief 30-second video.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-sm-12 ">
          <div class="card bg-transparent d-flex flex-col justify-content-center align-items-center">
            <video
              id="objective"
              width="320"
              height="240"
              onPlay={() => handleVideoPlay("objective")}
              controls
            >
              <source src={objective} type="video/mp4"></source>
            </video>
            <div class="card-body">
              <h5 class="card-title fw-bold">Objectives & Vision</h5>
              <p class="card-text fst-italic">
                Learn about my professional ambitions and the opportunities I
                seek in this insightful 30-second video.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
