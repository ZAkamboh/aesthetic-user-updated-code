import React from "react";
import { AppActions } from "store/actions";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  colors,
  gilroyBold,
  gilroyMedium,
  gilroySemibold,
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
      <div className="homeCopyMainClass">
        <ImportantTopic>
          <Container>
            <Row>
              <Col col={8}>
                <SectionHeading>What's new This Week</SectionHeading>
              </Col>
              <Col col={4}>
                <ImportTopSubHead>
                  In this week we are giving some information about the stem
                  cells treatments.In this week we are giving some information about the stem
                  cells treatments.In this week we are giving some information about the stem
                  cells treatmentsIn this week we are giving some information about the stem
                  cells treatments.In this week we are giving some information about the stem
                  cells treatments
                </ImportTopSubHead>
              </Col>
            </Row>
            <Row noGutter>
              {this.state.data.map((item, index) => {
                console.log(item);
                return (
                  <Fade bottom delay={1000}>
                    <TopicCard key={index} lg={12}>
                      <CustomCol lg={8}>
                        <TopicDetails>
                          <TopicTitle>{item.title}</TopicTitle>
                          <TopicPara>
                            <Truncate lines={5}>{item.desc}</Truncate>
                          </TopicPara>
                          <ReadMoreBtn>Read More</ReadMoreBtn>
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
        </ImportantTopic>
        <div
          id="myBtn"
          style={{ display: this.state.scrolled ? "block" : "none" }}
          onClick={() => this.gotoTop()}
        >
          <ArrowUpwardIcon />
        </div>
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
const ImportantTopic = styled.section`
  background-color: ${colors.secondaryBG};
  padding: 50px 0;
  position: relative;
  margin-bottom: 200px;
  .react-reveal {
    width: 100%;
  }
`;
const TopicCard = styled(Col)`
  border: 1px solid ${colors.borderColor};
  margin-top: 50px;
  height: 400px;
  display: flex;
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
`;
const SectionHeading = styled.h1`
  font-size:62px;
  font-family:${gilroyBold};
  color:white;
`;
const ImportTopSubHead = styled.p`
  font-size:18px;
  font-family:${gilroySemibold};
  color:white;
`;
export default connect(mapState, mapDispatch)(Homechild);
