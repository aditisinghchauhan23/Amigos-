import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCJ3A8AOipqmGnPgSvVSAIyWy7DihI8x0Q",
    authDomain: "amigos-1d969.firebaseapp.com",
    projectId: "amigos-1d969",
    storageBucket: "amigos-1d969.appspot.com",
    messagingSenderId: "645747188401",
    appId: "1:645747188401:web:aab1ea00d8ff8eb0bc7890",
    measurementId: "G-GT4YC07QV0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };