import React from "react";
import BgImg from "../Img/login.jpg";
import styled from "styled-components";


const Background = () => {

    return (
        <>
            <Container>
                <img src={BgImg} alt="Background Img" />
            </Container>
        </>
    )
};

const Container = styled.div`
 height: 100vh;
 width: 100vw;
 img{
    height: 100vh;
    width: 100vw;
 }
`;

export default Background;