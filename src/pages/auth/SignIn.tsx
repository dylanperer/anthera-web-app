import * as React from 'react';
import { InputField } from '../../components/InputField';
import styled, { keyframes } from 'styled-components';
import { Button } from '../../components/Button';
import { RadioButton } from '../../components/radio-button/RadioButton';
import { IconVariant, RenderIcon } from '../../Icons/IconManager';
import {SignUpPath} from "../../navigation";
import {useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

const StyledLogoContainer = styled.div`
    margin-bottom: 36px;
`;
const StyledSubHeader = styled.span`
    margin-bottom: 16px;

    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    user-select: none;
    color: #93a0ae;
`;

const StyledHeader = styled.span`
    margin-bottom: 8px;

    font-family: Inter;
    font-weight: 700;
    font-size: 26px;
    user-select: none;
    color: #294661;
`;

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-self: start;
`;

const StyledRadioButton = styled(RadioButton)`
    margin-top 16px;
    margin-bottom 10px;
    
    justify-content: end;
`;

const StyledThirdPartyLoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 82px;
    margin-top: 30px;
`;


const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
    width: 330px;
`;

export const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Container initial={{opacity: 0}} animate={{ opacity: 1}} transition={{duration: .2, ease: 'easeIn'}} key={location.pathname}>
            <StyledLogoContainer>
                <RenderIcon variant={IconVariant.V1} icon={'logo'} />
            </StyledLogoContainer>
            <StyledHeaderContainer>
                <StyledHeader>Sign in</StyledHeader>
                <StyledSubHeader>{`Hello there! Let's get in back to it.`}</StyledSubHeader>
            </StyledHeaderContainer>
            <InputField
                onValue={(value) => console.log('>>', value)}
                leftIcon={'email'}
                type={'email'}
                placeholder={'emma@anthera.co.nz'}
            />
            <InputField
                onValue={(value) => console.log('>>', value)}
                leftIcon={'password'}
                placeholder={'password'}
                type={'password'}
                label={'Forgot?'}
            />
            <StyledRadioButton isActive={true} label={'Remember this device.'} />
            <Button label={'Sign in'} onClick={()=>navigate(SignUpPath)}/>
            <StyledThirdPartyLoginContainer>
                <RenderIcon icon={'google'} />
                <RenderIcon icon={'facebook'} />
                <RenderIcon icon={'apple'} />
            </StyledThirdPartyLoginContainer>
        </Container>
    );
};
