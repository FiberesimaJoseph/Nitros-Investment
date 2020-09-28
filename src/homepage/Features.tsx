import React from "react";
import Feature from "./Feature";
import { Container } from "semantic-ui-react";

const Features = () => {
  const features = [
    {
      name: "Starter",
      text: "10% Refferal Bonus 150% Profit",
      icon: "ti-mobile",
    },
    {
      name: "Silver",
      text: "20% Refferal Bonus 350% Profit",
      icon: "ti-shield",
    },
    {
      name: "Gold",
      text: "150% Refferal Bonus 250% Profit",
      icon: "ti-wallet",
    },
    {
      name: "Platinum",
      text: "250% Refferal Bonus 450% Profit",
      icon: "ti-headphone-alt",
    },
    {
      name: "Student",
      text: "15% Refferal Bonus 170% Profit",
      icon: "ti-reload",
    },
    {
      name: "Piosonners",
      text: "50% Refferal Bonus 200% Profit",
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
