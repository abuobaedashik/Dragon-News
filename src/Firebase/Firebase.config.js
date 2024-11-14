// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg2vBWjG-IiKJKM-PQ_krfGtXPDJ-CPuM",
  authDomain: "dragon-news-55320.firebaseapp.com",
  projectId: "dragon-news-55320",
  storageBucket: "dragon-news-55320.firebasestorage.app",
  messagingSenderId: "660483395705",
  appId: "1:660483395705:web:25e4577fe85f80945444a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app