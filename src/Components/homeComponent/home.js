import React from "react";
import { AppActions } from "store/actions";
import { Container, Row, Col } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { connect } from "react-redux";
import styled from "styled-components";
import IntroBg from "Assets/Images/introBg.jpg";
import {
  colors,
  gilroyBold,
  gilroyMedium,
  gilroySemibold,
  gilroyExtrabold,
  Media,
} from "shared-components";
import Truncate from "react-truncate";
import Fade from "react-reveal/Fade";

class Homechild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      scrolled: false,
    };
    this.props.fetchhomedata();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.homedata.length > 0) {
      nextProps.homedata.sort((a, b) => a - b).reverse();
      this.setState({ data: nextProps.homedata });
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
      <div style={{ overflow: "hidden" }}>
        <IntroSection>
          <Container>
            <IntroTagLine>WELCOME TO ASMC</IntroTagLine>
            <IntroTitle>
              We are always Here <br />
              for your Care
            </IntroTitle>
            <IntroPara>
              Get instant and affordable Medical Consultation <br />
              from our top specialists. Anywhere, Anytime!. <br />
              Our mission is to provide best treatment of knee joint, <br />
              Ankle joints, Elbow joints, Shoulder joints, Hip joints <br />
              and spinal injuries with stem cell therapy.
            </IntroPara>
            <BookAppoint onClick={()=>this.props.history.push("/book-appointment")}>Book an Appointment</BookAppoint>
          </Container>
        </IntroSection>
        <ImportantTopic>
          <Container>
            <Row>
              <Col lg={8}>
                <Fade left delay={1000}>
                  <SectionHeading>What's new This Week</SectionHeading>
                </Fade>
              </Col>
              <Col lg={4}>
                <Fade right delay={1500}>
                  <ImportTopSubHead>
                    In this week we are giving some information about the stem
                    cells treatments.In this week we are giving some information
                    about the stem cells treatments.In this week we are giving
                    some information about the stem cells treatmentsIn this week
                    we are giving some information about the stem cells
                    treatments.In this week we are giving some information about
                    the stem cells treatments
                  </ImportTopSubHead>
                </Fade>
              </Col>
            </Row>
            <Row noGutter>
              {this.state.data.map((item, index) => {
                return (
                  <Fade bottom delay={500} key={index}>
                    <TopicCard lg={12}>
                      <CustomCol lg={8} xs={12} md={8}>
                        <TopicDetails>
                          <TopicTitle>{item.title}</TopicTitle>
                          <TopicPara>
                            <Truncate lines={5}>{item.desc}</Truncate>
                          </TopicPara>
                          <ReadMoreBtn
                            onClick={() =>
                              this.props.history.push("/homeDetail", {
                                item: item,
                              })
                            }
                          >
                            Read More
                          </ReadMoreBtn>
                        </TopicDetails>
                      </CustomCol>
                      <CustomCol lg={4} xs={0} md={4}>
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
        </ImportantTopic>
        <GoToTop
          style={{ display: this.state.scrolled ? "flex" : "none" }}
          onClick={() => this.gotoTop()}
        >
          <ArrowUpwardIcon />
        </GoToTop>
      </div>
    );
  }
}
function mapState(state) {
  return {
    homedata: state.AppReducer.homedata,
  };
}
function mapDispatch(dispatch) {
  return {
    fetchhomedata: () => {
      dispatch(AppActions.fetchhomedata());
    },
  };
}
const IntroSection = styled.div`
  min-height: 100vh;
  background-image: url(${IntroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .container {
    position: relative;
    z-index: 9;
  }
  &:before {
    position: absolute;
    z-index: 9;
    content: "";
    background-color: ${colors.secondaryColor + "50"};
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  ${Media("xlscreens")} {
    padding-top: 3.95vw;
  }
  ${Media("tablet")} {
    text-align: center;
    padding:0px 15px;
    padding-top:90px;
    padding-bottom:30px;
    &:before {
      background-color:#ffffff40;
    }
  }
`;
const ImportantTopic = styled.section`
  background-color: ${colors.secondaryBG};
  position: relative;
  .react-reveal {
    width: 100%;
  }
  ${Media('tablet')}{
    padding:50px 15px;
  }
`;
const TopicCard = styled(Col)`
  border: 1px solid ${colors.borderColor};
  margin-top: 50px;
  display: flex;
  background-color: ${colors.secondaryColor};
  padding: 0;
  width: 100%;
  position: relative;
  ${Media("xlscreens")} {
    margin-top: 2.66vw;
    height: 20.83vw;
  }
  ${Media('tablet')}{
    align-items:center;
  }
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
  ${Media("xlscreens")} {
    padding: 2.66vw;
  }
  ${Media('tablet')}{
    padding:20px;
  }
`;
const TopicTitle = styled.h1`
  color: white;
  font-size: 42px;
  font-family: ${gilroyBold};
  margin-bottom: 15px;
  ${Media("xlscreens")} {
    font-size: 2.18vw;
    margin-bottom: 0.78vw;
  }
  ${Media('tablet')}{
    font-size:26px;
  }
`;
const TopicPara = styled.p`
  color: white;
  font-size: 18px;
  font-family: ${gilroyMedium};
  ${Media("xlscreens")} {
    font-size: 0.93vw;
  }
  ${Media('tablet')}{
    font-size:14px;
  }
`;
const ReadMoreBtn = styled.button`
  background-color: white;
  border: none;
  margin-top: 20px;
  padding: 10px 40px;
  font-size: 16px;
  border-radius: 20px;
  font-family: ${gilroySemibold};
  &:focus {
    outline: none;
  }
  ${Media("xlscreens")} {
    margin-top: 1.04vw;
    padding: 0.53vw 2.08vw;
    font-size: 0.83vw;
    border-radius: 1.04vw;
  }
`;
const SectionHeading = styled.h1`
  font-size: 62px;
  font-family: ${gilroyBold};
  color: white;
  ${Media("xlscreens")} {
    font-size: 3.22vw;
  }
  ${Media('tablet')}{
    font-size:40px;
  }
`;
const ImportTopSubHead = styled.p`
  font-size: 18px;
  font-family: ${gilroySemibold};
  color: white;
  ${Media("xlscreens")} {
    font-size: 0.93vw;
  }
  ${Media('tablet')}{
    font-size: 16px;
  }
`;
const IntroTagLine = styled.div`
  letter-spacing: 1px;
  font-family: ${gilroyBold};
  color: ${colors.secondaryColor};
  ${Media("xlscreens")} {
    font-size: 1.14vw;
  }
  ${Media("tablet")} {
    font-size: 16px;
  }
`;
const IntroTitle = styled.h1`
  font-family: ${gilroyExtrabold};
  line-height: 1;
  letter-spacing: -1.5px;
  color: ${colors.secondaryColor};
  ${Media("xlscreens")} {
    font-size: 4.166vw;
    margin: 1.56vw 0;
  }
  ${Media("tablet")} {
    font-size: 38px;
    margin: 20px 0;
    br {
      display: none;
    }
  }
`;
const IntroPara = styled.p`
  font-family: ${gilroyMedium};
  color: ${colors.secondaryColor};
  ${Media("xlscreens")} {
    font-size: 1.25vw;
  }
  ${Media("tablet")} {
    font-size: 16px;
    font-family: ${gilroySemibold};
    br {
      display: none;
    }
  }
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
    padding: 0 0.78vw;
    margin-left: 0.26vw;
    border-radius: 2.66vw;
    &:after {
      border-radius: 2.66vw;
    }
  }
`;
const GoToTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: ${colors.secondaryColor};
  color: white;
  cursor: pointer;
  border-radius: 10px;
  height: 50px;
  width: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 24px;
  }
  &:hover {
    background-color: #555;
  }
  ${Media("xlscreens")} {
    bottom: 1.04vw;
    right: 1.57vw;
    border-radius: 0.53vw;
    height: 2.66vw;
    width: 2.66vw;
    svg {
      font-size: 1.25vw;
    }
  }
`;
export default connect(mapState, mapDispatch)(Homechild);
