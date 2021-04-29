import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC-fGpc4xt8o2HVHKwTajyXQ1RS1whIMeI",
    authDomain: "assignment-2-2525d.firebaseapp.com",
    projectId: "assignment-2-2525d",
    storageBucket: "assignment-2-2525d.appspot.com",
    messagingSenderId: "657427498415",
    appId: "1:657427498415:web:602149cd7ac5d744039b5a",
    measurementId: "G-GCDM4104BC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };