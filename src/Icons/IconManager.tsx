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
    VariantDefault = 0,
    VariantOne = 0,
    VariantTwo = 0,
    VariantThree = 0,
    VariantFour = 0,
}
export interface IRenderIcon {
    icon: Icon;
    variant?: IconVariant;
}

const getVariant = (variant = IconVariant.VariantDefault) => {
    switch (variant) {
        case IconVariant.VariantDefault:
            return <EmailIconInactive />;
        case IconVariant.VariantOne:
            return <EmailIcon />;
    }
};
export const RenderIcon = ({
    icon,
    variant = IconVariant.VariantDefault,
}: IRenderIcon) => {
    switch (icon) {
        case 'logo':
            switch (variant) {
                case IconVariant.VariantOne:
                    return <PasswordIcon />;
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
                case IconVariant.VariantOne:
                    return <EmailIcon />;
                default:
                    return <EmailIconInactive />;
            }
        case 'password':
            switch (variant) {
                case IconVariant.VariantOne:
                    return <PasswordIcon />;
                default:
                    return <PasswordIconInactive />;
            }
        case 'none':
            return <></>;
        default:
            return <></>;
    }
};
