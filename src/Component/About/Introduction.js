import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import experience from "../../videos/experience.mp4";
import intoVideo from "../../videos/introduction.mp4";
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
              I began my career as a Front-end Developer at JS Encoder in
              December 2022, working on a variety of projects, including
              e-commerce platforms, hotel management SaaS products, and admin
              dashboard templates. In recognition of my contributions, I was
              honored as Employee of the Year in 2023. Alongside this, I led an
              international team at Seaclub, where we successfully launched the
              landing page, MVP, and Alpha version of their Web3 marketplace
              platform.
            </small>
            <br />
            <br />
            <small style={{ color: "#bbb" }} className="my-4 fst-italic">
              Currently, I am a Senior Frontend Developer at Akbar Tech
              Consultancy, a growing software firm providing global software
              solutions. I have contributed to building a dashboard application
              for a photography company and an AI-integrated health web app for
              a UK-based client, allowing users to receive AI-driven medicine
              recommendations based on their health conditions.
            </small>
            <br />
            <br />
            <small style={{ color: "#bbb" }} className="my-4 fst-italic">
              In addition, I serve as the Frontend Team Leader for Bangladesh
              Archive, an open-source initiative preserving the July 2024
              Movement's historical records. Under the leadership of Samim
              Hasan, a team of 300+ contributors—including frontend, backend,
              DevOps, data collection, and verification teams—has collected and
              verified 24,000+ records from Facebook, YouTube, and Twitter.
              Supported by leading software companies like Wafilife Solutions
              and Olive IT, and senior developers such as Fayzul Karim, we built
              a data collection application, an admin dashboard for
              verification, and the main archive platform, ensuring historical
              authenticity.
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
              Address:
              <span style={{ color: "#bbb" }} className="fst-italic ms-2">
                Kalindi, Keranigonj, Dhaka, Bangladesh
              </span>
            </p>
            <p>
              Study:
              <span style={{ color: "#bbb" }} className="fst-italic ms-2">
                Southeast University, Shyamoli Ideal Polytechnic Institute
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
