import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  HighlightsThreeColumn  from './HighlightsThreeColumn';
import './HighlightsThreeColumn.scss'
import Section from '../../atoms/Section/Section';


export default {
  title: 'components/HighlightsThreeColumn',
  component: HighlightsThreeColumn,
} as ComponentMeta<typeof HighlightsThreeColumn>;

const Template: ComponentStory<typeof HighlightsThreeColumn> = (args) => <HighlightsThreeColumn {...args} />;

const highlight ={
  title:"Critical Issues",
  description:"This are the critical issues facing us",
  features:[
    "example feature 1",
    "example feature 2",
    "example feature 3"
  ]
};


export const Light = Template.bind({});
Light.args = {  
  highlights:[highlight,highlight,highlight]
};


export const Dark = Template.bind({});
Dark.args = {  
  highlights:[highlight,highlight,highlight]
};
Dark.decorators = [
  (Story)=><Section color='dark'><Story /></Section>
]