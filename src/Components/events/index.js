import React from "react"
import { connect } from "react-redux";
import { AppActions } from "../../store/actions"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'
import Loader2 from "../homeloader"
import "./index.css"


class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    componentWillMount() {
        this.props.event()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.eventdataa) {
            nextProps.eventdataa.sort((a, b) => a - b).reverse()
            this.setState({ data: nextProps.eventdataa })
        }
    }

    render() {

        return (
            <div style={{ width: "100%",background: "linear-gradient(45deg, #133054 60%, #ba093f 90%)", marginTop: 90 }}>
                <div style={{ width: "100%" }}>
                {this.props.loader && <Loader2 />}
                    <center>
                        {this.state.data.map((item, index) => {
                            return (
                                <div style={{ height: "40%", paddingTop: "4%" }}>
                                    <Card style={{ maxWidth: 800 }}>
                                        <CardActionArea>
                                            <ReactPlayer
                                                className='react-player'
                                                url={item.url}
                                                controls
                                                height="4%"
                                                width="100%"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {item.desc}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>

                                        </CardActions>
                                    </Card>
                                </div>
                            )
                        })}
                    </center>
                </div>
            </div>
        )

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
        }
    };
}
export default connect(
    mapState,
    mapDispatch
)(Events);

