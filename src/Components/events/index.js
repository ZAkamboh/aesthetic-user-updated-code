import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { AppActions } from "../../store/actions";
import Loader2 from "../homeloader";
import styled from "styled-components";
import EventVideoBg from "../../Assets/video/event-video.mp4";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import {
  colors,
  gilroyBold,
  gilroyMedium,
  gilroyExtrabold,
} from "shared-components";
import { Media } from "shared-components/media";
class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  componentWillMount() {
    this.props.event();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.eventdataa) {
      nextProps.eventdataa.sort((a, b) => a - b).reverse();
      this.setState({ data: nextProps.eventdataa });
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
          <VideoBg autoPlay muted>
            <source src={EventVideoBg} type="video/mp4" />
          </VideoBg>
          <Container>
            <IntroTagLine>Explore Some Events</IntroTagLine>
            <IntroTitle>Explore the world of Medical Treatments</IntroTitle>
            <IntroPara>
              Explore some of the usefull videos related to the treatments below
              and get satisfaction from <br />
              our top Specialists at Al-Shifa Medical Centre.
            </IntroPara>
          </Container>
        </IntroSection>
        {this.props.loader && <Loader2 />}
        <Container>
          <Row>
            <Col col={12}>
              <Fade left delay={1000}>
                <SectionHeading>Events</SectionHeading>
              </Fade>
            </Col>
          </Row>
          <Row>
            {this.state.data.map((item, index) => {
              return (
                <Fade bottom delay={1000} key={index}>
                  <TopicCard lg={12}>
                    <CustomCol lg={item.type === "video" ? 4 : 7}>
                      <TopicDetails>
                        <TopicPara>{item.desc}</TopicPara>
                      </TopicDetails>
                    </CustomCol>
                    <CustomCol lg={item.type === "video" ? 8 : 5}>
                      {(item.type === "video" && (
                        <ReactPlayer
                          className="react-player"
                          url={item.url}
                          controls
                          height="4%"
                          width="100%"
                        />
                      )) || (
                        <TopicImg>
                          <img src={item.url} alt="-" />
                        </TopicImg>
                      )}
                    </CustomCol>
                  </TopicCard>
                </Fade>
              );
            })}
          </Row>
        </Container>
        <GoToTop
          style={{ display: this.state.scrolled ? "flex" : "none" }}
          onClick={() => this.gotoTop()}
        >
          <ArrowUpwardIcon />
        </GoToTop>
      </Wrapper>
    );
  }
}

function mapState(state) {
  return {
    loader: state.AppReducer.loader,
    eventdataa: state.AppReducer.eventdataa,
  };
}
function mapDispatch(dispatch) {
  return {
    event: () => {
      dispatch(AppActions.event());
    },
  };
}
const VideoBg = styled.video`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;
const Wrapper = styled.div`
  margin-bottom: 50px;
  .react-reveal {
    width: 100%;
  }
  ${Media("xlscreens")} {
    margin-bottom: 2.66vw;
  }
`;
const IntroSection = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  text-align: center;
  .container {
    z-index: 9;
    position: absolute;
  }
  &:before {
    position: absolute;
    z-index: 9;
    content: "";
    background-color: #00000080
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
const IntroTagLine = styled.div`
  font-size: 22px;
  letter-spacing: 1px;
  font-family: ${gilroyBold};
  color: ${colors.secondaryColor};
  ${Media("xlscreens")} {
    font-size: 1.14vw;
  }
`;
const IntroTitle = styled.h1`
  font-size: 80px;
  font-family: ${gilroyExtrabold};
  line-height: 1;
  margin: 30px 0;
  letter-spacing: -1.5px;
  color: ${colors.secondaryColor};
  ${Media("xlscreens")} {
    font-size: 4.166vw;
    margin: 1.56vw 0;
  }
`;
const IntroPara = styled.p`
  font-size: 24px;
  font-family: ${gilroyMedium};
  color: ${colors.secondaryColor};
  ${Media("xlscreens")} {
    font-size: 1.25vw;
  }
`;
const SectionHeading = styled.h1`
  font-size: 62px;
  font-family: ${gilroyBold};
  color: ${colors.secondaryColor};
  text-align: center;
  margin: 50px 0;
  ${Media("xlscreens")} {
    font-size: 3.22vw;
    margin: 2.66vw 0;
  }
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
  ${Media("xlscreens")} {
    margin-top: 2.66vw;
    min-height: 20.83vw;
  }
`;
const CustomCol = styled(Col)`
  height: 100%;
  padding: 0;
`;
const TopicDetails = styled.div`
  padding: 50px;
  ${Media("xlscreens")} {
    padding: 2.66vw;
  }
`;
const TopicPara = styled.p`
  color: white;
  font-size: 18px;
  font-family: ${gilroyMedium};
  ${Media("xlscreens")} {
    font-size: 0.93vw;
  }
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
export default connect(mapState, mapDispatch)(Events);
