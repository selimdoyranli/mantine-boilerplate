import type { Meta, StoryObj } from '@storybook/react';
import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Button from '@/ui/components/Button/Button';
import UIProvider from './UIProvider';

type Story = StoryObj<typeof UIProvider>;

const meta = {
  title: 'UI/Components/UIProvider',
  component: UIProvider,
  parameters: {
    docs: {
      description: {
        component: 'UI provider component.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UIProvider>;

export default meta;

export const Default: Story = {
  render: () => (
    <>
      <UIProvider>
        <span>UI Provider content</span>
        <br />
        <br />
        <Button variant="filled">Button</Button>
      </UIProvider>
    </>
  ),
};
