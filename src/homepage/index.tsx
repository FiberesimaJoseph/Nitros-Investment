import React, { useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Process from "./Process";
import Fact from "./Fact";
import Team from "./Team";
import Review from "./Review";
import Footer from "./Footer";
import { Modal, Button } from "semantic-ui-react";
import Header from "../components/Header";

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
            Nitros Investment offers the best investment banking where your
            investment is managed by our professional team. Due to security
            reasons, please notify yourself to our customer care service{" "}
            <a
              href="mailto:info@nitrosinvestment.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@nitrosinvestment.online
            </a>{" "}
            or livechat with our officials before any investment is made to
            avoid any form of fraudulent acts. Thank you for choosing us, your
            investment is safe wiht us.
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
