import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBw5Vf47wteGCKE8FjC7s-LNJhDEnyZpW8",
  authDomain: "twitter-clone-94ad0.firebaseapp.com",
  projectId: "twitter-clone-94ad0",
  storageBucket: "twitter-clone-94ad0.appspot.com",
  messagingSenderId: "601344165620",
  appId: "1:601344165620:web:c500a6005cb6e4c90e80a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;