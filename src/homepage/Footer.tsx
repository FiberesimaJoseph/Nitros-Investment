import React from "react";
import { Container, Icon } from "semantic-ui-react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer-section">
      <Container>
        <div
          className="row spad"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-6 col-lg-3 footer-widget">
            <img src="img/logo.png" className="mb-4" alt="" />
            {/* <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia dese mollit anim id est laborum.
            </p> */}
            {/* <span><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            <a href="http://colorlib.com">
              Copyright &copy;{date.getFullYear()} All rights reserved | This
              Website is built by Nitros Investment
            </a>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></span> */}
          </div>
          <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
            <h5 className="widget-title">Follow Us</h5>
            <div className="social">
              <a href="/" className="facebook">
                <Icon name="facebook" />
              </a>
              <a href="/" className="google">
                <Icon name="google" />
              </a>
              <a href="/" className="instagram">
                <Icon name="instagram" />
              </a>
              <a href="/" className="twitter">
                <Icon name="twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-8 text-center text-lg-right">
              <ul className="footer-nav">
                <li>
                  <a href="/">Terms of Use</a>
                </li>
                <li>
                  <a href="/">Privacy Policy </a>
                </li>
                <li>
                  <a
                    href="mailto:info@nitrosinvestment.online"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@nitrosinvestment.online
                  </a>
                </li>
                {/* <li>
                  <a href="/">(+1) 456-7890</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
