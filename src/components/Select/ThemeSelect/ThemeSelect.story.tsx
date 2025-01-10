import type { Meta, StoryObj } from '@storybook/react';
import ThemeSelect from './ThemeSelect';

type Story = StoryObj<typeof ThemeSelect>;

const meta = {
  title: 'Project/Components/Select/ThemeSelect',
  component: ThemeSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSelect>;

export default meta;

export const Default: Story = {
  render: () => <ThemeSelect />,
};
