import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PageError  from './PageError';
import './PageError.scss'


export default {
  title: 'components/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

