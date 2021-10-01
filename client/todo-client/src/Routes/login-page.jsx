import React, { useState,useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../design/loginstyle.css';
import { Redirect } from 'react-router';
import { login } from '../components/functions/login';
const LoginPage=()=>{
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        login(email,password);
    }
    return(
        <div class="form-wrapper">
            <h1>Sign In</h1>
            <form onSubmit={e=>handleSubmit(e)}>
            <div class="form-item">
                <label for="email"></label>
                <input type="email" name="email" required="required" placeholder="Email Address"
                value={email}
                onChange={e=>setemail(e.target.value)}
                ></input>
            </div>
            <div class="form-item">
                <label for="password"></label>
                <input type="password" name="password" required="required" placeholder="Password"
                value={password}
                onChange={e=>setpassword(e.target.value)}
                ></input>
            </div>
            <div class="button-panel">
                <input type="submit" class="button" title="Sign In" value="Sign In"></input>
            </div>
            </form>
            <div class="form-footer">
            <p><a href="/signup">Create an account</a></p>
            </div>
      </div>
    )
}

export default LoginPage;