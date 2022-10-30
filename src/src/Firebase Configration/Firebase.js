import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "@firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';
import  {getAuth} from   'firebase/auth'
import   {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBHyET96e95uNPlEUZtjtwphMsfwWy0yX8",
  authDomain: "rayashop-test1-d4f6b.firebaseapp.com",
  projectId: "rayashop-test1-d4f6b",
  storageBucket: "rayashop-test1-d4f6b.appspot.com",
  messagingSenderId: "132857927219",
  appId: "1:132857927219:web:f069f0c7bcae490495f546"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);