import React from "react";
import { Container } from "semantic-ui-react";

const Process = () => {
  return (
    <section className="process-section spad">
      <Container>
        {" "}
        <div className="section-title text-center">
          <h2>Get Started And Begin To Earn</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src="process-icons/1.png" alt="#" />
              </figure>
              <h4>SignUp With Us</h4>
              <p>
                Create your account with us on any investment plan of your
                choice and get set to earn.{" "}
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
                Lets help you grow your business and profit by investing on any
                of our plans and earn big{" "}
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
                We mine your money to the top with our powerful hardware servers{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
