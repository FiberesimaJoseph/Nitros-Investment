import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navigation clearfix">
      <Menu secondary>
        <Menu.Item>
          <a href="#/" className="site-logo">
            <img src="logo.jpg" alt="" style={{ width: "10em" }} />
          </a>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="Home" as={Link} to="/" />
          {/* <Menu.Item name="About" as={Link} to="/about" /> */}
          {/* <Menu.Item name="Contact" as={Link} to="/contact" /> */}
          <Menu.Item
            name="login"
            as={Link}
            to="/login"
            style={{
              backgroundColor: "unset",
              fontSize: "1.5rem",
              color: "white",
            }}
          />
          <Menu.Item
            name="Signup"
            as={Link}
            to="/register"
            style={{
              backgroundColor: "unset",
              fontSize: "1.5rem",
              color: "white",
            }}
          />
        </Menu.Menu>
      </Menu>
    </header>
  );
};

export default Header;
