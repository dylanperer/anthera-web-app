import React from 'react'
import { SignIn } from './pages/auth/SignIn'
import styled from "styled-components";
import {Preloader} from "./pages/misc/Preloader";

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

function App() {
    return (
        <AppContainer className="App">
            <head>
                <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet"/>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"/>
                <title>anthera</title>
            </head>
            <Preloader />
        </AppContainer>
    )
}

export default App