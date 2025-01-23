import HomePage from './Home.page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Demo/Pages/Home',
  component: HomePage,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
