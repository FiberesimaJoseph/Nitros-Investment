import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Process from "../components/Process";
import Fact from "../components/Fact";
import Team from "../components/Team";
import Review from "../components/Review";
import Footer from "../components/Footer";
import { Modal, Button } from "semantic-ui-react";
const Homepage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  React.useEffect(() => {
    window.setTimeout(() => {
      setOpen(true);
    }, 5000);
  }, []);
  return (
    <>
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>Notice!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            PLEASE...NOTE THAT ALL DEPOSITS/PAYMENTS SHOULD BE MADE DIRECTLY TO
            THE COMPANY ACCOUNT/BITCOIN WALLET ADDRESS,NO PAYMENTS/DEPOSITS
            SHOULD BE MADE TO ANY ACCOUNT MANAGER. THE COMPANY WILL NOT BE HELD
            RESPONSIBLE FOR ANY LOSS THAT COMES WITH MAKING PAYMENTS TO ANY
            ACCOUNTS MANAGER... THANK YOU FOR YOUR UNDERSTANDING AND
            COOPERATION. nitrosinvestment.com
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>
      <Header />
      <Hero />
      <About />
      <Features />
      <Process />
      <Fact />
      <Team />
      <Review />
      <Footer />
    </>
  );
};

export default Homepage;