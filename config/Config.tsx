import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD2-EYNxQRd-H4YpBPKxXx2VuBxVIolQeY",
  authDomain: "liadarkla.firebaseapp.com",
  databaseURL: "https://liadarkla-default-rtdb.firebaseio.com",
  projectId: "liadarkla",
  storageBucket: "liadarkla.appspot.com",
  messagingSenderId: "79023645550",
  appId: "1:79023645550:web:06a16504c0c003fe0ad77f",
  measurementId: "G-KZNBQGT2TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app)
export const db= getDatabase(app)
export const storage = getStorage(app)

///////////////////////////////
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});