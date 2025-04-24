import React from 'react';
import Text from '../../atoms/Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    type: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Text {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  type: 'title',
  children: 'Hello Storybook!',
};