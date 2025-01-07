import type { Meta, StoryObj } from '@storybook/react';
import ColorSchemeToggleButtonGroup from './ColorSchemeToggleButtonGroup';

type Story = StoryObj<typeof ColorSchemeToggleButtonGroup>;

const meta = {
  title: 'UI/Components/ButtonGroup/ColorSchemeToggleButtonGroup',
  component: ColorSchemeToggleButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorSchemeToggleButtonGroup>;

export default meta;

export const Default: Story = {};
