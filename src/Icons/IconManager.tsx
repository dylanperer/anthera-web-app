import {
    Apple,
    EmailIcon,
    EmailIconInactive,
    Facebook,
    Google,
    Logo,
    PasswordIcon,
    PasswordIconInactive,
    PreloaderLogo
} from './index';
import * as React from 'react';
import { SVGProps } from 'react';

export type Icon =
    | 'email'
    | 'password'
    | 'logo'
    | 'apple'
    | 'facebook'
    | 'google'
    | 'none';

export enum IconVariant {
    Default = 0,
    V1 = 1,
    V2 = 2,
    V3 = 3,
    V4 = 4,
}
export interface IRenderIcon {
    icon: Icon;
    variant?: IconVariant;
}

const getVariant = (variant = IconVariant.Default) => {
    switch (variant) {
        case IconVariant.Default:
            return <EmailIconInactive />;
        case IconVariant.V1:
            return <EmailIcon />;
    }
};
export const RenderIcon = ({
    icon,
    variant = IconVariant.Default,
}: IRenderIcon) => {
    switch (icon) {
        case 'logo':
            switch (variant) {
                case IconVariant.V1:
                    return <Logo />;
                case IconVariant.Default:
                default:
                    return <PreloaderLogo />;
            }
        case 'apple':
            return <Apple />;
        case 'facebook':
            return <Facebook />;
        case 'google':
            return <Google />;
        case 'email':
            switch (variant) {
                case IconVariant.V1:
                    return <EmailIcon />;
                case IconVariant.Default:
                default:
                    return <EmailIconInactive />;
            }
        case 'password':
            switch (variant) {
                case IconVariant.V1:
                    return <PasswordIcon />;
                case IconVariant.Default:
                default:
                    return <PasswordIconInactive />;
            }
        case 'none':
            return <span>Icon None</span>;
        default:
            return <span>Icon default</span>;
    }
};
