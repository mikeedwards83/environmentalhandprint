import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PageError404  from './PageError404';
import './PageError404.scss'


export default {
  title: 'pages/PageError404',
  component: PageError404,
} as ComponentMeta<typeof PageError404>;

const Template: ComponentStory<typeof PageError404> = (args) => <PageError404 {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

