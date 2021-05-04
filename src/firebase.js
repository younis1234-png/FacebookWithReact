// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD9f-slcIUjPVxjmFUlJwUDvJIsWD7TiI",
  authDomain: "facebook-198e8.firebaseapp.com",
  projectId: "facebook-198e8",
  storageBucket: "facebook-198e8.appspot.com",
  messagingSenderId: "99224719818",
  appId: "1:99224719818:web:97518f85d11b9ca0b2ff33",
  measurementId: "G-QRP84MJ7T7",
};

// connect our front to our backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get access to database
const db = firebase.firestore();
const auth = firebase.auth();

// Set up our provider, i tell firbase we want the google login
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
