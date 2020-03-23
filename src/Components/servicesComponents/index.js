import React from "react"
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import stem3 from "../../Assets/Images/stemcell4.jpg"
import firebase from "../../database"

import "./index.css"
var screenHeight = window.screen.availHeight;


class Services extends React.Component {


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
            .ref(`servicedata`)
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
            <div style={{ width: "100%", background: "linear-gradient(45deg, #2e2565 30%, #682560 90%)", marginTop: 90 }}>
                <div style={{ width: "100%",overflow:"scroll",paddingBottom:50 }}>
                    <center>
                        {this.state.data.map((item, index) => {
                            return (
                                <div style={{ height: "80%", paddingTop: "4%" }}>
                                    <Card style={{ maxWidth: 800 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                style={{ height: 300 }}
                                                image={item.url}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {item.desc}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                        </Button>
                                            <Button size="small" color="primary">
                                                Learn More
                                         </Button>
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
)(Services);

