import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

interface IAppMiscContext {
    appNavigate: (url: string) => void;
    animateOnNavBackwards: (url: string) => boolean
}

const AppMiscContext = createContext<IAppMiscContext>({
    appNavigate: () => undefined,
    animateOnNavBackwards: () => false,
});

export const useAppMiscContext = () => useContext(AppMiscContext);

interface IAppMiscProvider {
    children: React.ReactNode;
}

const AppMiscProvider: React.FC<IAppMiscProvider> = ({ children }) => {
    const historyStack = React.useRef<Array<string>>([]);
    const navigate = useNavigate();

    const appNavigate = (url: string) => {
        historyStack.current = [...historyStack.current, url];
        navigate(url);
        console.log(historyStack);
    };

    const animateOnNavBackwards =  (url: string)=>{
        const find = historyStack.current.find(c=> c === url);
        return !!find
    };

    return (
        <AppMiscContext.Provider value={{ appNavigate, animateOnNavBackwards }}>
            {children}
        </AppMiscContext.Provider>
    );
};

export default AppMiscProvider;
