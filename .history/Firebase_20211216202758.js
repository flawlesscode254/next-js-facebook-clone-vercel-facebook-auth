import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtujScHL1lySNqoXRf8Y0aqzA-I-JOJuE",

    authDomain: "facebook-next-cl.firebaseapp.com",
  
    projectId: "facebook-next-cl",
  
    storageBucket: "facebook-next-cl.appspot.com",
  
    messagingSenderId: "610402857413",
  
    appId: "1:610402857413:web:125de1285ec435c4fadbac"  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db  = firebaseApp.firestore()
const store = firebase.storage();


export { store }
export default db