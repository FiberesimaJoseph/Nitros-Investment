import React from "react";
import { Menu, Button } from "semantic-ui-react";

const Header = () => {
  return (
    <header className="header-section clearfix">
      <Menu secondary>
        <Menu.Item>
          <a href="index.html" className="site-logo">
            <img src="logo.png" alt="" />
          </a>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="Home"
            // active={activeItem === 'logout'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="About"
            // active={activeItem === 'logout'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Contact"
            // active={activeItem === 'logout'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Button
              href="login.html"
              style={{
                backgroundColor: "unset",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              Login
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </header>
  );
};

export default Header;
