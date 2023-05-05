import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp2X7WJdY9wLJw_AAl2kiup3hHHHi-3Ug",
  authDomain: "ccptpm09-chatapp.firebaseapp.com",
  projectId: "ccptpm09-chatapp",
  storageBucket: "ccptpm09-chatapp.appspot.com",
  messagingSenderId: "777902967788",
  appId: "1:777902967788:web:80fbe002a1687c897d4ec9"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);