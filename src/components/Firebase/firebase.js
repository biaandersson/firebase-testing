import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDTZMcDHljIPWsaUBrCugi1CZ_dpOZc_to',
  authDomain: 'learn-react-e27e0.firebaseapp.com',
  databaseURL: 'https://learn-react-e27e0.firebaseio.com',
  projectId: 'learn-react-e27e0',
  storageBucket: 'learn-react-e27e0.appspot.com',
  messagingSenderId: '837182227785',
  appId: '1:837182227785:web:c9046f257f7c52c2738698',
  measurementId: 'G-KS7DLGX1WW',
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
      this.auth.currentUser.updatePassword(password);
}

export default Firebase;