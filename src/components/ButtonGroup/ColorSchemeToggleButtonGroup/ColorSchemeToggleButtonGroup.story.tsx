import ColorSchemeToggleButtonGroup from './ColorSchemeToggleButtonGroup';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ColorSchemeToggleButtonGroup>;

const meta = {
  title: 'Demo/Components/ButtonGroup/ColorSchemeToggleButtonGroup',
  component: ColorSchemeToggleButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorSchemeToggleButtonGroup>;

export default meta;

export const Default: Story = {};
