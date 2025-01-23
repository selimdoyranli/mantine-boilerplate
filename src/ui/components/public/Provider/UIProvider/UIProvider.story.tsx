import { Button } from '@/ui/components/private';
import UIProvider from './UIProvider';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof UIProvider>;

const meta = {
  title: 'UI/Public/Components/Provider/UIProvider',
  component: UIProvider,
  parameters: {
    docs: {
      description: {
        component: 'UI provider component.',
      },
      source: {
        language: 'tsx',
        transform: () => `<UIProvider> {children} </UIProvider>
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UIProvider>;

export default meta;

export const Default: Story = {
  render: () => {
    return (
      <>
        <span>UI Provider content</span>
        <br />
        <br />
        <Button>Button</Button>
      </>
    );
  },
};
