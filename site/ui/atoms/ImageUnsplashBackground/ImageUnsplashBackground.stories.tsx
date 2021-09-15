import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageUnsplashBackground } from './ImageUnsplashBackground';
import './ImageUnsplashBackground.stories.scss'


export default {
  title: 'Atoms/ImageUnsplashBackground',
  component: ImageUnsplashBackground,
} as ComponentMeta<typeof ImageUnsplashBackground>;

import './ImageUnsplashBackground.scss'


const Template: ComponentStory<typeof ImageUnsplashBackground> = (args) => <ImageUnsplashBackground {...args} />;

export const Default = Template.bind({});
Default.args = {  
  imageUrl:"https://images.unsplash.com/photo-1615420510251-083da7739330",
  fit:"Crop",
  crop:"FocalPoint",
  fpy:0.8,
  className:"ImageUnsplashBackground500"
};

