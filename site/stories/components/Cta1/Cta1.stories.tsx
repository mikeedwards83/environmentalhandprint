import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Cta1  from './Cta1';
import './Cta1.scss'


export default {
  title: 'components/Cta1',
  component: Cta1,
} as ComponentMeta<typeof Cta1>;

const Template: ComponentStory<typeof Cta1> = (args) => <Cta1 {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

