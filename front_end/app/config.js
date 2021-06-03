import firebaseApp from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCZ-Ta4E9XHb8hlzsWmMrkKPgj3oToRZCo",
  authDomain: "crypto-edb34.firebaseapp.com",
  projectId: "crypto-edb34",
  storageBucket: "crypto-edb34.appspot.com",
  messagingSenderId: "542544282625",
  appId: "1:542544282625:web:1e56634f046948bb28ac00"
};

// Initialize Firebase
firebaseApp.initializeApp(config);



export default firebaseApp