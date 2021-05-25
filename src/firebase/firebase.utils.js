import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCYRvt5A2s9XzJZ0WkOJFRcuCL5BmV4xyY",
  authDomain: "crwn-db-b671e.firebaseapp.com",
  projectId: "crwn-db-b671e",
  storageBucket: "crwn-db-b671e.appspot.com",
  messagingSenderId: "291258130353",
  appId: "1:291258130353:web:ce28aa4e9829fc6ec7e790",
  measurementId: "G-XZFNDH2ZSR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;