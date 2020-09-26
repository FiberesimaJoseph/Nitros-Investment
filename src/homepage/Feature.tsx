import React from "react";
import { Button, Card } from "semantic-ui-react";

const Feature: React.FC<{ name: string; text: string }> = ({ name, text }) => {
  return (
    <div style={{ width: "20rem", margin: "10px" }}>
      {/* <i className={icon}></i> */}
      <Card>
        <Card.Content>
          <Card.Header style={{ color: "blue" }}>{name}</Card.Header>
          <Card.Description>{text}</Card.Description>
        </Card.Content>

        <Button>Invest</Button>
      </Card>
    </div>
  );
};

export default Feature;
