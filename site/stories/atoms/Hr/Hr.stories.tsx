import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Hr  from './Hr';
import './Hr.scss'


export default {
  title: 'atoms/Hr',
  component: Hr,
} as ComponentMeta<typeof Hr>;

const Template: ComponentStory<typeof Hr> = (args) => <Hr {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

