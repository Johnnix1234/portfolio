import React from "react";
import CV from "../../assets/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btt">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary btt">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
