import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAppContext} from "../../contexts/AppContext";
import {SignInPath} from "../../navigation";

export const Discover = () => {
    const { appNavigate } = useAppContext();
    return (
        <div>
            <button onClick={() => appNavigate(SignInPath)}>Sign in</button>
        </div>
    );
};
