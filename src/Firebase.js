import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAXVL1-VxlugZg3-l76awIMlLUm2sS3MkI",

  authDomain: "doorofhope-180e4.firebaseapp.com",

  projectId: "doorofhope-180e4",

  storageBucket: "doorofhope-180e4.appspot.com",

  messagingSenderId: "799282118857",

  appId: "1:799282118857:web:e9f0687f77cd3df3a84d18",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth();

export function CreateUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function AuthUser(email, passwod) {
  return signInWithEmailAndPassword(auth, email, passwod);
}
