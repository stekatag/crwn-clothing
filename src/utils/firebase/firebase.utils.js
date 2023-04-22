import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf-SPDp4GwWhsA8TSLQlmDX6zV6cgPYcI",
  authDomain: "crwn-clothing-db-47b80.firebaseapp.com",
  projectId: "crwn-clothing-db-47b80",
  storageBucket: "crwn-clothing-db-47b80.appspot.com",
  messagingSenderId: "196332295956",
  appId: "1:196332295956:web:fa92606edb40dc0e6ed401",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
