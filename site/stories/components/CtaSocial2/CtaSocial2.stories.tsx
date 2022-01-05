import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CtaSocial2  from './CtaSocial2';
import './CtaSocial2.scss'


export default {
  title: 'components/CtaSocial2',
  component: CtaSocial2,
} as ComponentMeta<typeof CtaSocial2>;

const Template: ComponentStory<typeof CtaSocial2> = (args) => <CtaSocial2 {...args} />;

export const Default = Template.bind({});
Default.args = {  
  children: <>
    <h3>Follow Us!</h3>
    <p className="lead">
      Join the 🖐 Handprint movement and follow us on social media.
    </p>
    
  </>,
  imageUrl:"/images/social-cta-2_1.svg",
  imageText:"Mobile phone and a man holding a megaphone"
};

