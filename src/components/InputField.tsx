import * as React from 'react';
import {HTMLInputTypeAttribute, useState} from 'react';
import styled from 'styled-components';
import {Icon, IconVariant, RenderIcon} from '../Icons/IconManager';

const LeftSideIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RightSideIconContainer = styled.div<{ rightIcon: Icon }>`
    height: 20px;
    width: 20px;

    margin: 9.5px 0px;
`;

const StyledLabel = styled.span`
    margin: 9.5px 0px;
    color: #1262fb;

    font-family: Inter;
    font-weight: 700;
    font-size: 15px;
    user-select: none;
    cursor: pointer;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:active {
        opacity: 0.75;
    }

    transition: all 0.2s ease-out;
`;

const Input = styled.input<{
    isFocused: boolean;
}>`
    display: flex;
    flex-grow: 3;
    text-align: left;
    margin: 9.5px 15px;

    font-family: Inter;
    font-weight: 400;
    outline: none;
    border: none;
    color:  ${(c) => (c.isFocused ? '#1262FB' : '#93a0ae')};
    font-size: 15px;
    cursor: pointer;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Container = styled.div<{
    isFocused: boolean;
}>`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    border-bottom: solid 1.25px ${(c) => (c.isFocused ? '#1262FB' : '#e0e2e3')};
    transition: border-color 0.6s ease-out;
`;

export interface IInputField {
    leftIcon?: Icon;
    rightIcon?: Icon;
    label?: string;
    placeholder?: string;
    onValue?: (value: string) => void;
    onLabelClick?: () => void;
    type?: HTMLInputTypeAttribute;
}

export const InputField = ({
    placeholder = '',
    onValue = () => undefined,
    onLabelClick = () => undefined,
    leftIcon = 'none',
    rightIcon = 'none',
    label = '',
    type = 'email',
}: IInputField) => {
    const [isFocused, setFocus] = useState<boolean>(false);

    return (
        <Container isFocused={isFocused}>
            <LeftSideIconContainer>
                <RenderIcon icon={leftIcon} variant={IconVariant.V1} />
            </LeftSideIconContainer>
            <Input
                isFocused={isFocused}
                onChange={(e) => onValue(e.target.value)}
                placeholder={placeholder}
                autoCapitalize={'none'}
                type={type}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            {rightIcon !== 'none' ? (
                <RightSideIconContainer rightIcon={rightIcon}>
                    <RenderIcon icon={rightIcon} />
                </RightSideIconContainer>
            ) : label !== '' ? (
                <StyledLabel onClick={onLabelClick}>{label}</StyledLabel>
            ) : (
                <></>
            )}
        </Container>
    );
};
