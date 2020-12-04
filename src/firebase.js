import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpTLCTgLDvbCkdWBFE2x42r-2qdx1jXqY",
    authDomain: "twitter-clone-77686.firebaseapp.com",
    projectId: "twitter-clone-77686",
    storageBucket: "twitter-clone-77686.appspot.com",
    messagingSenderId: "444899816994",
    appId: "1:444899816994:web:ec6a1cd12f70c3727ffc7b",
    measurementId: "G-GHJRLVVFZC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

