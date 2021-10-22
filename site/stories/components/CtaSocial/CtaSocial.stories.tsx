import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CtaSocial from './CtaSocial';
import './CtaSocial.scss'


export default {
  title: 'components/CtaSocial',
  component: CtaSocial,
} as ComponentMeta<typeof CtaSocial>;

const Template: ComponentStory<typeof CtaSocial> = (args) => <CtaSocial {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>
    <h2>Make A Difference Today</h2>
    <p className="lead">
      Poop on couch cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog sleep over your phone and
       make cute snoring noises poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, 
       eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree yet nyaa nyaa, or touch water with paw t
       hen recoil in horror.
    </p>
  </>,
  imageUrl:"/images/SocialMediaIcons.png"
};

