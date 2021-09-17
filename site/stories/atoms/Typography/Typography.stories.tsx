import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';
import './Typography.scss'


export default {
  title: 'atoms/Typography',
  component: Typography,
  decorators: [(Story)=><div className="container"><Story /></div>]
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

