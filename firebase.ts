import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAVyzXIOmeDpm51F8SQhhdkAeVV_0RZDQs",
  authDomain: "dropbox-3eea3.firebaseapp.com",
  projectId: "dropbox-3eea3",
  storageBucket: "dropbox-3eea3.appspot.com",
  messagingSenderId: "107884145829",
  appId: "1:107884145829:web:0bb21035c253fc4a81714c"
};

// single turn pattern
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}