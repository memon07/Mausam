import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmWInuihv0jD2ORoXJpt-d9TsocOAUu7o",
    authDomain: "mausam-a75d1.firebaseapp.com",
    databaseURL: "https://mausam-a75d1.firebaseio.com",
    projectId: "mausam-a75d1",
    storageBucket: "mausam-a75d1.appspot.com",
    messagingSenderId: "589786397877",
    appId: "1:589786397877:web:f954a2c4e824e6ba85d2fc"
  };

  export const myFirebase = firebase.initializeApp(firebaseConfig);
  const baseDb = myFirebase.firestore();
  export const db = baseDb;