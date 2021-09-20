import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Section  from './Section';
import './Section.scss'


export default {
  title: 'atoms/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

