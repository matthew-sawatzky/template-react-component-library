import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text, { TextProps } from './Text'; // Ensure correct import

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default text component.',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'This text is customized with different styling.',
  className: 'custom-class',
};
