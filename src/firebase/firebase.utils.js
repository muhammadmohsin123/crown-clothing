import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPKJKtS05OILFYAI7fL4kIGWmXEL5rd1k",
  authDomain: "crown-db-77093.firebaseapp.com",
  projectId: "crown-db-77093",
  storageBucket: "crown-db-77093.appspot.com",
  messagingSenderId: "853842322515",
  appId: "1:853842322515:web:cad8320e870273790e92a6",
  measurementId: "G-2R5BE28ESV",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
