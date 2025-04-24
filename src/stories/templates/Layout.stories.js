import React from 'react';
import Layout from '../../templates/Layout'; 
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Templates/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    )
  ],
  argTypes: {
   
    children: { control: 'text' } 
  }
};

const Template = (args) => <Layout {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Main Content Goes Here', 
};
