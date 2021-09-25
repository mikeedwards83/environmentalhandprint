import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CalloutsHorizontal  from './CalloutsHorizontal';
import './CalloutsHorizontal.scss'
import img1 from './Assets/img1.png';
import Section from '../../atoms/Section/Section';


export default {
  title: 'components/CalloutsHorizontal',
  component: CalloutsHorizontal,
} as ComponentMeta<typeof CalloutsHorizontal>;

const Template: ComponentStory<typeof CalloutsHorizontal> = (args) => <CalloutsHorizontal {...args} />;


const  callout=  {
  alt: "test alt",
  children: <p>
    Take action through MyForest that <strong>helps</strong> our environment. Plant trees, support charities, offset
    and more.
  </p>,
  title: "test title",
  src: img1
}


export const Default = Template.bind({});
Default.args = {  
  title:"Test Title",
  callouts:[callout, callout, callout]
};


export const Dark = Template.bind({});
Dark.args = {  
  title:"Test Title",
  callouts:[callout, callout, callout]
};
Dark.decorators = [(Story)=><Section color="dark"><Story /></Section>]