import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logos } from './Logos';
import './Logos.scss'


export default {
  title: 'Components/Logos',
  component: Logos,
  decorators:[(Story)=><div className="container"><Story /></div>]
} as ComponentMeta<typeof Logos>;

const Template: ComponentStory<typeof Logos> = (args) => <Logos {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

