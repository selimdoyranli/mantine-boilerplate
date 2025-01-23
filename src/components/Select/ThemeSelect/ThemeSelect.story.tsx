import ThemeSelect from './ThemeSelect';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ThemeSelect>;

const meta = {
  title: 'Demo/Components/Select/ThemeSelect',
  component: ThemeSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSelect>;

export default meta;

export const Default: Story = {
  render: () => <ThemeSelect />,
};
