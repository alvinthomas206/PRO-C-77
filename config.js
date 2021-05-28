import firebase from 'firebase' ;
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCYdmxju5dxIbLuLFfwkQyXT0FtyQeWhvU",
    authDomain: "batter-app-5919c.firebaseapp.com",
    projectId: "batter-app-5919c",
    storageBucket: "batter-app-5919c.appspot.com",
    messagingSenderId: "480977866434",
    appId: "1:480977866434:web:4bc4e22998c96936a2b55b"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();