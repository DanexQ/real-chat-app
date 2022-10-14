import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjsYLrkOqjUQEIrKTNbrwyJam-rpM2_YY",
  authDomain: "chat-a51c7.firebaseapp.com",
  projectId: "chat-a51c7",
  storageBucket: "chat-a51c7.appspot.com",
  messagingSenderId: "1038905275687",
  appId: "1:1038905275687:web:aa4cd4bc48db5c263c2502",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
