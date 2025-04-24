export default {
  title: 'Pages/BlogPage',
  component: BlogPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    onItemClick: { action: 'clicked' },
  },
};
