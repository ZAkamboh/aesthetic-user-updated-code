
import * as firebaseconfig from "firebase";

var config = {
  apiKey: "AIzaSyDh-sEaZ0SWNNYD4PwEnSUOI7OU0Kk1Ubk",
  authDomain: "al-shifa-medical-center.firebaseapp.com",
  databaseURL: "https://al-shifa-medical-center.firebaseio.com",
  projectId: "al-shifa-medical-center",
  storageBucket: "al-shifa-medical-center.appspot.com",
  messagingSenderId: "633150228468",
  appId: "1:633150228468:web:2004d63fb7bb2f00039ba1",
  measurementId: "G-RC2CLYF3VC"
};
var firebase = firebaseconfig.initializeApp(config);

const storage = firebase.storage();
export { storage, firebase as default }