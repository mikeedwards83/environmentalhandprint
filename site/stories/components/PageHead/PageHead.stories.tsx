import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHead } from './PageHead';
import './PageHead.scss'


export default {
  title: 'components/PageHead',
  component: PageHead,
} as ComponentMeta<typeof PageHead>;

const Template: ComponentStory<typeof PageHead> = (args) => <PageHead {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

