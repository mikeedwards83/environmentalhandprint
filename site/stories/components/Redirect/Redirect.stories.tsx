import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Redirect } from './Redirect';
import './Redirect.scss'


export default {
  title: 'Components/Redirect',
  component: Redirect,
} as ComponentMeta<typeof Redirect>;

const Template: ComponentStory<typeof Redirect> = (args) => <Redirect {...args} />;

export const Default = Template.bind({});
Default.args = {  
  url:"http//test.com",
  redirect:false
};

