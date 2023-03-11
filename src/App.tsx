import React from 'react';
import { SignIn } from './pages/auth/SignIn';
import styled from 'styled-components';
import { Preloader } from './pages/misc/Preloader';

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
`;

function App() {
    const [isPreloadReady, setIsPreloadReady] = React.useState<boolean>(false);
    const onPreloadReady = async () => {
        setIsPreloadReady(true);
    };
    return (
        <AppContainer className="App">
            <head>
                <link
                    href="https://fonts.cdnfonts.com/css/inter"
                    rel="stylesheet"
                    onLoad={() => setTimeout(onPreloadReady, 6000)}
                />
                <title>anthera</title>
            </head>
            {isPreloadReady ? <SignIn /> : <Preloader />}
        </AppContainer>
    );
}

export default App;
