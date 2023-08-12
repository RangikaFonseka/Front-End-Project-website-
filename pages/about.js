import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../style/about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        You can purchase any of our products with either cash payments or interest-free installments.
			All purchases shall be delivered right to your doorstep
          cumque velit
        </p>
      </div>
    </div>
  );
}

export default About;