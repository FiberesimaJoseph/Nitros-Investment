import React from "react";
import Feature from "./Feature";
import { Container } from "semantic-ui-react";

const Features = () => {
  const features = [
    {
      name: "Starter",
      text:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "ti-mobile",
    },
    {
      name: "Silver",
      text:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "ti-shield",
    },
    {
      name: "Gold",
      text:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "ti-wallet",
    },
    {
      name: "Platinum",
      text:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "ti-headphone-alt",
    },
    {
      name: "Student",
      text:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "ti-reload",
    },
    {
      name: "Piosonners",
      text:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "ti-panel",
    },
  ];

  return (
    <section className="features-section spad gradient-bg">
      <Container className="text-white">
        <div className="section-title text-center">
          <h2>Our Investment Plans</h2>
          {/* <!-- <p>Bitcoin is the simplest way to exchange money at very low cost.</p> --> */}
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
          }}
        >
          {features.map((f, i) => (
            <Feature name={f.name} text={f.text} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
