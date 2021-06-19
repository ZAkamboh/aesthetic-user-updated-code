import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "shared-components";
import { Link } from "react-router-dom";
import { gilroySemibold } from "shared-components/fonts";
import { gilroyMedium } from "shared-components/fonts";

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col lg="4">
              <FooterSectionTitle>Available Treatments</FooterSectionTitle>
              <ul>
                <li>
                  <Link>Hair Transplant</Link>
                </li>
                <li>
                  <Link>Acne Removal Transplant</Link>
                </li>
                <li>
                  <Link>Knee injection</Link>
                </li>
                <li>
                  <Link>Stem Cells Treatment</Link>
                </li>
                <li>
                  <Link>General Physicians</Link>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <FooterSectionTitle>Explore</FooterSectionTitle>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link>Events</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li>
                  <Link>Book Appointment</Link>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <FooterSectionTitle>Consultation Timings</FooterSectionTitle>
              <ul>
                <li>
                  Monday - Saturday <br />
                  09:00am - 10:00pm <br />
                  <span>
                    <svg
                      class="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      role="presentation"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                    </svg>
                    &nbsp;honeyshery@yahoo.com <br />
                    <svg
                      class="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      role="presentation"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path>
                    </svg>
                    &nbsp;+92 336 5777715, +92 21 34325599
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  min-height: 400px;
  background-color: ${colors.secondaryColor};
  padding: 50px 0;
  text-align: center;
  ul {
    margin-top: 20px;
    padding: 0;
    li {
      color: white;
      font-size: 16px;
      font-family: ${gilroyMedium};
      line-height:2;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
const FooterSectionTitle = styled.h1`
  font-size: 34px;
  color: white;
  font-family: ${gilroySemibold};
`;
export default Footer;
