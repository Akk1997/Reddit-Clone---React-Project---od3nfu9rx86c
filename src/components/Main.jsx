import React,{ useState, useEffect } from "react";
import '../styles/Main.css'
import Header from "./Header";
import LoginForm from "./LoginForm";
import Post from "./Post";
import SideNavbar from "./SideNavbar";

   
export const Main = () => {
const getEmail=localStorage.getItem("emailData");

        return (
            <>
            
            <div className="Main"> 
            <Header/>
            {getEmail ? <Post/> : <LoginForm/>}
            {/* <LoginForm/> */}
            {/* <LoginForm/>    
            <Post/>        */}
        </div>
        </>
        
    )
}