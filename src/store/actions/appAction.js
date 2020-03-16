import firebase from "../../database"


export default class AppActions {
  static CLICKED = "CLICKED";
  static CLEAR_REDUX = "CLEAR_REDUX"
  static LOGIN = "LOGIN"
  static LOGOUT = "LOGOUT"
  static ADMIN = "ADMIN"
  static LOGOUT="LOGOUT"

  static actionNavbar(payload) {
    return {
      type: AppActions.CLICKED,
      payload
    };
  }

  static clear() {
    return dispatch => {
      dispatch({ type: AppActions.CLEAR_REDUX });
    };
  }
  static login(payload) {
    return dispatch => {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          var user = response.user.uid
          localStorage.setItem("admin", user)
          dispatch({
            type: AppActions.LOGIN,
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

