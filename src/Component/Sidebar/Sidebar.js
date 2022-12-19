import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <section className="sidebar d-flex justify-content-center align-items-center">
      <div>
        <h3 className="mb-4">Abul Basar</h3>
        <ul className="list-unstyled mb-5">
          <li className="my-2">
            <a
              href="#home"
              style={{ color: "#bbb" }}
              className="text-decoration-none"
            >
              Home
            </a>
          </li>
          <li className="my-2">
            <a
              href="#about"
              style={{ color: "#bbb" }}
              className="text-decoration-none "
            >
              About
            </a>
          </li>
          <li className="my-2">
            <a
              href="#portfolio"
              style={{ color: "#bbb" }}
              className="text-decoration-none "
            >
              Portfolio
            </a>
          </li>
          <li className="my-2">
            <a
              href="#contact"
              style={{ color: "#bbb" }}
              className="text-decoration-none "
            >
              Contract
            </a>
          </li>
        </ul>
        <div>
          <p>&copy; 2021 by Abul Basar</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
