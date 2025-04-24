import React from 'react';
import '../src/index.css'; // already included if you're using Tailwind

export const decorators = [
  (Story) => (
    <div style={{ all: 'initial' }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
