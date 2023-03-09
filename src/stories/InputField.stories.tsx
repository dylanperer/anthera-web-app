import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { InputField } from '../components/InputField';

export default {
    title: 'Example/input-field',
    component: InputField,
    argTypes: {},
} as ComponentMeta<typeof InputField>;

export const Default:ComponentStory<typeof InputField> = () => (
    <div style={{ maxWidth: '324px' }}>
        <InputField onValue={(value)=>console.log('>>', value)} leftIcon={'email'} placeholder={'emma@anthera.co.nz'} />
    </div>
);
