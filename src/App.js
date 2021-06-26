import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import store from "./store";
import { Provider } from "react-redux";
import Routing from "./Routing";
import './App.css'
const useStyles = makeStyles((theme) => ({
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
    width: "auto",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
