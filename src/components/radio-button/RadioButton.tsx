import * as React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledRadioInnerCircle = styled.div<{
    isActive: boolean;
}>`
    border-radius: 999px;
    background-color: #1262fb;
    height: 14px;
    width: 14px;

    opacity: ${(c) => (c.isActive ? 1 : 0)};
    transition: all 0.3s ease-out;
`;
const StyledRadioCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 999px;
    border: solid 2px #e0e2e3;
    height: 18px;
    width: 18px;
`;
const StyledRadioLabel = styled.div`
    padding: 0px 8px;

    font-family: Inter;
    font-weight: 400;
    color: #93a0ae;
    font-size: 14px;
    user-select: none;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: start;
    align-items: center;

    cursor: pointer;

    &:active {
        opacity: 0.75;
    }

    transition: all 0.2s ease-out;
`;

export interface IRadioButton {
    label?: string;
    onClick?: () => void;
    isActive?: boolean;
    className?:string;
}

export const RadioButton = ({
    label = '',
    onClick = () => undefined,
    isActive = false,
    className,
}: IRadioButton) => {
    const [_isActive, setActive] = useState<boolean>(isActive);

    return (
        <Container onClick={() => setActive(!_isActive)} className={className}>
            <StyledRadioCircle>
                <StyledRadioInnerCircle isActive={_isActive} />
            </StyledRadioCircle>
            <StyledRadioLabel>{label}</StyledRadioLabel>
        </Container>
    );
};
