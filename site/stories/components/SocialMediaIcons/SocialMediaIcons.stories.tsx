import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  SocialMediaIcons  from './SocialMediaIcons';
import './SocialMediaIcons.scss'


export default {
  title: 'components/SocialMediaIcons',
  component: SocialMediaIcons,
} as ComponentMeta<typeof SocialMediaIcons>;

const Template: ComponentStory<typeof SocialMediaIcons> = (args) => <SocialMediaIcons {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

