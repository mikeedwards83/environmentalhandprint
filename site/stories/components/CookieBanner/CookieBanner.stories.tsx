import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CookieBanner, { cookieName } from './CookieBanner';
import './CookieBanner.scss'
import Cookies from 'js-cookie';
import { Button } from '../../atoms/Button/Button';


export default {
  title: 'components/CookieBanner',
  component: CookieBanner,
} as ComponentMeta<typeof CookieBanner>;

const Template: ComponentStory<typeof CookieBanner> = (args) => <CookieBanner {...args} />;


const handleClear = () => {
  Cookies.set(
    cookieName,
    "true",
    {
      expires: new Date('2010-05-30T12:30:00.00-05:00'),
      path: "/"
    }
  )

  window.location.reload();
}

export const Default = Template.bind({});


Default.args = {
  children: <>
    <Button onClick={handleClear}>Clear Cookie</Button>
  </>
};

