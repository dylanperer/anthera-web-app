import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

interface IAppContext {
    appNavigate: (url: string) => void;
    toAnimateOnMount: (url: string) => boolean;
}

const AppContext = createContext<IAppContext>({
    appNavigate: () => undefined,
    toAnimateOnMount: () => false,
});

export const useAppContext = () => useContext(AppContext);

interface IAppProvider {
    children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const historyStack = React.useRef<Array<string>>([]);
    const navigate = useNavigate();

    const appNavigate = (url: string) => {
        historyStack.current = [...historyStack.current, url];
        navigate(url);

        if(historyStack.current.length > 3){
            const tmp = historyStack.current.reverse();
            tmp.pop();
            historyStack.current = tmp;
        }
    };

    // x1 , y1 , x2 | x2 === x1 -> T
    const toAnimateOnMount = (mountingPageUrl: string) => {
        return !(historyStack.current[historyStack.current.length-3] === mountingPageUrl);
    };

    return (
        <AppContext.Provider value={{ appNavigate, toAnimateOnMount }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
