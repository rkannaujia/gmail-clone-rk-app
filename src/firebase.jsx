import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALz6DT4fasBISD2tjLWE8Y4pTmffp6N8Q",
    authDomain: "clone-rk-3f8cc.firebaseapp.com",
    projectId: "clone-rk-3f8cc",
    storageBucket: "clone-rk-3f8cc.appspot.com",
    messagingSenderId: "492985410552",
    appId: "1:492985410552:web:86d8b272676bf47cecac0d"
  };



 const firebaseApp = firebase.initializeApp(firebaseConfig); 
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();


 export { db, auth, provider};