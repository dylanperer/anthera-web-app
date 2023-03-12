
import React, { createContext, useContext, useState } from 'react';

interface IAppMiscContext {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const AppMiscContext = createContext<IAppMiscContext>({
    count: 0,
    increment: () => {},
    decrement: () => {},
});

export const useAppMiscContext = () => useContext(AppMiscContext);

interface IAppMiscProvider {
    children: React.ReactNode;
}

const AppMiscProvider: React.FC<IAppMiscProvider> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const value: IAppMiscContext = {
        count,
        increment,
        decrement,
    };

    return <AppMiscContext.Provider value={value}>{children}</AppMiscContext.Provider>;
};

export default AppMiscProvider;




