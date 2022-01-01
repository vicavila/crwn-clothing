import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
 getFirestore,
 doc,
 getDoc,
 setDoc,
 collection,
 getDocs,
 writeBatch,
} from 'firebase/firestore';
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

export const firestore = getFirestore(app);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, addiontalData) => {
 if (!userAuth) return;
 const userRef = await doc(firestore, `users/${userAuth.uid}`);
 const snapShot = await getDoc(userRef);
 if (!snapShot.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
   await setDoc(userRef, { displayName, email, createdAt, ...addiontalData });
  } catch (err) {
   console.log('error creating user: ' + err.message);
  }
 }
 return userRef;
};

export const addCollectionAndDocuments = async (
 collectionKey,
 objectsToAdd
) => {
 const collectionRef = await collection(firestore, collectionKey);
 const batch = writeBatch(firestore);
 objectsToAdd.forEach((obj) => {
  const newDocRef = doc(collectionRef);
  batch.set(newDocRef, obj);
 });
 return await batch.commit();
};
