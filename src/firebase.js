import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBUEUARv61wC7RHZVNc-xypBEfB1IeVXcc",
    authDomain: "first-flight-e9559.firebaseapp.com",
    databaseURL: "https://first-flight-e9559.firebaseio.com",
    projectId: "first-flight-e9559",
    storageBucket: "first-flight-e9559.appspot.com",
    messagingSenderId: "82868865769"
  };
  firebase.initializeApp(config);

  export default firebase;
  export const database = firebase.database();