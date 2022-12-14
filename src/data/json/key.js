// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";

// import {OrderContext, useOrderContext} from '../../Providers/OrderProvider';

// const {seatA, setSeatA, seatB, setSeatB, seatC, setSeatC} = useSeatContext();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRTp5AMIXOH10fbCT8ZMRr1iBxie39o2w",
  authDomain: "cinema-f2707.firebaseapp.com",
  databaseURL: "https://cinema-f2707-default-rtdb.firebaseio.com",
  projectId: "cinema-f2707",
  storageBucket: "cinema-f2707.appspot.com",
  messagingSenderId: "1083457534004",
  appId: "1:1083457534004:web:d20c162ee174f766fa7261",
  measurementId: "G-3YGK9NFR1C"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// const add_data_firebase = (collection_name) => {
  
// }