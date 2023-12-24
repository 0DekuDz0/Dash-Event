import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB-mPHAT4OWPoGLXOqOZEPfcfCumFCOuiU",
    authDomain: "dash-event-gdg-team9.firebaseapp.com",
    databaseURL: "https://dash-event-gdg-team9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dash-event-gdg-team9",
    storageBucket: "dash-event-gdg-team9.appspot.com",
    messagingSenderId: "1066512603354",
    appId: "1:1066512603354:web:7412549e4467eb7a466de3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

const signForm = document.getElementById('sign-form');
console.log(signForm)
signForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const firstName = document.getElementById('first-name').value;
    const fullName = firstName + ' ' + name;
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
    const email = document.getElementById('email').value;
    const password = "USELESS"; 

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("successful registration");
    set(ref(db, 'users/' + user.uid), {
        username: fullName,
        email: email,
        phoneNumber: phoneNumber
      })
      .catch((e)=>{
          console.log("error", e)
      })
    signForm.reset();
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})



//1703017056242