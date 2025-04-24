import React from 'react';
import Navbar from '../../organisms/Navbar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    links: {
      control: 'object',
      description: 'Array of nav links',
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  links: [
    { path: '/blog', label: 'Blog' },
    { path: '/Work', label: 'Works' },
    { path: '/Workdetails', label: 'Workdetails' },
  ],
};
