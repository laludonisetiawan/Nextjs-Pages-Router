// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

let app: FirebaseApp;

// Check if the app is already initialized
try {
  app = getApp();
} catch (error) {
  // If the app does not exist, initialize Firebase
  app = initializeApp(firebaseConfig);
}

export default app;