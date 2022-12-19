import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import NavHeader from "../Navbar/NavHeader";
import Portfolio from "../Portfolio/Portfolio";
import Sidebar from "../Sidebar/Sidebar";

const CombinePage = () => {
  return (
    <main>
      <section className="navHeader d-none">
        <NavHeader></NavHeader>
      </section>
      <section className="sidebar-main">
        <Sidebar></Sidebar>
      </section>
      <section>
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </section>
    </main>
  );
};

export default CombinePage;
