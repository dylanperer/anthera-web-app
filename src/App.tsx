import React from 'react';
import { SignIn } from './pages/auth/SignIn';
import styled from 'styled-components';
import { Preloader } from './pages/misc/Preloader';
import { SignUp } from './pages/auth/SignUp';
import {
    Route,
    Routes,
} from 'react-router-dom';
import { Discover } from './pages/app/Discover';
import {DiscoverPath, SignInPath, SignUpPath} from "./navigation";
import {appConfig} from "./env/enviroment";

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
`;

function App() {
    const [isPreloadReady, setIsPreloadReady] = React.useState<boolean>(false);
    React.useEffect(()=>console.log('i>> nit'), []);
    const onPreloadReady = () => {
        setIsPreloadReady(true);
   };
    console.log(process.env,appConfig.PRELOADER_WAIT_TIME);
    return (
        <AppContainer className="App">
            <head>
                <link
                    href="https://fonts.cdnfonts.com/css/inter"
                    rel="stylesheet"
                    onLoad={() => setTimeout(onPreloadReady, appConfig.PRELOADER_WAIT_TIME)}
                />
                <title>anthera</title>
            </head>
            {isPreloadReady? <Routes>
                <Route path={DiscoverPath} element={<Discover />} />
                <Route path={SignInPath} element={<SignIn />} />
                <Route path={SignUpPath} element={<SignUp/>}/>
            </Routes>: <Preloader/>}
        </AppContainer>
    );
}

export default App;
