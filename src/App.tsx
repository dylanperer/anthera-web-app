import React from 'react';
import { SignIn } from './pages/auth/SignIn';
import styled from 'styled-components';
import { Preloader } from './pages/misc/Preloader';
import { SignUp } from './pages/auth/SignUp';
import { Route, Routes } from 'react-router-dom';
import { Discover } from './pages/app/Discover';
import { DiscoverPath, SignInPath, SignUpPath } from './navigation';
import { appConfig } from './env/enviroment';
import AppMiscProvider from './contexts/AppMiscContext';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
`;

function App() {
    const [isPreloadReady, setIsPreloadReady] = React.useState<boolean>(false);


    React.useEffect( () => {
        const joinRoom = async (user: string, room: string) => {
            try {
                const connection = new HubConnectionBuilder()
                    .withUrl('https://localhost:7248/chat')
                    .configureLogging(LogLevel.Information)
                    .build();

                connection.on('ReceiveMessage', (user, message) =>
                    console.log('message received: ', message)
                );

                await connection.start();
                await connection.invoke("JoinRoom", {user, room});
            } catch (e) {
                console.log(e);
            }
        };

        joinRoom('u1', 'r1');
        setTimeout(()=>setIsPreloadReady(true), appConfig.PRELOADER_WAIT_TIME);
    }, []);

    return (
        <AppContainer className="App">
            <AppMiscProvider>
                {isPreloadReady ? (
                    <Routes>
                        <Route path={DiscoverPath} element={<Discover />} />
                        <Route path={SignInPath} element={<SignIn />} />
                        <Route path={SignUpPath} element={<SignUp />} />
                    </Routes>
                ) : (
                    <Preloader />
                )}
            </AppMiscProvider>
        </AppContainer>
    );
}

export default App;
