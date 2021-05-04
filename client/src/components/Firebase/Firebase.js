import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class Firebase {
  constructor() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDQILNBmT5GeYj3-iW_ApYHfOiAf31tx2M',
      authDomain: 'dark-horse-bands.firebaseapp.com',
      projectId: 'dark-horse-bands',
      storageBucket: 'dark-horse-bands.appspot.com',
      messagingSenderId: '1019088420601',
      appId: '1:1019088420601:web:ef56bfadbea5b12e176c28',
      measurementId: 'G-B5F0CSQWX7',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }
  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  currentUser() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
  await auth.signInWithPopup(googleProvider);
  window.location.href = '/home';
  console.log('signed in with email!');
};

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = async () => {
  await auth.signInWithPopup(facebookProvider);
  window.location.href = '/home';
  console.log('signed in with facebook!');
};

const twitterProvider = new firebase.auth.TwitterAuthProvider();
twitterProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithTwitter = async () => {
  await auth.signInWithPopup(twitterProvider);
  window.location.href = '/home';
  console.log('signed in with twitter!');
};

const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
yahooProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithYahoo = async () => {
  await auth.signInWithPopup(yahooProvider);
  window.location.href = '/home';
  console.log('signed in with yahoo!');
};
