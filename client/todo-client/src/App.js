import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from './Routes/todo-home';
import LoginPage from './Routes/login-page';
import SignupPage from './Routes/SignupPage';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAag1ev9ycokaL8NQsbwLip1J2S-5VUUlg",
      authDomain: "todo-spring-react.firebaseapp.com",
      projectId: "todo-spring-react",
      storageBucket: "todo-spring-react.appspot.com",
      messagingSenderId: "911518695493",
      appId: "1:911518695493:web:083252031e7532becee32c"
    };
    
    const app = initializeApp(firebaseConfig);
  }, [])
  

  
  return (
    <Router>
      <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path = "/signup" component = {SignupPage} />
          <Route exact path = "/home" component = {Home} />
      </Switch>
  </Router>
  );
}

export default App;
