import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './Home.page';

type Story = StoryObj<typeof HomePage>;

const meta = {
  title: 'UI/Pages/Home',
  component: HomePage,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;

export const Default: Story = {};
