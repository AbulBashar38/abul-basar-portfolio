import React from "react";
import Hero from "./Hero";
import "./Home.css";
const Home = () => {
  return (
    <main className="container-fluid" id="home">
      <div className="main-part">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Hero></Hero>
        </div>
      </div>
    </main>
  );
};

export default Home;
