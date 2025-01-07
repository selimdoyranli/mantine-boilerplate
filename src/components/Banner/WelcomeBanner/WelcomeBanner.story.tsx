import type { Meta, StoryObj } from '@storybook/react';
import WelcomeBanner from './WelcomeBanner';

type Story = StoryObj<typeof WelcomeBanner>;

const meta = {
  title: 'UI/Components/Banner/WelcomeBanner',
  component: WelcomeBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof WelcomeBanner>;

export default meta;

export const Default: Story = {};
