import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBRczcpWxZpMvNB2ODhZCAIawBu3xtz2Vw",
  authDomain: "netflix-clone-971ca.firebaseapp.com",
  projectId: "netflix-clone-971ca",
  storageBucket: "netflix-clone-971ca.appspot.com",
  messagingSenderId: "480647346303",
  appId: "1:480647346303:web:bc8cfad93c7965bb5ee74a",
  measurementId: "G-SRYZCCFHVD"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth =getAuth(app);