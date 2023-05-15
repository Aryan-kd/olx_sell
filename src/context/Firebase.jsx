import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey, //Change with your api key
  authDomain: 'olx-sell.firebaseapp.com',
  projectId: 'olx-sell',
  storageBucket: 'olx-sell.appspot.com',
  messagingSenderId: '1006060241816',
  appId: '1:1006060241816:web:d87e50f14e6332296ae1ed',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signUpUserWithEmailAndPassword = async (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithEmailAndPassword = async (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinWithGoogle = async () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const handleCreateNewProduct = async (
    name,
    price,
    pincode,
    phone,
    desc,
    image,
    type
  ) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);
    const uploadResult = await uploadBytes(imageRef, image);
    return await addDoc(collection(firestore, 'products'), {
      date: Date.now(),
      desc,
      image: uploadResult.ref.fullPath,
      name,
      phone,
      pincode,
      price,
      user: user.uid,
      userName: user.displayName,
      type,
    });
  };

  const listAllProducts = async () => {
    return await getDocs(collection(firestore, 'products'));
  };

  const getProductById = async (id) => {
    const docRef = doc(firestore, 'products', id);
    const result = await getDoc(docRef);
    return result;
  };

  const getImageURL = async (path) => {
    return await getDownloadURL(ref(storage, path));
  };

  const isLoggedIn = user ? true : false;

  const loggedOut = () => {
    signOut(firebaseAuth);
    window.location.reload();
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signinWithGoogle,
        isLoggedIn,
        loggedOut,
        user,
        handleCreateNewProduct,
        listAllProducts,
        getImageURL,
        getProductById,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
