import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './Link';



export default {
  title: 'Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  link: {
    text: "Click Me",
    url: "http://test.com",
  },
};

