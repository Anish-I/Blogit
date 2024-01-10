/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgvafLb1rWUqvpzZzX4Ejo0av2gE1HuFU",
    authDomain: "yappr-7ee42.firebaseapp.com",
    projectId: "yappr-7ee42",
    storageBucket: "yappr-7ee42.appspot.com",
    messagingSenderId: "78788253358",
    appId: "1:78788253358:web:aaad1f86d5cd5eeea6ff3f"
};

const app = initializeApp(firebaseConfig);

// Google Auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {        
        user = result.user;
    })
    .catch((error) => {
        console.log(error)
    });

    return user;

}