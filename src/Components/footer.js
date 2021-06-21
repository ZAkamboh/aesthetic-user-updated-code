import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "shared-components";
import { Link } from "react-router-dom";
import { gilroySemibold } from "shared-components/fonts";
import { gilroyMedium } from "shared-components/fonts";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
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
                    <MailOutlineIcon />&nbsp;honeyshery@yahoo.com <br />
                    <CallIcon />&nbsp;+92 336 5777715, +92 21 34325599
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
      line-height: 2;
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
