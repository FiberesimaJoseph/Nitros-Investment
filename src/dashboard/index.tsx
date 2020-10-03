import React, { useState } from "react";
import {
  Menu,
  Segment,
  Card,
  Message,
  Container,
  Form,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

interface Message {
  header?: string;
  content?: string;
}

const Index: React.FC = () => {
  const cards = [
    {
      name: "Trade profit",
      description: "$0",
      bg: "gray",
    },
    {
      name: "Referral bonus",
      description: "$0",
      bg: "yellow",
    },
    {
      name: "Total deposits",
      description: "$0",
      bg: "green",
    },
    {
      name: "Total withdraws",
      description: "$0",
      bg: "blue",
    },
  ];

  const [message, setMessage] = useState<Message | null>(null);
  const [showWithdraw, setShowWithdraw] = useState<boolean>(false);
  return (
    <div className="dashboard">
      <Menu>
        <Link to="/" className="site-logo">
          <img
            src="logo.jpg"
            alt=""
            style={{ width: "10em", padding: "10px" }}
          />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item
            name="deposit"
            // active={activeItem === "editorials"}
            onClick={() => {
              setMessage({
                header:
                  "All deposits must be made to the expert trader directly",
              });
              setShowWithdraw(false);
            }}
          >
            Deposit
          </Menu.Item>
          <Menu.Item
            name="withdraw"
            onClick={() => {
              setShowWithdraw(true);
              setMessage(null);
            }}
          >
            Withdraw
          </Menu.Item>{" "}
          <Menu.Item name="editorials">Transactions</Menu.Item>
          <Menu.Item name="reviews">Profile</Menu.Item>
          <Menu.Item name="upcomingEvents">Logout</Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        {message ? (
          <Message
            onDismiss={() => setMessage(null)}
            header={message.header}
            content=""
          />
        ) : null}
        {showWithdraw ? (
          <div style={{ width: "60%" }}>
            <Form
              onSubmit={() => {
                setTimeout(() => {
                  setMessage({
                    header:
                      "Your withdrawal is being processed and you will recieve funds within 24 hours,",
                  });
                }, 1000);
              }}
            >
              <Form.Field>
                <label>Amount</label>
                <input placeholder="Input withdrawal amount" type="number" />
              </Form.Field>
              <Form.Field>
                <label>Account</label>
                <input placeholder="Input withdrawal ccount" type="number" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        ) : null}
      </Container>
      <Segment>
        <Card.Group
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {cards.map((c, i) => (
            <Card key={i} style={{ backgroundColor: `${c.bg}` }}>
              <Card.Content>
                <Card.Header>{c.name}</Card.Header>
                <Card.Description>{c.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
    </div>
  );
};

export default Index;
