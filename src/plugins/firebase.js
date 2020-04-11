import firebase from "firebase/app"
import "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAe_GB5j2Npn0-sf2iV2W3qU-ExfDri_bA",
        authDomain: "zoomstock-node-71a42.firebaseapp.com",
        databaseURL: "https://zoomstock-node-71a42.firebaseio.com",
        projectId: "zoomstock-node-71a42",
        storageBucket: "zoomstock-node-71a42.appspot.com",
        messagingSenderId: "809731977801",
        appId: "1:809731977801:web:29850ace940a4afa2c0598",
        measurementId: "G-XS9SR4T8X1"
})
}

const firestore = firebase.firestore();
// const auth = firebase.auth();
// const analytics = firebase.analytics();

// export { firestore, auth, analytics };Urashimasan;
// module.exports = firestore
export default firestore