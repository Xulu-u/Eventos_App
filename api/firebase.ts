
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';


export { collection, addDoc, doc, getDocs, query } from "firebase/firestore"
export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain:  process.env.EXPO_PUBLIC_PROJECT_ID + "firebaseapp.com",
  projectId:  process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_PROJECT_ID + ".appspot.com",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
/* export const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
}); */

