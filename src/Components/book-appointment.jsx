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
import axios from 'axios';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { gilroySemibold } from "shared-components/fonts";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Media } from "shared-components/media";
import ClipLoader from "react-spinners/ClipLoader";


class BookAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),

      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      appointment: "",
      timing: "",
      response: {},
      processing: false,
      disabled: true
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

  _handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  _handleSubmit() {
  

    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      appointment: this.state.appointment,
      timing: this.state.timing,
    }

    if (data.firstName === "" || data.lastName === "" || data.phone === "" || data.email === "" || data.appointment === "" || data.timing === "" || data.selectedDate === "") {
      alert("All Fields Are Required")
    }
    else {
      this.setState({
        processing: true
      })
      axios.post(`https://alshifaofficial.herokuapp.com/data/appointment`, data)
        // axios.post(`http://localhost:8080/data/appointment`, data)
        .then(res => {
          alert("Your appointment successfuly appoint")
          this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            appointment: "",
            timing: "",
            selectedDate: "",
            processing: false
          })
        })

    }

  }
  render() {
    return (
      <Wrapper>
        <Row>
          <Col lg={6} sm={12}>
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
          <Col lg={6} sm={12}>
            <FormWrapper>
              <F>
                <Col lg={12} sm={12} md={12}>
                  <FormTitle>Fill Your Complete Information</FormTitle>
                </Col>
                <Col lg={6} sm={12} md={6}>
                  <TextField value={this.state.firstName} id="standard-basic" label="First Name" required onChange={this._handleChange.bind(this, "firstName")} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                  <TextField value={this.state.lastName} id="standard-basic" label="Last Name" required onChange={this._handleChange.bind(this, "lastName")} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                  <TextField
                    type="email"
                    id="standard-basic"
                    label="Email"
                    required
                    value={this.state.email}
                    onChange={this._handleChange.bind(this, "email")}
                  />
                </Col>
                <Col lg={6} sm={12} md={6}>

                  <TextField
                    id="standard-basic"
                    label="Mobile Number"
                    required
                    inputProps={{
                      maxLength: 11,
                    }}

                    value={this.state.phone}

                    onChange={this._handleChange.bind(this, "phone")}

                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+92</InputAdornment>
                      ),
                    }}

                  />

                </Col>
                <Col lg={6} sm={12} md={6}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">

                      Select Appointement
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Appointement"
                      required

                      value={this.state.appointment}

                      onChange={(event) => this.setState({ appointment: event.target.value })}
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
                <Col lg={6} sm={12} md={6}>
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
                <Col lg={6} sm={12} md={6}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Select Available Shift
                    </InputLabel>


                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Available Shift"
                      value={this.state.timing}
                      onChange={(event) => this.setState({ timing: event.target.value })}
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
                      <MenuItem value={"12:00pm - 01:00pm"}>
                        12:00pm - 01:00pm
                      </MenuItem>
                      <MenuItem value={"01:00pm - 02:00pm"}>
                        01:00pm - 02:00pm
                      </MenuItem>
                      <MenuItem value={"02:00pm - 03:00pm"}>
                        02:00pm - 03:00pm
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
                <Col lg={12} sm={12}>

                  {!this.state.processing ?

                    <SubmitFormButton disabled={this.state.processing && this.state.disabled} onClick={this._handleSubmit.bind(this)}>Finalize Appointment</SubmitFormButton>


                    :

                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>      <ClipLoader color={"red"}
                    />
                    </span>


                  }
                </Col>
              </F>
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
  ${Media("xlscreens")} {
    min-height: calc(100vh - 3.95vw);
    margin-top: 3.95vw;
  }
  ${Media("tablet")} {
    margin-top: 60px;
    padding-top: 50px;
    overflow-x: hidden;
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
  ${Media("tablet")} {
    padding: 0px 30px;
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
  ${Media("tablet")} {
    font-size: 38px;
  }
`;
const ShortDesc = styled.p`
  font-size: 24px;
  color: white;
  font-family: ${gilroyMedium};
  ${Media("xlscreens")} {
    font-size: 1.25vw;
  }
  ${Media("tablet")} {
    font-size: 14px;
  }
`;
const FormWrapper = styled.div`
  padding: 80px;
  ${Media("xlscreens")} {
    padding: 4.166vw;
  }
  ${Media("tablet")} {
    padding: 20px;
  }
`;
const F = styled.div`
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
  ${Media("tablet")} {
    padding: 50px 10px;
  }
`;
const FormTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 30px;
  font-family: ${gilroySemibold};
  display: block;
  ${Media("xlscreens")} {
    margin-bottom: 1.56vw;
    font-size: 1.56vw;
  }
  ${Media("tablet")} {
    font-size: 24px;
    margin-bottom:10px;
  }
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
  ${Media("xlscreens")} {
    height: 2.66vw;
    margin-top: 1.56vw;
    font-size: 1.04vw;
  }
  ${Media("tablet")} {
    font-size: 16px;
  }
  ${Media("mobile")} {
    width: 100%;
  }
`;
export default BookAppointment;
