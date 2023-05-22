import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBPRmQ3B3DmJ4gc0MQaJ_4cIxK6dcoKx4",
  authDomain: "chatapp12052023.firebaseapp.com",
  projectId: "chatapp12052023",
  storageBucket: "chatapp12052023.appspot.com",
  messagingSenderId: "19739497038",
  appId: "1:19739497038:web:a9e43953fc07de49a2691f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);