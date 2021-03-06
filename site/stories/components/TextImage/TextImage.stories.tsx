import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextImage } from './TextImage';
import image from './Assets/Image.jpg'
import './TextImage.scss'


export default {
  title: 'Components/TextImage',
  component: TextImage,
} as ComponentMeta<typeof TextImage>;

const Template: ComponentStory<typeof TextImage> = (args) => <TextImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageText: "Desk Trees",
  imageUrl: image as any,
  side: "left",
  children: <>
    <h3>Step 1 - Planet Positive Workforce</h3>
    <p>
      Make a planet positive contribution on behalf of your employees by planting trees and offsetting their climate impact.
    </p>
    <p>
      Show your employees and customers how you are helping our planet.
    </p>
  </>
};

export const ImageLeft = Template.bind({});

ImageLeft.args = {
  imageText: "Desk Trees",
  imageUrl: image as any,
  side: "left",
  children: <>
    <h3>Step 1 - Planet Positive Workforce</h3>
    <p>
      Make a planet positive contribution on behalf of your employees by planting trees and offsetting their climate impact.
    </p>
    <p>
      Show your employees and customers how you are helping our planet.
    </p>
  </>
};

export const ImageRight = Template.bind({});

ImageRight.args = {
  imageText: "Desk Trees",
  imageUrl: image as any,
  side: "right",
  children: <>
    <h3>Step 1 - Planet Positive Workforce</h3>
    <p>
      Make a planet positive contribution on behalf of your employees by planting trees and offsetting their climate impact.
    </p>
    <p>
      Show your employees and customers how you are helping our planet.
    </p>
  </>
};

