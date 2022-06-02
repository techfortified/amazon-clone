import firebase from "firebase";

const firebaseConfig = {
    // paste your firebase config here
    
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
