import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDqQbW9V28nzvgNfdmi28DCQL-qzxUr48",
  authDomain: "crown-clothing-db-23512.firebaseapp.com",
  projectId: "crown-clothing-db-23512",
  storageBucket: "crown-clothing-db-23512.appspot.com",
  messagingSenderId: "995224191211",
  appId: "1:995224191211:web:db161f6d8e6c0301c4beae",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

   const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if userSnapshot data doesn't exists

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

  try{
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  } catch (error) {
    console.log('error creating the user', error.message);
  }

}

// if userSnapShot exists return userDocRef

return userDocRef;

}
 


