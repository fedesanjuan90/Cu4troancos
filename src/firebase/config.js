// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV2PCcm1wRoWgfxD0BFu0eagZk196QQpk",
  authDomain: "cu4troancos-45c23.firebaseapp.com",
  projectId: "cu4troancos-45c23",
  storageBucket: "cu4troancos-45c23.appspot.com",  // corregido .app → .com
  messagingSenderId: "715911714245",
  appId: "1:715911714245:web:15488547b0a65c2f4c67ac",
  measurementId: "G-MKQBFDZEML"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
