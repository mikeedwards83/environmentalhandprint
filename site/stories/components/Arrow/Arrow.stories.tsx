import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Arrow  from './Arrow';
import './Arrow.scss'


export default {
  title: 'components/Arrow',
  component: Arrow,
  decorators:[(Story)=><div className="container"><Story /></div>]
} as ComponentMeta<typeof Arrow>;

const Template: ComponentStory<typeof Arrow> = (args) => <Arrow {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

