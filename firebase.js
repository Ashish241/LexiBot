// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBftVlhXiVtCFu9MKGc9LdmLbuy7Vb2vfQ",
  authDomain: "lexibot-project.firebaseapp.com",
  projectId: "lexibot-project",
  storageBucket: "lexibot-project.firebasestorage.app",
  messagingSenderId: "575397675664",
  appId: "1:575397675664:web:224a3ef7f176a79068ce15",
  measurementId: "G-JWVG74JC92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

async function saveDocument(userId, content) {
  try {
    await addDoc(collection(db, "documents"), {
      userId: userId,
      content: content,
      createdAt: new Date()
    });
    console.log("Document saved!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

import { collection, getDocs } from "firebase/firestore";

async function getDocuments() {
  const querySnapshot = await getDocs(collection(db, "documents"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}
