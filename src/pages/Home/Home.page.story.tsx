import HomePage from './Home.page';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof HomePage>;

const meta = {
  title: 'Project/Pages/Home',
  component: HomePage,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;

export const Default: Story = {};
