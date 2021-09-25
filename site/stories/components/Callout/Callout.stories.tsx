import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Callout from './Callout';
import './Callout.scss'
import img1 from './Assets/img1.png';


export default {
  title: 'components/Callout',
  component: Callout,
  decorators: [(Story) => <div className="row"><Story /></div>]
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => <Callout {...args} />;

export const Default = Template.bind({});
Default.args = {
  callout: {
    alt: "test alt",
    children: <p>
      Take action through MyForest that <strong>helps</strong> our environment. Plant trees, support charities, offset
      and more.
    </p>,
    title: "test title",
    src: img1
  },
  className: "col-12 col-lg-4 "

};

