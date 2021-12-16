import firebase from 'firebase'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtujScHL1lySNqoXRf8Y0aqzA-I-JOJuE",

  authDomain: "facebook-next-cl.firebaseapp.com",

  projectId: "facebook-next-cl",

  storageBucket: "facebook-next-cl.appspot.com",

  messagingSenderId: "610402857413",

  appId: "1:610402857413:web:125de1285ec435c4fadbac"
  
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = firebase.firestore()
const auth = firebase.auth()
const store = firebase.storage()

export default db
export { store, auth }