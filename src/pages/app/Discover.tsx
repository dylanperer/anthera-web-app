import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Discover = ()=> {
    const navigate = useNavigate();
    return(<div><button onClick={()=>navigate('auth/sign-in')}>Sign in</button></div>)};