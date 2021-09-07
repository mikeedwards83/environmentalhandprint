import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader } from './PageHeader';



export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo:"https://media.istockphoto.com/vectors/hand-print-vector-id165761878?k=20&m=165761878&s=612x612&w=0&h=vWMybbPjcI32m3w2Qaiyx1NnMk1COtL1FpaX5_3SJxM=",
  title:"Environmental Handprint"
};

