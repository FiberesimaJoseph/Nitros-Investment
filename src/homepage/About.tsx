import React from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <section className="about-section spad">
      <Container>
        <div className="row">
          <div className="col-lg-6 offset-lg-6 about-text">
            <h2>About Us</h2>
            <p>
              Nitros investment is a independent alternative investment company
              that applies a systematic and quantitative approach to investment
              management, with the aim of generating high-quality and
              diversifyng alpha in other to enable ortfolio. the company
              provides incomes opportunities through their specilizations in
              crypto currency trading/mining of bitcoin and other assests
              industry like binary options,forex,stocks and commodities.
            </p>
          </div>
        </div>
        <div className="about-img">
          <img src="img/about-img.png" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default About;
