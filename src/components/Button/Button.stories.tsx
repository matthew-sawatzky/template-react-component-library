import React from 'react';
import { Meta, StoryFn } from '@storybook/react/types-6-0'; // Ensure this path matches your Storybook version

import Button, { ButtonProps } from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
