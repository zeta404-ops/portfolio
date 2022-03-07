import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAotR_o2TxQOGhV7qmPU_XW9ddsC7qkUBE",
    authDomain: "akazeta404portfolio.firebaseapp.com",
    projectId: "akazeta404portfolio",
    storageBucket: "akazeta404portfolio.appspot.com",
    messagingSenderId: "692618282598",
    appId: "1:692618282598:web:73cc7707afb411ce6b4fa7"
  };

  let firebaseInstance: FirebaseApp;

  const GetAppInstance = () => {
    if (!firebaseInstance) firebaseInstance = initializeApp(firebaseConfig);
    return firebaseInstance
  }

  const GetFirestoreInstance = () => { 
    const appInstance = GetAppInstance();
    return getFirestore(appInstance);
  }

  const FirebaseServices = {
    getFirestoreInstance: GetFirestoreInstance,
  }

  export default FirebaseServices;
