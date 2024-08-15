import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwbfFpKj_zGdVEzJfbwQ9roN-tt8SeWRE",
    authDomain: "discord-clone-cc885.firebaseapp.com",
    projectId: "discord-clone-cc885",
    storageBucket: "discord-clone-cc885.appspot.com",
    messagingSenderId: "1043427732698",
    appId: "1:1043427732698:web:e77474cb7d5b5cfa80c9e3",
    measurementId: "G-ZFMC2FMNFH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db