import React from 'react';
import {  useEffect,useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

import Adminnavbar from "./adminPanel/adminNavbar"

import logo from "../Assets/Images/heart.jpg"





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));




function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    admin :""
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  useEffect(() => {
//     var admin=localStorage.getItem('admin')
// setState({admin:admin})
  },[]);
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem button >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText> <Link style={{ textDecoration: 'none', color: 'black' }}  to="/contact">contact</Link> </ListItemText>
          </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>

     {!state.admin ? 
         <AppBar position="fixed"  color="transparent">
         <Toolbar>
           <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton} color="primary" aria-label="menu">
             <MenuIcon />
           </IconButton>
           <img  src={logo} alt="Title" style={{ height: "5%", width:"5%" }} />
           
           <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
             {sideList('left')}
           </Drawer>
           <Typography variant="h6" className={classes.title} style={{color:"black",fontFamily:"serif",marginLeft:10}}>
             AL SHIFA MEDICAL CENTER
       </Typography>
       <Typography variant="h8" color="primary">

       E/177 E Market Imam Ahmed Road PECHS Block 6 Karachi
       <ReactPlayer
      className='react-player'
      url='https://www.facebook.com/dunyanews/videos/211536363285342/'
      controls	
      height="10%"
      width="50%"
    />
       </Typography>
         </Toolbar>
       </AppBar>
       :
     <Adminnavbar/>
      }
    
    </div>
  );
}


export default Navbar