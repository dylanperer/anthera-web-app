import * as React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledButton = styled.div`
    padding: 14px 0px;

    font-family: Inter;
    font-weight: 700;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;

    background-color: #1262fb;
    border-radius: 999px;
    transition: border-color 0.6s ease-out;
    cursor: pointer;

    &:active {
        opacity: 0.75;
    }

    transition: all 0.2s ease-out;
`;

export interface IButton {
    label?: string;
    onClick?: () => void;
}

export const Button = ({ label = '', onClick = () => undefined }: IButton) => {
    return (
        <Container onClick={onClick}>
            <StyledButton>{label}</StyledButton>
        </Container>
    );
};
