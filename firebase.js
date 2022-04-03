import  firebase  from 'firebase/compat'; // modified import statement

const firebaseConfig = {
  apiKey: "AIzaSyAGNydP_KwczYNWC36VFcF0HuO4zGxb20Q",
  authDomain: "ubereats-3e493.firebaseapp.com",
  projectId: "ubereats-3e493",
  storageBucket: "ubereats-3e493.appspot.com",
  messagingSenderId: "757441268005",
  appId: "1:757441268005:web:841e7237dc3866a0e0f2cc"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;