import HomePage from './Home.page';
import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider } from '@mantine/core';

type Story = StoryObj<typeof HomePage>;

const meta = {
  title: 'App/Pages/Home',
  component: HomePage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof HomePage>;

export default meta;

export const Default: Story = {};
