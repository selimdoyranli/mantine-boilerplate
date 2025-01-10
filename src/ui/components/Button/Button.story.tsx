import type { Meta, StoryObj } from '@storybook/react';
import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Button from './Button';

type Story = StoryObj<typeof Button>;

const meta = {
  title: 'UI/Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten button component. See the <a href="https://mantine.dev/core/button" target="_blank">Mantine Button documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <>
      <Button>Button</Button>
      <Button variant="filled">Button filled</Button>
      <Button variant="outline">Button outline</Button>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size="xs">Button xs</Button>
      <Button size="sm">Button sm</Button>
      <Button size="md">Button md</Button>
      <Button size="lg">Button lg</Button>
      <Button size="xl">Button xl</Button>
    </>
  ),
};
