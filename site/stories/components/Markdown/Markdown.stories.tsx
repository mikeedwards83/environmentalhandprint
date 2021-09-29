import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Markdown  from './Markdown';
import './Markdown.scss'


export default {
  title: 'components/Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => <Markdown {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

