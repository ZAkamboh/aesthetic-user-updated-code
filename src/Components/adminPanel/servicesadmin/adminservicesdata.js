
import React from "react"
import { AppActions } from "../../../store/actions"

import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import firebase from "../../../database"

import { connect } from "react-redux";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread'),
];





class Adminservicedata extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentWillMount() {
    if (!this.props.adminn) {
      this.props.history.push('/admin')
    }
    else{
      this.props.servicedata()
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.servicedataa.length > 0) {
        this.setState({data:nextProps.servicedataa })
    }
}
delete(index,key){
  var data=this.state.data
   var newdata=data.filter((item,i) =>i!== index )
   this.setState({data:newdata})
   firebase
   .database()
   .ref(`servicedata/${key}`)
   .remove()
   .then(() => {
     alert("successfully delete")

   }).catch((error)=>{
            alert(error)
   });
}
  render() {
    return (
      <div style={{ width: "100%",marginTop:120 }}>
        <div style={{paddingBottom:100}}>
          <TableContainer component={Paper}>
            <Table style={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Title</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                  <StyledTableCell align="right">Delete Record</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map((row,index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{fontWeight:"bold"}} align="right">{row.title}</StyledTableCell>
                <StyledTableCell align="right">{row.desc}</StyledTableCell>
                    <StyledTableCell align="right"><Button style={{color:"red"}} onClick={this.delete.bind(this,index,row.key)}  >Delete</Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    adminn: state.AppReducer.admin,
    servicedataa: state.AppReducer.servicedataa,
  }
}
function mapDispatch(dispatch) {
  return {
    servicedata: () => {
      dispatch(AppActions.servicedata());
  }
  }
}
export default connect(mapStateToProps, mapDispatch)(Adminservicedata)