import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>mastery of JavaScript to build top-quality projects</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>verified front-end code functionality across platforms.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing custom websites to meet individual client needs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating Web models and prototypes for other developers</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>React web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create responsive Websites using React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>implement procedures for Web site revision.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Authentication and storage of files with wordpress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performed and directed Web site updates</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Wordpress Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>create responsive Websites using Wordpress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Github mastery in the process of web development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Worked closely with back-end developers to troubleshoot issues
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
