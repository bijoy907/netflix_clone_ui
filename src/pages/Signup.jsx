import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImg from "../components/BackgroundImg";
import Header from "../components/Header";
import { createUserWithEmailAndPassword, onAuthStateChanged, } from "firebase/auth";
import { firebaseAuth } from "../utils/Firebase-config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [ShowPassword, setShowPassword] = useState(false);
    const [fromValue, setfromValue] = useState({
        email: "",
        password: "",
    });

    const handleSignin = async () => {
        // console.log(fromValue);
        try {
            const { email, password } = fromValue;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    })

    return (
        <>
            <Container ShowPassword={ShowPassword}>
                <BackgroundImg />
                <div className="content">
                    <Header login />
                    <div className="body flexi a-center j-center">
                        <div className="text flex column">
                            <div className="responsive_text">
                                <h1>Unlimited Movies, TV Shows and more...</h1>
                                <h4>Watch anyware. Cancel anytime</h4>
                                <h6>Ready to watch? Enter your mail to create or restart membership</h6>
                            </div>
                        </div>
                        <div className="form">
                            <input type="email" placeholder="Enter your email" name="email"
                                value={fromValue.email} onChange={(e) => setfromValue({ ...fromValue, [e.target.name]: e.target.value })} />

                            {ShowPassword && (<input type="password" placeholder="password" name="password"
                                value={fromValue.password} onChange={(e) => setfromValue({ ...fromValue, [e.target.name]: e.target.value })}
                            />)}

                            {!ShowPassword && <button onClick={() => setShowPassword(true)} className="started_btn">Get Started</button>}

                        </div>
                        <button className="sign_btn" onClick={handleSignin}>Sign Up</button>
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
    .body{
        gap: 1rem;
        .text{
            gap: 1rem;
            text-align: center;
            font-size: 1.5rem;
            h1{
                padding: 0 25rem;
            }
        }
        .form{
            display: grid;
            grid-template-columns: ${({ ShowPassword }) => ShowPassword ? "1fr 1fr" : "2fr 1fr"};
            width: 60%;
        }
        input{
            color: black;
            border: none;
            padding: 1.02rem;
            font-size: 1.02rem;
            // border: 1px solid black;
            &:focus{
                outline:none;
            }
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
    button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1.05rem;
    }
    // .form{
    //     @media (min-width:200px) and (max-width: 850px){
    //         width: 20%!important;
    //         margin-left: -35%;
    //     }
    // }
    // *****************

    input{
        @media (min-width:200px) and (max-width: 850px){
            padding: 0.6rem!important;
            font-size: 0.6rem!important;
            margin: 0px;
        }
    }
    .started_btn{
        @media (min-width:200px) and (max-width: 850px){
            padding: 0.6rem!important;
            font-size: 0.6rem!important;
            margin: 0px;
        }
    }
    .sign_btn{
        @media (min-width:200px) and (max-width: 850px){
            margin-left: -8%;
            padding-left: 5%!important;
            padding-right: 5%!important;
        }
    }
    .text{
         @media (min-width:200px) and (max-width: 850px){
            gap: 0.6rem;
            text-align: center;
            font-size: small;
            padding-right: 20px!important;

            h1{
             margin-left: 5%!important;
             font-size: 2.5rem;
             padding: 0 0rem!important;
            }
            h4{
                margin-left: 5%!important;
                // padding-right: 0!important;
            }
            h6{
                margin-left: 5%!important;
                // padding-right: 0!important;
            }
        }
    }
}
`;

export default Signup;
