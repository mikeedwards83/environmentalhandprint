import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  BlogPage  from './BlogPage';
import './BlogPage.scss'
import videoImage from './../../components/BannerVideo/Assets/VideoThumb.jpg'


export default {
  title: 'pages/BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

const Template: ComponentStory<typeof BlogPage> = (args) => <BlogPage {...args} />;

export const Default = Template.bind({});
Default.args = {  

};

