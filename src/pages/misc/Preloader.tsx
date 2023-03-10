import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { IconVariant, RenderIcon } from '../../Icons/IconManager';

export const pulseFadeAnim = keyframes`
  0% {
    opacity: .1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .1;
  }
`;

const StyledIconContainer = styled.div`
    animation: ${pulseFadeAnim} 4s ease-in-out infinite;
    margin: 10px;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 600px;
    div {
        color: red;
    }
`;

const StyledHiddenSpan = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 15px;
    user-select: none;
    opacity: 0;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;


export const Preloader = () => {
    return (
        <StyledContainer>
            <StyledIconContainer>
                <RenderIcon icon={'logo'} />
            </StyledIconContainer>
            <StyledHiddenSpan>Load fonts...</StyledHiddenSpan>
        </StyledContainer>
    );
};
