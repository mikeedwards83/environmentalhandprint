import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePage } from './HomePage';



export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

