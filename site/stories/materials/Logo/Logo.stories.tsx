import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Logo  from './Logo';
import './Logo.scss'


export default {
  title: 'materials/Logo',
  component: Logo,
  decorators: [(Story) =><div className="container"><Story /></div>]
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

