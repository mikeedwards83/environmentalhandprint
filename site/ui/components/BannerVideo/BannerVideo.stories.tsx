import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BannerVideo } from './BannerVideo';
import image from "./Assets/VideoThumb.jpg"



export default {
  title: 'Components/BannerVideo',
  component: BannerVideo,
} as ComponentMeta<typeof BannerVideo>;

const Template: ComponentStory<typeof BannerVideo> = (args) => <BannerVideo {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoId: "489517523",
  videoImage: image as any,
  subTitle: "Make a positive impact",
  title: "Environmental Handprint",
  button: {
    text: "Findout More",
    url: "http://test.com"
  }
};

