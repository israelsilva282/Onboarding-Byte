import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAPixiWNA8CD4nBKceU_m3Mosjc_q_fveY",
    authDomain: "byteonboarding.firebaseapp.com",
    projectId: "byteonboarding",
    storageBucket: "byteonboarding.appspot.com",
    messagingSenderId: "1026118462769",
    appId: "1:1026118462769:web:556adb81dae97a073e1410",
    measurementId: "G-QNG0L71NCZ"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)