// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from 'firebase/app'
// import 'firebase/auth'
// const firebase=()=>{
    
        
          // Your web app's Firebase configuration
            
            const firebaseConfig = {
            apiKey: "AIzaSyDykFVPUU06n2G4odxdLSqqnd3wDCxeauk",
            authDomain: "phoneotp-bfceb.firebaseapp.com",
            projectId: "phoneotp-bfceb",
            storageBucket: "phoneotp-bfceb.appspot.com",
            messagingSenderId: "133276943261",
            appId: "1:133276943261:web:cac4138555655816236574"
            };
            // Initialize Firebase
            const Firebase = initializeApp(firebaseConfig);
            
        
    

export default Firebase;


// import { initializeApp } from "firebase/app";
// import "firebase/auth";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB5A0xlVs1GR2Q0pvZ3UWNmMXhD5aewd4c",
//     authDomain: "auth-b6616.firebaseapp.com",
//     projectId: "auth-b6616",
//     storageBucket: "auth-b6616.appspot.com",
//     messagingSenderId: "556574366790",
//     appId: "1:556574366790:web:a934ba5a42915b9bc23e47"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

// export default firebase;