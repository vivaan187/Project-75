import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB7fe6LD9fXmGnYys5U8DpGzsS4iytpa7A",
  authDomain: "e-ride-40aca.firebaseapp.com",
  projectId: "e-ride-40aca",
  storageBucket: "e-ride-40aca.appspot.com",
  messagingSenderId: "906142166936",
  appId: "1:906142166936:web:158125cc12c0ba00ec85ed"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
