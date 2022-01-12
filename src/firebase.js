import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpTHS6vV51rgUheubViCza-zxcuvvyuHQ",
  authDomain: "clone-ed309.firebaseapp.com",
  projectId: "clone-ed309",
  storageBucket: "clone-ed309.appspot.com",
  messagingSenderId: "46468449389",
  appId: "1:46468449389:web:b5def47247bc62e7cdab64",
  measurementId: "G-PDF526D20Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };