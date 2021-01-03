// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBiC6KoHOxcB1nx3ydRg2uT46PnVeSjlAg",
    authDomain: "facebook-clone-e1cc5.firebaseapp.com",
    projectId: "facebook-clone-e1cc5",
    storageBucket: "facebook-clone-e1cc5.appspot.com",
    messagingSenderId: "839319178320",
    appId: "1:839319178320:web:7ecdd6e88e3078a7d99555",
    measurementId: "G-3P31NLZDGE"
};

// connect our front to our backend 
const firebaseApp = firebase.initializeApp( firebaseConfig );

// Get access to database 
const db = firebase.firestore();
const auth = firebase.auth();

// Set up our provider, i tell firbase we want the google login 
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;