import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageFooter } from './PageFooter';



export default {
  title: 'Components/PageFooter',
  component: PageFooter,
  decorators: [(Story)=>(<div className="container"><Story /></div>)]
} as ComponentMeta<typeof PageFooter>;

const Template: ComponentStory<typeof PageFooter> = (args) => <PageFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  links1: [
    {
      text: "Link 1",
      url: "http://test,com"
    },
    {
      text: "Link 1",
      url: "http://test,com"
    },
    {
      text: "Link 1",
      url: "http://test,com"
    }
    , {
      text: "Link 1",
      url: "http://test,com"
    }
  ],
  links2: [
    {
      text: "Link 1",
      url: "http://test,com"
    },
    {
      text: "Link 1",
      url: "http://test,com"
    },
    {
      text: "Link 1",
      url: "http://test,com"
    }
    , {
      text: "Link 1",
      url: "http://test,com"
    }
  ],
  copyRight: "© 2021 - Environmental Handprint, All Rights Reserved",
  instagram: {
    url: "http://"
  },
  facebook: {
    url: "http://"
  },
  twitter: {
    url: "http://"
  }



};

