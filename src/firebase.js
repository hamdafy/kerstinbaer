import firebase from 'firebase/compat/app';
import  'firebase/compat/database'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyAHSbChq0lpedvneZBxvyqaWqroK8Ep99E",
  
    authDomain: "kerstin-e1907.firebaseapp.com",
  
    projectId: "kerstin-e1907",
  
    storageBucket: "kerstin-e1907.appspot.com",
  
    messagingSenderId: "221473790468",
  
    appId: "1:221473790468:web:cd07bb39ed64574331f351",
    databaseURL :"https://kerstin-e1907-default-rtdb.europe-west1.firebasedatabase.app"
    
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig)
  export default firebaseDB.database().ref();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
