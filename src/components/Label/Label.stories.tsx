import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'ReactComponentLibrary/Label',
  component: Label,
  argTypes: {
    label: { control: 'text' },
    htmlFor: { control: 'text' },
  },
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Label',
  htmlFor: 'exampleInput',
};
