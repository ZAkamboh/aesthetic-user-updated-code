import firebase from "../../database"
import { failureActionOf, successActionOf } from "./index"

export default class AppActions {
  static CLICKED = "CLICKED";
  static CLEAR_REDUX = "CLEAR_REDUX"
  static LOGIN = "LOGIN"
  static LOGOUT = "LOGOUT"
  static ADMIN = "ADMIN"
  static LOGOUT = "LOGOUT"
  static HOMEDATA = "HOMEDATA"
  static ABOUTDATA = "ABOUTDATA"

  static actionNavbar(payload) {
    return {
      type: AppActions.CLICKED,
      payload
    };
  }


  static fetchhomedata() {
    return dispatch => {
      var values = [];
      firebase
        .database()
        .ref(`homedata`)
        .once("value", snap => {
          var data = snap.val();
          for (let keys in data) {
            values.push({ ...data[keys], key: keys });
          }
          // this.setState({ localdata: values });
          dispatch({
            type: AppActions.HOMEDATA,
            payload: values
          });
        })
    }
  }

  static aboutdata() {
    return dispatch => {
    dispatch({ type: AppActions.ABOUTDATA, })
      var values = [];
      firebase
        .database()
        .ref(`aboutdata`)
        .once("value", snap => {
          var data = snap.val();
          for (let keys in data) {
            values.push({ ...data[keys], key: keys });
          }
          dispatch({
            type: successActionOf(AppActions.ABOUTDATA),
            payload: values
          });
        })
    }
  }

  static clear() {
    return dispatch => {
      dispatch({ type: AppActions.CLEAR_REDUX });
    };
  }
  static login(payload) {

    return dispatch => {
      dispatch({ type: AppActions.LOGIN, })
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          var user = response.user.uid
          localStorage.setItem("admin", user)
          dispatch({
            type: successActionOf(AppActions.LOGIN),
            payload: true
          });
        })
        .catch(error => {
          alert(error.message);
        });

    };
  }

  static admin() {
    return dispatch => {
      var admin = localStorage.getItem('admin')
      dispatch({
        type: AppActions.ADMIN,
        payload: admin
      });
    };
  }

  static logout() {
    return dispatch => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("admin");
          dispatch({
            type: AppActions.LOGOUT
          });
        });
    };
  }
}

