import * as React from 'react';
import { InputField } from '../../components/InputField';
import styled, { keyframes } from 'styled-components';
import { Button } from '../../components/Button';
import { RadioButton } from '../../components/radio-button/RadioButton';
import { IconVariant, RenderIcon } from '../../Icons/IconManager';

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

const StyledThirdPartySignUpContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 82px;
    margin-top: 12px;
`;

const StyledThirdPartySignUpContainerLabel = styled.div`
    padding: 0px 8px;

    font-family: Inter;
    font-weight: 400;
    color: #93a0ae;
    font-size: 12px;
    user-select: none;
`;

export const fadInAnim = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div<{}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
    width: 330px;
    animation: ${fadInAnim} .6s ease-in;
`;

export const SignUp = () => {
    return (
        <Container>
            <StyledLogoContainer>
                <RenderIcon variant={IconVariant.V1} icon={'logo'} />
            </StyledLogoContainer>
            <StyledHeaderContainer>
                <StyledHeader>Create account</StyledHeader>
                <StyledSubHeader>{`New beginning, your new adventure awaits.`}</StyledSubHeader>
            </StyledHeaderContainer>
            <StyledThirdPartySignUpContainer>
                <RenderIcon icon={'google'} />
                <RenderIcon icon={'facebook'} />
                <RenderIcon icon={'apple'} />
            </StyledThirdPartySignUpContainer>
            <StyledThirdPartySignUpContainerLabel>{'Or, register with email...'}</StyledThirdPartySignUpContainerLabel>
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
            <InputField
                onValue={(value) => console.log('>>', value)}
                leftIcon={'password'}
                placeholder={'confirm password'}
                type={'password'}
            />
            <StyledRadioButton isActive={false} label={'I have read and accept the Terms of Service.'} />
            <Button label={'Create account'} />
        </Container>
    );
};
