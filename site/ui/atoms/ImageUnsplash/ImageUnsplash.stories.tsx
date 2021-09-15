import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageUnsplash } from './ImageUnsplash';
import './ImageUnsplash.scss'


export default {
  title: 'atoms/ImageUnsplash',
  component: ImageUnsplash,
} as ComponentMeta<typeof ImageUnsplash>;

const Template: ComponentStory<typeof ImageUnsplash> = (args) => <ImageUnsplash {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

