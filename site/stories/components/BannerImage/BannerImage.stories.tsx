import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BannerImage } from './BannerImage';
import './BannerImage.scss'


export default {
  title: 'Components/BannerImage',
  component: BannerImage,
} as ComponentMeta<typeof BannerImage>;

const Template: ComponentStory<typeof BannerImage> = (args) => <BannerImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Your business For the planet",
  imageUrl:"https://images.unsplash.com/photo-1615420510251-083da7739330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3d&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60&h=500&crop=focalpoint&fp-y=0.8",
  subTitle:"Sub-Text"
};
