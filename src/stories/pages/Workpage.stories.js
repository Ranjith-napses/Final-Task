import React from 'react';
import Workpage from '../../pages/Workpage'; 
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Workpage',
  component: Workpage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/workpage']}>
        <Story />
      </MemoryRouter>
    )
  ],
  argTypes: {
    ExamplePropProp: { control: 'text' }
  }
};

const Template = (args) => <Workpage {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  ExampleProp: 'Testing control',
};
