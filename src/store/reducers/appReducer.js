import { AppActions } from "../actions"
var initialState = {
  navbar: false,
  login:false
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    
    case AppActions.CLICKED:
      return Object.assign({}, state, { navbar: action.payload });

    
      case  AppActions.LOGIN:
        return Object.assign({}, state, {login:action.payload,admin:action.payload });

        case AppActions.ADMIN:
          return Object.assign({}, state, { admin: action.payload });


      case AppActions.LOGOUT:
        return Object.assign({}, state, {admin:null,login:false,logoutsuccess:true})

        case AppActions.CLEAR_REDUX:
        return Object.assign({}, state, {navbar:false})

    default:
      return state;
  }
}