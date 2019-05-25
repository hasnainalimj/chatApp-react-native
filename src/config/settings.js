import firebase from "firebase";
import "firebase/firestore";
import { firebaseCredentials } from "../config/credentials";
firebase.initializeApp(firebaseCredentials);
const db = firebase.firestore();