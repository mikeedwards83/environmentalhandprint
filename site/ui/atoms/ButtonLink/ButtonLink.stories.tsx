import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonLink,  } from './ButtonLink';
import './ButtonLink.scss'


export default {
  title: 'Atoms/ButtonLink',
  component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
  url: "http://test.com",
  type: "Primary"
};

