import React from "react";
import { Row, Col } from "react-bootstrap";
import { colors } from "shared-components/colors";
import { gilroyMedium } from "shared-components/fonts";
import { gilroyBold } from "shared-components/fonts";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { gilroySemibold } from "shared-components/fonts";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Media } from "shared-components/media";

class BookAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  disableSunday = (date) => {
    return date.getDay() === 0 || date.getDay() === 7;
  };
  render() {
    return (
      <Wrapper>
        <Row>
          <Col lg={6}>
            <TextWrapper>
              <Title>Book Appointment</Title>
              <ShortDesc>
                Get instant and affordable Medical Consultation from our top
                specialists. Anywhere, Anytime!. Our mission is to provide best
                treatment of knee joint, Ankle joints, Elbow joints, Shoulder
                joints, Hip joints and spinal injuries with stem cell therapy.
              </ShortDesc>
            </TextWrapper>
          </Col>
          <Col lg={6}>
            <FormWrapper>
              <Form>
                <FormTitle>Fill Your Complete Information</FormTitle>
                <Col lg={6}>
                  <TextField id="standard-basic" label="First Name" required />
                </Col>
                <Col lg={6}>
                  <TextField id="standard-basic" label="Last Name" required />
                </Col>
                <Col lg={6}>
                  <TextField
                    type="email"
                    id="standard-basic"
                    label="Email"
                    required
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="standard-basic"
                    label="Mobile Number"
                    required
                    inputProps={{
                      maxLength: 11,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+92</InputAdornment>
                      ),
                    }}
                  />
                </Col>
                <Col lg={6}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Select Appointement
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Appointement"
                      required
                    >
                      <MenuItem value={"Liposuction"}>Liposuction</MenuItem>
                      <MenuItem value={"Face Uplift"}>Face Uplift</MenuItem>
                      <MenuItem value={"Blaphroplasty"}>Blaphroplasty</MenuItem>
                      <MenuItem value={"Rhinoplasty"}>Rhinoplasty</MenuItem>
                      <MenuItem value={"Breast Reshape"}>
                        Breast Reshape
                      </MenuItem>
                      <MenuItem value={"Hair fall treatment PRP"}>
                        Hair fall treatment PRP
                      </MenuItem>
                      <MenuItem value={"Wrinkles treatment"}>
                        Wrinkles treatment
                      </MenuItem>
                      <MenuItem value={"Skin whitening"}>
                        Skin whitening
                      </MenuItem>
                      <MenuItem value={"Face PRP"}>Face PRP</MenuItem>
                      <MenuItem value={"Scar removing"}>Scar removing</MenuItem>
                      <MenuItem value={"Chemical Peel"}>Chemical Peel</MenuItem>
                      <MenuItem value={"Botox"}>Botox</MenuItem>
                      <MenuItem value={"Stem cell therapy"}>
                        Stem cell therapy
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Col>
                <Col lg={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Select Date"
                      format="MM/dd/yyyy"
                      value={this.state.selectedDate}
                      onChange={this.handleDateChange}
                      disablePast
                      shouldDisableDate={this.disableSunday}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Col>
                <Col lg={6}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Select Available Shift
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Available Shift"
                    >
                      <MenuItem value={"09:00am - 10:00am"}>
                        09:00am - 10:00am
                      </MenuItem>
                      <MenuItem value={"10:00am - 11:00am"}>
                        10:00am - 11:00am
                      </MenuItem>
                      <MenuItem value={"11:00am - 12:00pm"}>
                        11:00am - 12:00pm
                      </MenuItem>
                      <MenuItem value={"01:00pm - 02:00pm"}>
                        01:00pm - 02:00pm
                      </MenuItem>
                      <MenuItem value={"03:00pm - 04:00pm"}>
                        03:00pm - 04:00pm
                      </MenuItem>
                      <MenuItem value={"04:00pm - 05:00pm"}>
                        04:00pm - 05:00pm
                      </MenuItem>
                      <MenuItem value={"05:00pm - 06:00pm"}>
                        05:00pm - 06:00pm
                      </MenuItem>
                      <MenuItem value={"06:00pm - 07:00pm"}>
                        06:00pm - 07:00pm
                      </MenuItem>
                      <MenuItem value={"07:00pm - 08:00pm"}>
                        07:00pm - 08:00pm
                      </MenuItem>
                      <MenuItem value={"08:00pm - 09:00pm"}>
                        08:00pm - 09:00pm
                      </MenuItem>
                      <MenuItem value={"09:00pm - 10:00pm"}>
                        09:00pm - 10:00pm
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Col>
                <Col lg={12}>
                  <SubmitFormButton>Finalize Appointment</SubmitFormButton>
                </Col>
              </Form>
            </FormWrapper>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  background-color: ${colors.secondaryBG};
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 76px;
  ${Media("xlscreens")} {
    min-height: calc(100vh - 3.95vw);
    margin-top: 3.95vw;
  }
`;
const TextWrapper = styled.div`
  padding: 0px 80px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  ${Media("xlscreens")} {
    padding: 0 4.16vw;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  color: white;
  font-family: ${gilroyBold};
  margin-bottom: 30px;
  ${Media("xlscreens")} {
    font-size: 3.64vw;
    margin-bottom: 1.57vw;
  }
`;
const ShortDesc = styled.p`
  font-size: 24px;
  color: white;
  font-family: ${gilroyMedium};
  ${Media("xlscreens")} {
    font-size: 1.25vw;
  }
`;
const FormWrapper = styled.div`
  padding: 80px;
  ${Media("xlscreens")} {
    padding: 4.166vw;
  }
`;
const Form = styled.form`
  background-color: white;
  padding: 80px 50px;
  display: flex;
  flex-wrap: wrap;
  .MuiFormControl-root {
    width: 100%;
    margin: 15px 0;
  }
  .MuiIconButton-root {
    margin-bottom: 20px;
    &:focus {
      outline: none;
    }
  }
  ${Media("xlscreens")} {
    padding: 4.166vw 2.66vw;
    .MuiFormControl-root {
      margin: 0.73vw 0;
    }
    .MuiIconButton-root {
      margin-bottom: 1.04vw;
    }
  }
`;
const FormTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 30px;
  font-family: ${gilroySemibold};
  padding-left: 10px;
`;
const SubmitFormButton = styled.button`
  height: 50px;
  width: 70%;
  margin: auto;
  margin-top: 30px;
  background-color: ${colors.secondaryBG};
  color: white;
  font-family: ${gilroySemibold};
  border: 3px solid ${colors.secondaryColor};
  position: relative;
  z-index: 9;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
export default BookAppointment;
