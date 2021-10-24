

//CLIENT FACTORY
//USÉ LOS COMANDOS DE SOF PARA QUE FUNCIONE


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCeb2T5eOdt14UqK4fFH4RrT-sKkDZMNUI",

  authDomain: "genuinabeer-ecommerce.firebaseapp.com",

  projectId: "genuinabeer-ecommerce",

  storageBucket: "genuinabeer-ecommerce.appspot.com",

  messagingSenderId: "97399395490",

  appId: "1:97399395490:web:df91147c2da85667e373fb"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}