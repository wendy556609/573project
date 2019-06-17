import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


let config = {
    apiKey: "AIzaSyCuZK-Gz8fxT9xxepW_Kkuce04GSpgWhsI",
    authDomain: "myhw-5424d.firebaseapp.com",
    databaseURL: "https://myhw-5424d.firebaseio.com",
    projectId: "myhw-5424d",
    storageBucket: "myhw-5424d.appspot.com",
    messagingSenderId: "837115685962",
    appId: "1:837115685962:web:123afe01d420af19"
};
firebase.initializeApp(config);

window.firebase = firebase;
