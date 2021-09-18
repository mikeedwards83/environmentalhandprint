import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Guide } from './Guide';
import './Guide.scss'


export default {
  title: 'Components/Guide',
  component: Guide,
} as ComponentMeta<typeof Guide>;

const Template: ComponentStory<typeof Guide> = (args) => <Guide {...args} />;

export const Default = Template.bind({});
Default.args = {
  Guide: {
    title: "title1",
    author: "author",
    excerpt: "A afaef afea aefaef aefaef aefaf afaefae faefaef",
    name: "test",
    image: {
      src: "https://images.unsplash.com/photo-1615420510251-083da7739330",
      alt: "test"
    },
    date: new Date()
  },
  content:"hello world"
}


