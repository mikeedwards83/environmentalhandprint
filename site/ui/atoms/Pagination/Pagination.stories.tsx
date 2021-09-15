import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './Pagination';
import './Pagination.scss'


export default {
  title: 'Atoms/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {  
  pageCurrent:2,
  pagesTotal: 10,
  url:"/test"

};

