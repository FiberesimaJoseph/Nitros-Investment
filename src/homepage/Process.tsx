import React from "react";
import { Container } from "semantic-ui-react";

const Process = () => {
  return (
    <section className="process-section spad">
      <Container>
        {" "}
        <div className="section-title text-center">
          <h2>Get Started And Begin To Earn</h2>
          <p>
            Start learning about Bitcoin with interactive tutorials. It’s fun,
            easy, and takes only a few minutes!{" "}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src="process-icons/1.png" alt="#" />
              </figure>
              <h4>SignUp With Us</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src="process-icons/2.png" alt="#" />
              </figure>
              <h4>Invest </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src="process-icons/3.png" alt="#" />
              </figure>
              <h4>And Earn</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
