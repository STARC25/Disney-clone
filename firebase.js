import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyC868z3CTBQYmENNGoQL6r444skZoSBS0Q",
  authDomain: "disney-clone-41bb7.firebaseapp.com",
  projectId: "disney-clone-41bb7",
  storageBucket: "disney-clone-41bb7.appspot.com",
  messagingSenderId: "75208127265",
  appId: "1:75208127265:web:170d20ba8aa3ce3bf38460",
  measurementId: "G-ETXD2C74F5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleauthProvider();
  const storage = firebase.storage(); 

  export { auth, provider, storage };
  export default db;