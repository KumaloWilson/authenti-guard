import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCZib8-TJ0F5mkWVDjSOOTNIKhqY2yFR0s",
    authDomain: "fraud-detection-39e23.firebaseapp.com",
    projectId: "fraud-detection-39e23",
    storageBucket: "fraud-detection-39e23.appspot.com",
    messagingSenderId: "991650552120",
    appId: "1:991650552120:web:a02f230af3dc65a1a509cd",
    measurementId: "G-JR8Q6NKRQV"
};

const app = initializeApp(firebaseConfig);

export { app };
