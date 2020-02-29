import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import About from "./Components/about"
import Contact from "./Components/contact"
import Navbar from "./Components/navbar"
import Home from "./Components/homeComponent"



import createBrowserHistory from "history/createBrowserHistory";
import { Router,Route } from "react-router-dom";




const customHistory = createBrowserHistory();

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




function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router history={customHistory}>
       <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

      </Router>
    </div>
  );
}

export default App;
