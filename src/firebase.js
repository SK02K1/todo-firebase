import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "todo-firebase-1c810.firebaseapp.com",
  projectId: "todo-firebase-1c810",
  storageBucket: "todo-firebase-1c810.appspot.com",
  messagingSenderId: "307300134156",
  appId: "1:307300134156:web:14ffd216e14a48ca002d29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
