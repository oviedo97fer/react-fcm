import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMxzd_PqiXbePKxnoKzFJyLIY2iPBmtIc",
  authDomain: "doqchat-dev.firebaseapp.com",
  databaseURL: "https://doqchat-dev.firebaseio.com",
  projectId: "doqchat-dev",
  storageBucket: "doqchat-dev.appspot.com",
  messagingSenderId: "195699103097",
  appId: "1:195699103097:web:3fe5543bf7049886eb4ba8",
  measurementId: "G-KY28EFRRSS"
});;

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BOR9I5qCDdmIhTBaTuFsfxB7i_MBdHBGHsO_T59CV3hfefBOU2hZJOhmPLImABRtX5CJAUN1ghshINuiWZ8wxpI"
);

export { messaging };
