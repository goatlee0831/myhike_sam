//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyA8e8zyo4nlpZaSrEQs94KVsWH32_maNJ8",
    authDomain: "comp1800-202410-demo-f73fb.firebaseapp.com",
    projectId: "comp1800-202410-demo-f73fb",
    storageBucket: "comp1800-202410-demo-f73fb.appspot.com",
    messagingSenderId: "585717271666",
    appId: "1:585717271666:web:a1f36d28ad82e88229c6eb"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
