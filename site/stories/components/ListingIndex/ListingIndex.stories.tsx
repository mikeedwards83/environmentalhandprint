import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ListingIndex  from './ListingIndex';
import './ListingIndex.scss'


export default {
  title: 'components/ListingIndex',
  component: ListingIndex,
} as ComponentMeta<typeof ListingIndex>;

const Template: ComponentStory<typeof ListingIndex> = (args) => <ListingIndex {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

