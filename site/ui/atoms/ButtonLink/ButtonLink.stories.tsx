import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonLink, ButtonLinkType } from './ButtonLink';



export default {
  title: 'Atoms/ButtonLink',
  component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Click Me",
  url: "http://test.com",
  type:ButtonLinkType.Primary
};

