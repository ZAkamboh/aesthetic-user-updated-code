import React from "react";
import { colors } from "shared-components/colors";
import { gilroyMedium } from "shared-components/fonts";
import { gilroySemibold } from "shared-components/fonts";
import { Media } from "shared-components/media";
import styled from "styled-components";

class Homedetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  componentWillMount() {
    var detaildata = this.props.location.state.item;
    this.setState({ detail: detaildata });
  }
  render() {
    const item = this.state.detail && this.state.detail;
    return (
      <Wrapper imgBg={item && item.url}>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDescription>{item.desc}</ItemDescription>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${(props) => props.imgBg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:0px 100px;
  text-align:center;
  &:before {
    background: ${colors.secondaryColor + "80"};
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    z-index:0;
  }
  ${Media('xlscreens')}{
    padding:0 5.2vw;
  }
  ${Media('tablet')}{
    padding:0px 15px;
    padding-top:75px;
  }
`;
const ItemTitle = styled.h1`
  font-size: 46px;
  color: white;
  font-family: ${gilroySemibold};
  position:relative;
  z-index:9;
  margin:20px 0;
  ${Media('xlscreens')}{
    font-size:2.34vw;
    margin:1.04vw 0;
  }
  ${Media('tablet')}{
    font-size:32px;
  }
`;
const ItemDescription = styled.p`
  color: white;
  font-size: 20px;
  font-family: ${gilroyMedium};
  position:relative;
  z-index:9;
  ${Media('xlscreens')}{
    font-size:1.04vw;
  }
  ${Media('tablet')}{
    font-size:14px;
  }
`;
export default Homedetail;
