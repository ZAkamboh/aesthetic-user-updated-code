import React from "react"
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'

import firebase from "../../database"

import "./index.css"
var screenHeight = window.screen.availHeight;


class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        var values = [];
        firebase
            .database()
            .ref(`Eventsdata`)
            .once("value", snap => {
                var data = snap.val();
                for (let keys in data) {
                    values.push({ ...data[keys], key: keys });
                }
                this.setState({ data: values });
            })
    }
    render() {

        return (
            <div style={{ width: "100%", background: "linear-gradient(45deg, #133054 60%, #3667a2 90%)", marginTop: 90 }}>
                <div style={{ width: "100%" }}>
                    <center>
                        {this.state.data.map((item, index) => {
                            return (
                                <div style={{ height: "80%", paddingTop: "4%" }}>
                                    <Card style={{ maxWidth: 800 }}>
                                        <CardActionArea>
                                            <ReactPlayer
                                                className='react-player'
                                                url={item.url}
                                                controls
                                                height="6%"
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

    };
}
function mapDispatch(dispatch) {
    return {

    };
}
export default connect(
    mapState,
    mapDispatch
)(Events);

