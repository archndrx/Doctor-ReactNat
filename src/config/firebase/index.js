// Import the functions you need from the SDKs you need
import firebase from '@react-native-firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyA79uPpsexCvBBUcuirsL85uiIsS6e271M',
  authDomain: 'doctor-react-native.firebaseapp.com',
  projectId: 'doctor-react-native',
  storageBucket: 'doctor-react-native.appspot.com',
  messagingSenderId: '229875155017',
  appId: '1:229875155017:web:de431643fc7408a3fc7f98',
  measurementId: 'G-64GL36ECMZ',
};

const config = {
  name: 'DOCTOR_APP',
};

// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig, config);

export default fireApp;
