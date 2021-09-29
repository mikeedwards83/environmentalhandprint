import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ShareThis  from './ShareThis';
import './ShareThis.scss'


export default {
  title: 'components/ShareThis',
  component: ShareThis,
} as ComponentMeta<typeof ShareThis>;

const Template: ComponentStory<typeof ShareThis> = (args) => <ShareThis {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

