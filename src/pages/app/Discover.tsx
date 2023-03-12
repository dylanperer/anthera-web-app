import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAppMiscContext} from "../../contexts/AppMiscContext";

export const Discover = () => {
    const { appNavigate } = useAppMiscContext();
    return (
        <div>
            <button onClick={() => appNavigate('auth/sign-in')}>Sign in</button>
        </div>
    );
};
