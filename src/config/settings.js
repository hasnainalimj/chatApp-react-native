import firebase from "firebase";
import { firebaseCredentials } from "../config/credentials";
import "firebase/firestore";
firebase.initializeApp(firebaseCredentials);
const db = firebase.firestore();

export const add = () => {
    return db.collection("users").add({
        name : "mj",
        avatar : ""
    })
}

export const getAllUsers = () => {
    return db.collection("users").get();
}