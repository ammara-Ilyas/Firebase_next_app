import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAf3apvxzB6I-WXaYrym-E8QLHVet5Dm34",
  authDomain: "next-app-d7159.firebaseapp.com",
  projectId: "next-app-d7159",
  storageBucket: "next-app-d7159.appspot.com",
  messagingSenderId: "598009801710",
  appId: "1:598009801710:web:9cc91f0ade5a5a1ff1fcff",
  measurementId: "G-16RH3D99LD",
  databaseURL: "https://next-app-d7159-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
