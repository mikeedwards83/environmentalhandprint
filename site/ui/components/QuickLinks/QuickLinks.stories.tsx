import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuickLinks } from './QuickLinks';
import image from './assets/Book1.svg'


export default {
  title: 'Components/QuickLinks',
  component: QuickLinks,
} as ComponentMeta<typeof QuickLinks>;

const Template: ComponentStory<typeof QuickLinks> = (args) => <QuickLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  links:[{
    imageUrl:image,
    linkText: "Learn More",
    linkUrl: "http://test.com",
    text: "Become planet positive, plant trees and reduce your footprint.",
    title:"Personal Subscription"
  },
  {
    imageUrl:image,
    linkText: "Learn More",
    linkUrl: "http://test.com",
    text: "Become planet positive, plant trees and reduce your footprint.",
    title:"Personal Subscription"
  },
  {
    imageUrl:image,
    linkText: "Learn More",
    linkUrl: "http://test.com",
    text: "Become planet positive, plant trees and reduce your footprint.",
    title:"Personal Subscription"
  },
  {
    imageUrl:image,
    linkText: "Learn More",
    linkUrl: "http://test.com",
    text: "Become planet positive, plant trees and reduce your footprint.",
    title:"Personal Subscription"
  },
]


};

