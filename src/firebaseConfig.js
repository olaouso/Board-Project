import * as firebase from "firebase/app";
import "firebase/firestore";

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDGySwtrGAvuUWVWeJNULHuq8vnhb6vs7M",
  authDomain: "make-friendship-board.firebaseapp.com",
  databaseURL: "https://make-friendship-board.firebaseio.com",
  projectId: "make-friendship-board",
  storageBucket: "make-friendship-board.appspot.com",
  messagingSenderId: "914047859009",
  appId: "1:914047859009:web:c161afd99f8ee6758a89c0",
  measurementId: "G-VR78TWQTLX",
};

// var db = firebase.firestore();

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
