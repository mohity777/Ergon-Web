import "antd/dist/antd.css";
import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalLoader from "./components/GlobalLoader";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Store from "./store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpH-qLHxzp1JCnWymer3Oiyu-RnuqBVgE",
  authDomain: "erogon-94567.firebaseapp.com",
  projectId: "erogon-94567",
  storageBucket: "erogon-94567.appspot.com",
  messagingSenderId: "513452475722",
  appId: "1:513452475722:web:5fc8aa82b1ca0e28cc2db3",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
        <GlobalLoader />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
