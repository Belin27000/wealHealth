import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA0BWfMGoLPCSWRvJXgza2TUgoOo7kVtlA",
    authDomain: "wealhealth-hrnet.firebaseapp.com",
    projectId: "wealhealth-hrnet",
    storageBucket: "wealhealth-hrnet.appspot.com",
    messagingSenderId: "151683185384",
    appId: "1:151683185384:web:2434505be66f25628b675d"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
