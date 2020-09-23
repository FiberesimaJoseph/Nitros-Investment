import React from "react";
import { Container } from "semantic-ui-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <div className="row">
          <div className="col-md-6 hero-text">
            <h2>
              Invest in <span>Bitcoin</span> <br />
              and Ethereum Mining Today!
            </h2>
            <h4>
              Use modern progressive technologies of Bitcoin to earn money
            </h4>
          </div>
          <div className="col-md-6">
            <img src="laptop.png" className="laptop-image" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
