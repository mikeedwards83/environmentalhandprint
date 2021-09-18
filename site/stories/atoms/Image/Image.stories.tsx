import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './Image';
import './Image.scss'


export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {  
};
