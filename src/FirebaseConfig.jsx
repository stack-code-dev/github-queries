import { initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoxy_WSDByrV8MUEhY4OQTogaAkBK5YfY",
  authDomain: "github-queries-sc.firebaseapp.com",
  projectId: "github-queries-sc",
  storageBucket: "github-queries-sc.appspot.com",
  messagingSenderId: "617087055426",
  appId: "1:617087055426:web:c92e6a7ef93fa6aea11fdb",
  measurementId: "G-QX6FCL9X5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GithubAuthProvider();

export { auth, provider }
