import React from 'react';
import BlogCard from '../../organisms/BlogCard';

export default {
  title: 'Organisms/BlogCard',
  component: BlogCard,
  argTypes: {
    title: { control: 'text' },
    date: { control: 'text' },
    category: { control: 'text' },
    onClick: { action: 'card clicked' },
  },
};

const Template = (args) => <BlogCard {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  title: 'UI Interactions of the Week',
  date: '12 Feb 2019',
  category: 'Express, Handlebars',
};
