import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Login from "../components/Login";
import Signup from "../components/Signup"


const User =()=>{
    
    const Login_control = useSelector(state => state.show.login);
    const Signup_control = useSelector(state => state.show.signup);
    // React.useEffect(()=>{

    // },[Login_control])

    return (
        <React.Fragment>
            <Helmet>
                <title>Calendar type Diary</title>
                <meta property="og:title" content="Calendar type Diary" />
                <meta property="og:description" content="캘린더타입다이어리만들기" />
                <meta property="og:image" content="../Frame 1.png" />
            </Helmet>
            <StyledSection>
            {Login_control? <Login/> : null}
            {Signup_control? <Signup/>: null}
            </StyledSection>
        </React.Fragment>
    )
}

const StyledSection = styled.section`

width:100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

`

export default User;