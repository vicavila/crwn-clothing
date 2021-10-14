import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: 'AIzaSyAhm7E-I-Fj8hGADzb86uuJivN3gREvG88',
 authDomain: 'crwn-db-164cf.firebaseapp.com',
 projectId: 'crwn-db-164cf',
 storageBucket: 'crwn-db-164cf.appspot.com',
 messagingSenderId: '642471452498',
 appId: '1:642471452498:web:9e4eb791cb2ba4b0ebe48b',
 measurementId: 'G-5G13VN9F70',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInGoogle = () => signInWithPopup(auth, provider);
