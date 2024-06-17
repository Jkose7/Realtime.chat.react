// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoeQnaWI1aITjrxOs0AAZ9wPnguiA73ao",
  authDomain: "realtime-chat-d6f12.firebaseapp.com",
  projectId: "realtime-chat-d6f12",
  storageBucket: "realtime-chat-d6f12.appspot.com",
  messagingSenderId: "472390922084",
  appId: "1:472390922084:web:a78160d0320198a0745471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)