import React, { useRef, useState } from "react";
import '../styles/Login.css';
import { useNavigate } from "react-router-dom";
import Post from "./Post";
function LoginForm(){
    const email=useRef()
    const password=useRef()
    const [post, setPost] = useState(false);
    const getPassword=localStorage.getItem("passwordData")
    const [isLoggedIn, setLogin] = useState(false);
    // let navigate = useNavigate();
    const handleSubmit=()=>{
        if(email.current.value !==null&&password.current.value!==null){
            localStorage.setItem("emailData",email.current.value)
            localStorage.setItem("passwordData",password.current.value)
         setLogin(true);
             
            // navigate("./Post");
        }
        else{
            alert("Please enter email&password");
        }
    }
   
    return(

        <div class="container1">
            {
                 isLoggedIn ? <Post/> :
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="Email">Email - </label>
                    <input type="email" ref={email} />
                </div>
                <div>
                    <label for="Password">Password -</label>
                    <input type="password" ref={password} />
                </div>
                <button >Login</button>
            </form>
            }
            
        </div>
    );
}
export default LoginForm;