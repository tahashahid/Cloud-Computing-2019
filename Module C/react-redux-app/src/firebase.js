import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAH2wR8q-kh_prB2giAhX4FB6M2oX9idbM",
    authDomain: "test-project-d39a6.firebaseapp.com",
    databaseURL: "https://test-project-d39a6.firebaseio.com",
    projectId: "test-project-d39a6",
    storageBucket: "test-project-d39a6.appspot.com",
    messagingSenderId: "641020727699",
    appId: "1:641020727699:web:943d57e92c237a5e601866",
    measurementId: "G-FFR7JJBEQK"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);