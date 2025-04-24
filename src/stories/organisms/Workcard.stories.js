import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import WorkCard from '../../organisms/WorkCard';



export default {
  title: 'Organisms/WorkCard',
  component: WorkCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    year: { control: 'text' },
    type: { control: 'text' },
    description: { control: 'text' },
    img: { control: 'text' },
    onClick: { action: 'card-clicked' }, 
  },
};

const Template = (args) => <WorkCard {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  title: 'Project Alpha',
  year: '2022',
  type: 'Web App',
  description: 'A dashboard for analytics and user control.',
  img: '/img/dashboard.png',
};
