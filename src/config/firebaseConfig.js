import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCVGyH6qY-TKm3WUW2q-jOMY5ofMEuW7EI",
    authDomain: "to-do-list-330b0.firebaseapp.com",
    projectId: "to-do-list-330b0",
    storageBucket: "to-do-list-330b0.firebasestorage.app",
    messagingSenderId: "1091979796425",
    appId: "1:1091979796425:web:2dfae6c2bcbe5952309218",
    measurementId: "G-7QX68NQFP8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 