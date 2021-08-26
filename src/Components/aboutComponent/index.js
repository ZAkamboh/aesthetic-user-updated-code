import React from "react";
import { AppActions } from "store/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import IntroBg from "Assets/Images/aboutBg.jpg";
import {
  colors,
  gilroyBold,
  gilroyMedium,
  gilroyExtrabold,
} from "shared-components";
import { gilroySemibold } from "shared-components/fonts";
import { Media } from "shared-components/media";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  componentWillMount() {
    this.props.aboutdata();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.aboutdataa) {
      nextProps.aboutdataa.sort((a, b) => a - b).reverse();
      this.setState({ data: nextProps.aboutdataa });
    }
  }

  render() {
    return (
      <Wrapper>
        <IntroSection>
          <Container>
            <IntroTagLine>ABOUT US</IntroTagLine>
            <IntroTitle>Who We Are?</IntroTitle>
            <IntroPara>
              Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS
              Karachi. Which is symbol of primary healthcare sector,with a
              vision to provide specially Stem cell therapy,which is newly
              introduced in Pakistan and this Stem cell therapy is performed by
              Dr Asad Ullah Awan Assistant Professor Plastic surgery Dow
              University of Health Sciences Karachi.Infertility clinic run by
              renounced Gynaecologist Dr Ambreen Khan MBBS FCPS Member American
              Society of Obstetricians and Gynaecologist. Dental Clinic run by
              renounced Dental Surgeon Dr Aziz BDS MS in (Prosthodontics)
              specialist in Dental implant and Braces. We operate with a mission
              to offer comprehensive and consistent services in an environment
              where community needs are met with modern healthcare systems,
              which is integral to our patient care. We are proud to make a
              difference one patient at a time, by effectively meeting
              challenging medical services demands, through our core
              competencies of patient safety and patient care excellence, which
              is imperative to improve the quality of life.The Center is known
              for its quality of treatment,expertise of Doctors and
              technologically advanced services in Primary healthcare. I am
              certain that such measures combined with a compassionate and safe
              hospital environment, dedicated staff and team members of credible
              Doctors and specially Dr Muhammad Sharif, makes Al Shifa Medical
              Center, the most reputed primary health care destination in
              Karachi.
            </IntroPara>
            <Author>
              Dr.Ambreen Khan <span>- Director at ASMC</span>
            </Author>
          </Container>
        </IntroSection>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    loader: state.AppReducer.loader,
    aboutdataa: state.AppReducer.aboutdataa,
  };
}
function mapDispatch(dispatch) {
  return {
    aboutdata: () => {
      dispatch(AppActions.aboutdata());
    },
  };
}
const Wrapper = styled.div`
  min-height: 100vh;
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
  padding-top: 76px;
  text-align: center;
  .container {
    position: relative;
    z-index: 9;
  }
  &:before {
    position: absolute;
    z-index: 9;
    content: "";
    background-color: ${colors.secondaryColor + "99"};
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  ${Media("tablet")} {
    text-align: center;
    padding: 0px 15px;
    padding-top: 90px;
    padding-bottom:30px;
  }
`;
const IntroTagLine = styled.div`
  font-size: 22px;
  letter-spacing: 1px;
  font-family: ${gilroyBold};
  color: white;
  ${Media("xlscreens")} {
    font-size: 1.14vw;
  }
  ${Media("tablet")} {
    font-size: 16px;
  }
`;
const IntroTitle = styled.h1`
  font-size: 80px;
  font-family: ${gilroyExtrabold};
  line-height: 1;
  margin: 30px 0;
  letter-spacing: -1.5px;
  color: white;
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
  font-size: 22px;
  font-family: ${gilroyMedium};
  color: white;
  text-align:justify;
  ${Media("xlscreens")} {
    font-size: 1.14vw;
  }
  ${Media("tablet")} {
    font-size: 14px;
    font-family: ${gilroySemibold};
    br {
      display: none;
    }
  }
`;
const Author = styled.div`
  margin-top: 30px;
  font-size: 28px;
  color: white;
  font-family: ${gilroyBold};
  span {
    font-size: 18px;
    font-family: ${gilroySemibold};
  }
  ${Media("xlscreens")} {
    margin-top: 1.57vw;
    font-size: 1.45vw;
    span {
      font-size: 0.93vw;
    }
  }
  ${Media('tablet')}{
    font-size:22px;
    span{
      font-size:14px;
    }
  }
`;
export default connect(mapStateToProps, mapDispatch)(About);
