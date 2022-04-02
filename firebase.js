import  firebase  from 'firebase/compat'; // modified import statement

const firebaseConfig = {
    apiKey: "AIzaSyDywDyJ_9GCVP1Zxu-VltjnKaDXrbmBPDs",
    authDomain: "rn-uber-eats-clone-108fb.firebaseapp.com",
    projectId: "rn-uber-eats-clone-108fb",
    storageBucket: "rn-uber-eats-clone-108fb.appspot.com",
    messagingSenderId: "743699243870",
    appId: "1:743699243870:web:ca561524106b423f54a5cf",
    measurementId: "G-EFN3FEQ84Q"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;