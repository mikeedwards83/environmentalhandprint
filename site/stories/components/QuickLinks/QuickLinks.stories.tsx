import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuickLinks } from './QuickLinks';
import image from './assets/Book1.svg'
import './QuickLinks.scss'


export default {
  title: 'Components/QuickLinks',
  component: QuickLinks,
} as ComponentMeta<typeof QuickLinks>;

const Template: ComponentStory<typeof QuickLinks> = (args) => <QuickLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [{
    imageUrl: image,
    link: {
      text: "Learn More",
      url: "http://test.com"
    },
    text: "Become planet positive, plant trees and reduce your footprint.",
    title: "Personal Subscription"
  },
  {
    imageUrl: image,
    link: {
      text: "Learn More",
      url: "http://test.com"
    },
    text: "Become planet positive, plant trees and reduce your footprint.",
    title: "Personal Subscription"
  },
  {
    imageUrl: image,
    link: {
      text: "Learn More",
      url: "http://test.com"
    },
    text: "Become planet positive, plant trees and reduce your footprint.",
    title: "Personal Subscription"
  },
  {
    imageUrl: image,
    link: {
      text: "Learn More",
      url: "http://test.com"
    },
    text: "Become planet positive, plant trees and reduce your footprint.",
    title: "Personal Subscription"
  },
  ]


};

