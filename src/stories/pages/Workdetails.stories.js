import React from 'react';
import Workdetails from '../../pages/Workdetails';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Workdetails',
  component: Workdetails,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Workdetails {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  title: 'Designing Dashboards',
  year: '2020',
  type: 'UI/UX',
};
