import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-GsUF-B2MZ4sVwLuY4TpPz35r7WIWQa8",
    authDomain: "todo-app-cfae4.firebaseapp.com",
    databaseURL: "https://todo-app-cfae4-default-rtdb.firebaseio.com",
    projectId: "todo-app-cfae4",
    storageBucket: "todo-app-cfae4.appspot.com",
    messagingSenderId: "718978211561",
    appId: "1:718978211561:web:ab19fe7bb4d7ce5fb0da78",
    measurementId: "G-R0PWY1SDR0"
});

const db = firebaseApp.firestore();
export default db; 



