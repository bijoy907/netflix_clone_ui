import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../Img/Nlogo.png";

const Header=(props)=>{

    const navigate = useNavigate();

    return(
        <>
        <Container className="flex a-center j-between">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <button onClick={()=>navigate(props.login?"/login":"/signup")}>
                {props.login ? "Login" : "Sign In"}
            </button>
        </Container>
        </>
    )
};


const Container = styled.div`
padding: 0rem 4rem;
.logo{
    img{
        height:4rem;
    } 
}
button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
}
`;

export default Header;