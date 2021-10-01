import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const login=(email,password)=>{
    const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.localStorage.setItem("u_id",user.uid)
            window.location.href="/home";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}