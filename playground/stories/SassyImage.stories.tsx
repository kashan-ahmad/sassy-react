import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SassyImage } from '../../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components / SassyImage',
  component: SassyImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
} as ComponentMeta<typeof SassyImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SassyImage> = (args) => (
  <SassyImage {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  alt: '',
  width: '100px',
  src: '/sassy-react-logo.png',
  fallbackImgSrc: '/fallback.png',
};

export const InvalidSource = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InvalidSource.args = {
  alt: '',
  width: '100px',
  fallbackImgSrc: '/fallback.png',
};
