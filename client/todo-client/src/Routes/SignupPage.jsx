import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState,useEffect } from 'react';
import '../design/loginstyle.css';
import axios from "axios";
const SignupPage=()=>{
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    // useEffect(() => {
    // }, [])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email&&password)
        {
            const auth=getAuth();
            createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
                const user = userCredential.user;
                let body=user.uid;
                axios.post("http://localhost:8080/usersignup",body).then(response=>{
                    console.log(response);
                })
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
              });
        }
       
    }
    return(
        <div class="form-wrapper">
            <h1>Sign Up</h1>
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
                onChange={e=>setpassword(e.target.value)}></input>
            </div>
            <div class="button-panel">
                <input type="submit" class="button" title="Sign up" value="Sign up"></input>
            </div>
            </form>
            <div class="form-footer">
            <p><a href="/login">Already have an account</a></p>
            </div>
      </div>
    )
}

export default SignupPage;