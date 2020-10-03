import React from "react"
import "./index.css"
import { AppActions } from "../../store/actions"
import { connect } from "react-redux";
import drambreen from "../../Assets/Images/drambreen2.jpg"
import Loader2 from "../homeloader"
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';


class About extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    componentWillMount() {
        this.props.aboutdata()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.aboutdataa) {
            nextProps.aboutdataa.sort((a, b) => a - b).reverse()
            this.setState({ data: nextProps.aboutdataa })
        }
    }


    render() {
        return (

            <div style={{ width: "100%", background: "linear-gradient(45deg, #133054 60%, #ba093f 90%)", marginTop: 100 }} className='player-wrapper'>
                {this.props.loader && <Loader2 />}

                <div className="childDiv" style={{ height: "100%", paddingTop: 30 }}>
                    {this.state.data.map((item, index) => {
                        return (
                            <Fade bottom big>
                                <div>
                                    <h1 className="fonstyle2" style={{ textAlign: "center", color: "#ffffff" }}>{item.title}</h1>
                                    <p style={{ color: "#bbbcc1", fontWeight: "bold" }}>
                                        {item.desc}

                                    </p>
                                </div>
                            </Fade>
                        )
                    })}
                    <Grid container >
                        <Grid item xs={7} sm={4} >
                            <h1 style={{ color: "#ffffff" }}>Dr Ambreen Khan</h1>
                            <h2 style={{ color: "#ffffff" }}>Director</h2>
                            <h2 style={{ color: "#ffffff" }}>Al Shifa Medical Center</h2>
                        </Grid>
                        <Grid item xs={5} sm={4} style={{ marginTop: 35 }} >
                            <img src={drambreen} alt="err" height="100px" width="100px" />

                        </Grid>
                        <Grid item xs={4} > </Grid>
                    </Grid>

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log(state.AppReducer)
    return {
        loader: state.AppReducer.loader,
        aboutdataa: state.AppReducer.aboutdataa,
    }
}
function mapDispatch(dispatch) {
    return {
        aboutdata: () => {
            dispatch(AppActions.aboutdata());
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(About)