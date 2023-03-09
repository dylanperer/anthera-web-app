import {Apple, EmailIcon, EmailIconInactive, Facebook, Google, Logo, PasswordIcon, PasswordIconInactive} from './index';
import * as React from 'react';
import {SVGProps} from "react";

export type Icon = 'email' | 'password' | 'logo' | 'apple'| 'facebook'| 'google'| 'none';

export interface IRenderIcon {
    icon: Icon;
    isActive?: boolean;
}

export const RenderIcon = ({icon, isActive=true}: IRenderIcon) => {
    switch (icon) {
        case 'logo':
            return <Logo/>;
        case 'apple':
            return <Apple/>;
        case 'facebook':
            return <Facebook/>;
        case 'google':
            return <Google/>;
        case 'email':
            return isActive ? <EmailIcon/>: <EmailIconInactive/>;
        case 'password':
            return isActive ? <PasswordIcon/>: <PasswordIconInactive/>;
        case 'none':
            return <></>;
        default:
            return <></>
    }
};
