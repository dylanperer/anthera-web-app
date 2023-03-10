import * as React from 'react';
import styled from 'styled-components';
import {RenderIcon} from "../../Icons/IconManager";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    div {
        color: red;
    }
`;

export const Preloader = () => {
    return (
        <StyledContainer>
            <div>
                <RenderIcon icon={"logo"}/>
            </div>
        </StyledContainer>
    );
};
