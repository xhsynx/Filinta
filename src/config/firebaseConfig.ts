import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDmYWCMS7btL0tYgrBtPXfnwFapr9-PGvo",
  authDomain: "haydirastgele-c35bc.firebaseapp.com",
  databaseURL: "https://haydirastgele-c35bc.firebaseio.com",
  projectId: "haydirastgele-c35bc",
  storageBucket: "haydirastgele-c35bc.appspot.com",
  messagingSenderId: "1093835429535",
  appId: "1:1093835429535:web:f08cb30482e1befb2f74aa",
  measurementId: "G-LB48QGNS08",
};

// Initialize Firebase App
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
