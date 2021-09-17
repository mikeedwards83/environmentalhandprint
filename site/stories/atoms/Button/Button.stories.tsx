import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonType } from './Button';
import './Button.scss'


export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Test",
  type: ButtonType.Primary
};

export const Link = Template.bind({});
Link.args = {
  text: "Test",
  type: ButtonType.Link
};

