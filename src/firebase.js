import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDUgnhFgFOxH7CK1SokEIUNFg4U4nDzjDo",
    authDomain: "loginreact-686af.firebaseapp.com",
    projectId: "loginreact-686af",
    storageBucket: "loginreact-686af.appspot.com",
    messagingSenderId: "222933765801",
    appId: "1:222933765801:web:4f9773521043036528e3b8",
    measurementId: "G-ZHYD1GVFVC"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const firestore = getFirestore(app)

  export {auth,firestore}

  