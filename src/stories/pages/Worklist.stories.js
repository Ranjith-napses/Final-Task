import React from 'react';
import Worklist from '../../pages/Worklist'; 
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Worklist',
  component: Worklist,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    testProp: { control: 'text' },
    onClick: { action: 'clicked' },
  }
};

const Template = (args) => <Worklist {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  testProp: 'Hello Storybook',
};
