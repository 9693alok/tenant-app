// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";            // for authentication
import { getFirestore, serverTimestamp } from "firebase/firestore";  // for database
import { getAnalytics } from "firebase/analytics";

// Your Firebase config (already have)
const firebaseConfig = {
  apiKey: "AIzaSyD3XLOcGAx69hag5bZsli8PfTpcT5A7DH8",
  authDomain: "tenantmanagementsystem-828ac.firebaseapp.com",
  projectId: "tenantmanagementsystem-828ac",
  storageBucket: "tenantmanagementsystem-828ac.appspot.com",
  messagingSenderId: "179598860838",
  appId: "1:179598860838:web:9edf84467aeeb8f614bce7",
  measurementId: "G-06Y8ZF2Z4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);    // Authentication
export const db = getFirestore(app); // Firestore database
export const now = serverTimestamp;  // Timestamp helper
