import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/weather.png";
import IMG2 from "../../assets/silvertech.png";
import IMG3 from "../../assets/nova.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Current & Weather Forcast Web Application",
    github: "https://github.com/Johnnix1234/weather-app",
    demo: "https://weatherapp123456.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Services-rendering Web Application",
    github: " https://github.com/Johnnix1234/Novaswap ",
    demo: "https://silvertech.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto trading Web Application",
    github: "https://github.com/Johnnix1234/Silvertech",
    demo: "http://swapnova.netlify.app",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
