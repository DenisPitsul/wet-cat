import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACis0alAZZOKpi_oE7E9LBnWvgYAQacOg",
  authDomain: "wet-cat.firebaseapp.com",
  projectId: "wet-cat",
  storageBucket: "wet-cat.firebasestorage.app",
  messagingSenderId: "906763602066",
  appId: "1:906763602066:web:641bdd5b088d2de1e6fe4b",
  measurementId: "G-1DK4LVG19Y",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
