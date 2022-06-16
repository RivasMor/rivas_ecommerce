// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";    //Esto es una instancia de la base de datos
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUgzWggh5XAKGrScRnGECIubX7oZh06C4",
  authDomain: "coderstore-e681a.firebaseapp.com",
  projectId: "coderstore-e681a",
  storageBucket: "coderstore-e681a.appspot.com",
  messagingSenderId: "883835679492",
  appId: "1:883835679492:web:c4e9a0fe2095345f125651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db