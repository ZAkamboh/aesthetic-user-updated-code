import { AppActions,successActionOf} from "../actions"
var initialState = {
  navbar: false,
  login:false,
  loader: false,
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    
    case AppActions.CLICKED:
      return Object.assign({}, state, { navbar: action.payload });

    

      case AppActions.LOGIN:
        return { ...state, loader: true };
    case successActionOf(AppActions.LOGIN):
        return { ...state, loader: false, login:action.payload,admin:action.payload }

        case AppActions.ABOUTDATA:
          return { ...state, loader: true };
      case successActionOf(AppActions.ABOUTDATA):
          return { ...state, loader: false, aboutdataa:action.payload}
  

      case  AppActions.HOMEDATA:
        return Object.assign({}, state, {homedata:action.payload});

        case AppActions.ADMIN:
          return Object.assign({}, state, { admin: action.payload,loader:false });


      case AppActions.LOGOUT:
        return Object.assign({}, state, {admin:null,login:false,logoutsuccess:true})

        case AppActions.CLEAR_REDUX:
        return Object.assign({}, state, {navbar:false})

    default:
      return state;
  }
}