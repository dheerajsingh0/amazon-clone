import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBd99XELOeCuYIN4ZQiHLW8hHEWs4kx6iA",
    authDomain: "amzn-clone-a36f2.firebaseapp.com",
    projectId: "amzn-clone-a36f2",
    storageBucket: "amzn-clone-a36f2.appspot.com",
    messagingSenderId: "235136459652",
    appId: "1:235136459652:web:b1714e1dddb3dcfed2b3d1"
  };


  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  export default db;