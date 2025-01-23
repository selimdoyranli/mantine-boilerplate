import WelcomeBanner from './WelcomeBanner';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof WelcomeBanner>;

const meta = {
  title: 'Demo/Components/Banner/WelcomeBanner',
  component: WelcomeBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof WelcomeBanner>;

export default meta;

export const Default: Story = {};
