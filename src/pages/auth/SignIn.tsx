import * as React from 'react';
import {InputField} from '../../components/InputField';
import styled from 'styled-components';
import {Button} from '../../components/Button';
import {RadioButton} from '../../components/radio-button/RadioButton';
import {IconVariant, RenderIcon} from '../../Icons/IconManager';

const StyledLogoContainer = styled.div`
    margin-bottom: 36px;
`;
const StyledSubHeader = styled.span`
    margin-bottom: 16px;

    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    user-select: none;
    color: #93a0ae;
`;

const StyledHeader = styled.span`
    margin-bottom: 8px;

    font-family: Inter;
    font-weight: 700;
    font-size: 28px;
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

const Container = styled.div<{}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
    width: 324px;
`;

export const SignIn = () => {
    return (
        <Container>
            <StyledLogoContainer>
                <RenderIcon variant={IconVariant.VariantOne} icon={'logo'} />
            </StyledLogoContainer>
            <StyledHeaderContainer>
                <StyledHeader>Sign in</StyledHeader>
                <StyledSubHeader>{`Hello there! Let's get in back to it`}</StyledSubHeader>
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
            <StyledRadioButton isActive={true} label={'Remember me'} />
            <Button label={'Sign in'} />
            <StyledThirdPartyLoginContainer>
                <RenderIcon icon={'google'}/>
                <RenderIcon icon={'facebook'}/>
                <RenderIcon icon={'apple'}/>
            </StyledThirdPartyLoginContainer>
        </Container>
    );
};
