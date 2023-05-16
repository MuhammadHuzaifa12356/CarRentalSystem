// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSGgC-mMdBKBVNyv3oS58d8fDfrQBI1Y0",
  authDomain: "hackathon-bcd3d.firebaseapp.com",
  projectId: "hackathon-bcd3d",
  databaseURL:"https://hackathon-bcd3d-default-rtdb.firebaseio.com/",
  storageBucket: "hackathon-bcd3d.appspot.com",
  messagingSenderId: "559081029180",
  appId: "1:559081029180:web:c8ac553f5a04a5d05acd39",
  measurementId: "G-LTZB9VCDH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;