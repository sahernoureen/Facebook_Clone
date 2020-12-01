import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK9DeI4UW1wOtIfQdstdWAqO5j1pqOoJg",
  authDomain: "facebookclone-61d69.firebaseapp.com",
  databaseURL: "https://facebookclone-61d69.firebaseio.com",
  projectId: "facebookclone-61d69",
  storageBucket: "facebookclone-61d69.appspot.com",
  messagingSenderId: "97206121447",
  appId: "1:97206121447:web:aef42c26a54dc5b0cb0342",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
