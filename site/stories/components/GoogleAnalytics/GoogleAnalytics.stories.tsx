import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  GoogleAnalytics  from './GoogleAnalytics';
import './GoogleAnalytics.scss'


export default {
  title: 'components/GoogleAnalytics',
  component: GoogleAnalytics,
} as ComponentMeta<typeof GoogleAnalytics>;

const Template: ComponentStory<typeof GoogleAnalytics> = (args) => <GoogleAnalytics {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

