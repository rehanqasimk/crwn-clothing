import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFA2gfglFRK6LLlom2jrDtHGr10E1mVC8",
  authDomain: "crwn-clothing-db-584e1.firebaseapp.com",
  projectId: "crwn-clothing-db-584e1",
  storageBucket: "crwn-clothing-db-584e1.appspot.com",
  messagingSenderId: "31206302757",
  appId: "1:31206302757:web:1f4318d9843ef7165c0bcc",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
};
