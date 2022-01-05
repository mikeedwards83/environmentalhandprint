import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Highlight  from './Highlight';
import './Highlight.scss'


export default {
  title: 'components/Highlight',
  component: Highlight,
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => <Highlight {...args} />;

export const Default = Template.bind({});
Default.args = {  
  highlight:{
    title:"Critical Issues",
    description:"This are the critical issues facing us",
    features:[
      "example feature 1",
      "example feature 2",
      "example feature 3"
    ]

  }
};

