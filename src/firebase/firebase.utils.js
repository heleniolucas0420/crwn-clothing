import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA0lNMw9gcSTSwwUPiEKD2-dzAZxaEnVcQ",
    authDomain: "crwn-db-8a664.firebaseapp.com",
    projectId: "crwn-db-8a664",
    storageBucket: "crwn-db-8a664.appspot.com",
    messagingSenderId: "355788421758",
    appId: "1:355788421758:web:2141a5482a457a15ac762f",
    measurementId: "G-4KVYMCW6R4"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;