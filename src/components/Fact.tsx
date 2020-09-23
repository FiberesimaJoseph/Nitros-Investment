import React from "react";
import { Container } from "semantic-ui-react";

const Fact = () => {
  return (
    <section className="fact-section gradient-bg">
      <Container>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>80</h2>
              <p>
                Support <br /> Countries
              </p>
              <i className="ti-basketball"></i>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>120K</h2>
              <p>
                Transactions <br /> per hour
              </p>
              <i className="ti-panel"></i>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>10B</h2>
              <p>
                Largest <br /> Transactions
              </p>
              <i className="ti-stats-up"></i>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>40</h2>
              <p>
                Years <br /> of Experience
              </p>
              <i className="ti-user"></i>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Fact;
