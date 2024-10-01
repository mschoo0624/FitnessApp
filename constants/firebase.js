// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';            // For Authentication
import { getFirestore } from 'firebase/firestore';  // For Firestore Database (if using)
import { getStorage } from 'firebase/storage';      // For Firebase Storage (if using)


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);           // Firebase Authentication
const db = getFirestore(app);        // Firestore Database (optional)
const storage = getStorage(app);     // Firebase Storage (optional)

// Export Firebase services for use in other files
export { auth, db, storage };
