import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImg from "../components/BackgroundImg";
import Header from "../components/Header";
import {onAuthStateChanged, signInWithEmailAndPassword,} from "firebase/auth";
import {firebaseAuth} from "../utils/Firebase-config";
import {useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();

    const [fromValue, setfromValue] = useState({
        email: "",
        password: "",
    });

    const handleLogin= async ()=>{
        // console.log(fromValue);
        try{
            const{email,password}=fromValue;
            await signInWithEmailAndPassword(firebaseAuth,email,password)
        }catch(error){
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser)navigate("/");
    })

    return (
        <>
            <Container>
                <BackgroundImg />
                <div className="content">
               <Header/>
               <div className="form-container flex column a-center j-center">
                <div className="form flex column a-center j-center">
                    <div className="title">
                        <h3>Login</h3>
                    </div>
                    <div className="container flex column">
                    <input type="email" placeholder="Enter your email" name="email" 
                            value={fromValue.email} onChange={(e) => setfromValue({ ...fromValue, [e.target.name]: e.target.value })} />

                            <input type="password" placeholder="password" name="password" 
                            value={fromValue.password} onChange={(e) => setfromValue({ ...fromValue, [e.target.name]: e.target.value })}
                            />
                         <button onClick={handleLogin}>Login</button>
                    </div>
                </div>
               </div>
                </div>
            </Container>
        </>
    )
};
const Container = styled.div`
position: relative;
.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    // *********
   .form-container{
    gap: 2rem;
    height: 85vh;
    .form{
        padding: 2rem;
        background-color: #000000b0;
        // background-color: yellow;
        width: 25vw;
        gap: 2rem;
        color:white;
        .container{
            gap: 2rem;
            input{
                padding:0.5rem 1rem;
                width: 15rem;
                border-radius: 5px;
            }
            button{
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
               
                font-weight: bolder;
                font-size: 1.05rem;
            }
        }
    }
   }
   .form{
    @media (min-width:200px) and (max-width: 850px){
        width: 50%!important;
    }
   }
   .container{
    @media (min-width:200px) and (max-width: 500px){
        gap: 1.5rem!important;
        input{
            padding:0.3rem 0.5rem!important;
            width: 10rem!important;
            border-radius: 5px;
        }
    }
   }
}


`;

export default Login;