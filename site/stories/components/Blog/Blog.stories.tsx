import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Blog } from './Blog';
import './Blog.scss'


export default {
  title: 'Components/Blog',
  component: Blog,
} as ComponentMeta<typeof Blog>;

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />;

export const Default = Template.bind({});
Default.args = {
  blog: {
    title: "title1",
    author: "author",
    excerpt: "A afaef afea aefaef aefaef aefaf afaefae faefaef",
    name: "test",
    image: {
      src: "https://images.unsplash.com/photo-1615420510251-083da7739330",
      alt: "test"
    },
    date: new Date().toJSON()
  },
  content:"hello world"
}


