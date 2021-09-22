import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Colours  from './Colours';
import './Colours.scss'


export default {
  title: 'materials/Colours',
  component: Colours,
  decorators: [(Story)=><div className="container"><Story /></div>]
} as ComponentMeta<typeof Colours>;

const Template: ComponentStory<typeof Colours> = (args) => <Colours {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

