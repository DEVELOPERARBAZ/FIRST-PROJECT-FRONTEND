import h2 from "../images/h2.jpg";

import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="About">
      <h2>About Us</h2>
      <img id="AboutTv" src={h2} alt="NOT LOADED"></img>
      <hr></hr>
      <div className="scroller">
        <p>
          <h2>Careem Group</h2>it is our pleasure introducing our company About
          CAREEM GROUP a leading interior design firm in mumbai, specializes in
          high-end residential interior designs, bungalows, and commercial
          spaces. As expert interior designers, our mission is to bring creative
          innovation to every project, crafting spaces that truly reflect our
          client's unique personalities. We have a passion for transforming
          houses into beloved homes and delivering dream-like interiors.<br></br> Founded
          in 2015. Careem group has established itself as a hub of innovation
          and creativity in interior design and construction services. We
          combine our extensive knowledge, trend connections, and keen eye for
          luxurious aesthetics to deliver exceptional results to our clients. <br></br>At
          Careem Group interior, we prioritize providing our clients with the
          utmost satisfaction, ensuring that their expenditure is justified
          through impeccable design outcomes. We take pride in fulfilling our
          clients' desires by creating spaces that surpass their expectations.
          <br></br>Experience the expertise of Careem Group interior where innovation
          meets elegance. Trust us to be your premier interior designers,
          creating spaces that inspire and elevate your lifestyle. Together,
          let's transform your home into a masterpiece of design
        </p>
        {/* <img src={sundar} alt="Sundar Kanya"></img> */}
      </div>
    </div>
  );
}

export default AboutPage;
