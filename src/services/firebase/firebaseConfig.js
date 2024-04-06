import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBrZ0NzEIargD9WhpiI2Ukn5dGePYuHEuQ",
  authDomain: "ecommercemarsili.firebaseapp.com",
  projectId: "ecommercemarsili",
  storageBucket: "ecommercemarsili.appspot.com",
  messagingSenderId: "601166748562",
  appId: "1:601166748562:web:b4b42e32cc345cbf83ff4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)