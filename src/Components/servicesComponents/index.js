import React from "react";
import { connect } from "react-redux";
import { AppActions } from "../../store/actions";
import Loader2 from "../homeloader";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IntroBg from "../../Assets/Images/introBg2.jpg";

import {
  colors,
  gilroyBold,
  gilroyMedium,
  gilroySemibold,
  gilroyExtrabold,
  Media,
} from "shared-components";
import "./index.css";
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  componentWillMount() {
    this.props.servicedata();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.servicedataa) {
      nextProps.servicedataa.sort((a, b) => a - b).reverse();
      this.setState({ data: nextProps.servicedataa });
    }
  }
  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  render() {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    }.bind(this);
    return (
      <Wrapper>
        <IntroSection>
          <Container>
            <IntroTagLine>GET THE BEST</IntroTagLine>
            <IntroTitle>
              Your desired service <br />
              according to your Expectation
            </IntroTitle>
            <IntroPara>
              Get instant and affordable Medical Consultation <br />
              from our top specialists. Anywhere, Anytime!. <br />
              Our mission is to provide best treatment of knee joint, <br />
              Ankle joints, Elbow joints, Shoulder joints, Hip joints <br />
              and spinal injuries with stem cell therapy.
            </IntroPara>
            <BookAppoint>Book an Appointment</BookAppoint>
          </Container>
        </IntroSection>
        {this.props.loader && (
          <LoaderWrapper>
            <Loader2 />
          </LoaderWrapper>
        )}
        <Container>
          <Row>
            <Col col={12}>
              <Fade left delay={1000}>
                <SectionHeading>Services We Offers</SectionHeading>
              </Fade>
            </Col>
          </Row>
          <Row noGutter>
            {this.state.data.map((item, index) => {
              return (
                <Fade bottom delay={1000}>
                  <TopicCard key={index} lg={12}>
                    <CustomCol lg={8}>
                      <TopicDetails>
                        <TopicTitle>{item.title}</TopicTitle>
                        <TopicPara>{item.desc}</TopicPara>
                        <Rate>{item.rate ?? "PKR 40,000"}</Rate>
                      </TopicDetails>
                    </CustomCol>
                    <CustomCol lg={4}>
                      <TopicImg>
                        <img src={item.url} alt="-" />
                      </TopicImg>
                    </CustomCol>
                  </TopicCard>
                </Fade>
              );
            })}
          </Row>
        </Container>
        <div
          id="myBtn"
          style={{ display: this.state.scrolled ? "block" : "none" }}
          onClick={() => this.gotoTop()}
        >
          <ArrowUpwardIcon />
        </div>
      </Wrapper>
    );
  }
}

function mapState(state) {
  return {
    loader: state.AppReducer.loader,
    servicedataa: state.AppReducer.servicedataa,
  };
}
function mapDispatch(dispatch) {
  return {
    servicedata: () => {
      dispatch(AppActions.servicedata());
    },
  };
}
const Wrapper = styled.div`
  margin-bottom: 50px;
  .react-reveal {
    width: 100%;
  }
`;
const LoaderWrapper = styled.div`
  margin: 50px 0;
`;
const IntroSection = styled.div`
  min-height: 100vh;
  background-image: url(${IntroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top:76px;
  .container {
    position: relative;
    z-index: 9;
  }
  &:before {
    position: absolute;
    z-index: 9;
    content: "";
    background-color: ${colors.secondaryColor + "90"};
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
const SectionHeading = styled.h1`
  font-size: 62px;
  font-family: ${gilroyBold};
  color: ${colors.secondaryColor};
  text-align: center;
  margin: 50px 0;
`;
const TopicCard = styled(Col)`
  border: 1px solid ${colors.borderColor};
  margin-top: 50px;
  min-height: 400px;
  display: flex;
  align-items: center;
  background-color: ${colors.secondaryColor};
  padding: 0;
  width: 100%;
  position: relative;
`;
const CustomCol = styled(Col)`
  height: 100%;
  padding: 0;
`;
const TopicImg = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
  &:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: ${colors.secondaryColor + "70"};
    z-index: 9;
  }
`;
const TopicDetails = styled.div`
  padding: 50px;
`;
const TopicTitle = styled.h1`
  color: white;
  font-size: 42px;
  font-family: ${gilroyBold};
  margin-bottom: 15px;
`;
const TopicPara = styled.p`
  color: white;
  font-size: 18px;
  font-family: ${gilroyMedium};
`;
const Rate = styled.div`
  padding: 10px 0px;
  margin-top: 40px;
  width: 350px;
  border-radius: 10px;
  background-color: white;
  color: ${colors.secondaryColor};
  font-family: ${gilroyMedium};
  font-size: 24px;
  text-align: center;
`;
const IntroTagLine = styled.div`
  font-size: 22px;
  letter-spacing: 1px;
  font-family: ${gilroyBold};
  color: white;
`;
const IntroTitle = styled.h1`
  font-size: 80px;
  font-family: ${gilroyExtrabold};
  line-height: 1;
  margin: 30px 0;
  letter-spacing: -1.5px;
  color: white;
`;
const IntroPara = styled.p`
  font-size: 24px;
  font-family: ${gilroyMedium};
  color: white;
`;
const BookAppoint = styled.button`
  background: ${colors.secondaryColor};
  padding: 0px 15px;
  color: white;
  font-size: 14px;
  font-family: ${gilroySemibold};
  border: none;
  position: relative;
  z-index: 9;
  border: 3px solid ${colors.secondaryColor};
  margin-left: 5px;
  margin-top: 20px;
  border-radius: 50px;
  height: 50px;
  &:focus {
    outline: none;
  }
  &:after {
    position: absolute;
    content: "";
    transform: scale(0.5);
    visibility: hidden;
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: -9;
    background-color: white;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
    border-radius: 50px;
  }
  &:hover {
    border-color: ${colors.secondaryColor};
    color: ${colors.secondaryColor};
    &:after {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }
  ${Media("xlscreens")} {
    font-size: 0.9vw;
    height: 2.66vw;
  }
`;
export default connect(mapState, mapDispatch)(Services);
