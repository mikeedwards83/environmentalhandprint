import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogList } from './BlogList';
import './BlogList.scss'


export default {
  title: 'Components/BlogList',
  component: BlogList,
} as ComponentMeta<typeof BlogList>;

const Template: ComponentStory<typeof BlogList> = (args) => <BlogList {...args} />;

export const Default = Template.bind({});
Default.args = {

  posts: [{
    title: "title1",
    author: "author",
    excerpt: "A afaef afea aefaef aefaef aefaf afaefae faefaef",
    name: "test",
    image: {
      src: "https://images.unsplash.com/photo-1615420510251-083da7739330",
      alt: "test"
    },
    date: new Date().toJSON(),
    url:"/here"
  },
  {
    title: "title1",
    author: "author",
    excerpt: "A afaef afea aefaef aefaef aefaf afaefae faefaef",
    name: "test",
    image: {
      src: "https://images.unsplash.com/photo-1615420510251-083da7739330",
      alt: "test"
    },
    date: new Date().toJSON(),
    url:"/here"
  },
  {
    title: "title1",
    author: "author",
    excerpt: "A afaef afea aefaef aefaef aefaf afaefae faefaef",
    name: "test",
    image: {
      src: "https://images.unsplash.com/photo-1615420510251-083da7739330",
      alt: "test"
    },
    date: new Date().toJSON(),
    url:"/here"
  },
  {
    title: "title1",
    author: "author",
    excerpt: "A afaef afea aefaef aefaef aefaf afaefae faefaef",
    name: "test",
    image: {
      src: "https://images.unsplash.com/photo-1615420510251-083da7739330",
      alt: "test"
    },
    date: new Date().toJSON(),
    url:"/here"
  },
  {
    title: "title1",
    author: "author",
    excerpt: "A afaef afea aefaef aefaef aefaf afaefae faefaef",
    name: "test",
    image: {
      src: "https://media.istockphoto.com/vectors/hand-print-vector-id165761878?k=20&m=165761878&s=612x612&w=0&h=vWMybbPjcI32m3w2Qaiyx1NnMk1COtL1FpaX5_3SJxM=",
      alt: "test"
    },
    date: new Date().toJSON(),
    url:"/here"
  },
  ],
  pageCurrent: 2,
  pagesTotal: 5,
  rootFolder:"blogs"

};

