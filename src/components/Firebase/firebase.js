import app from 'firebase/app';
import 'firebase/auth';

// Initializing Firebase
const config = {
    apiKey: "AIzaSyAsBEyifElIz53n6J_SgwuW4jzc6IBtwLQ",
    authDomain: "blueathlete-d1904.firebaseapp.com",
    databaseURL: "https://blueathlete-d1904.firebaseio.com",
    projectId: "blueathlete-d1904",
    storageBucket: "blueathlete-d1904.appspot.com",
    messagingSenderId: "802929808431"
};

// Firebase constructor
class Firebase {
    constructor() {
        app.initializeApp(config);

        // Auth init
        this.auth = app.auth();
    }

    // *** Auth API ***
    // Signup
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    //Signin
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // Sign Out
    doSignOut = () => this.auth.signOut();
    // Reset Password
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    // Password change
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;