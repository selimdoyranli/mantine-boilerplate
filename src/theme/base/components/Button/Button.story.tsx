import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@mantine/core';

import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer'

type Story = StoryObj<typeof Button>;

const meta = {
  title: 'Mantine Theme/Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Mantine overritten button component. See the <a href="https://mantine.dev/core/button" target="_blank">Mantine Button documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code)
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
      <Button variant="light">Button light</Button>
      <Button variant="subtle">Button subtle</Button>
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

      <Button size="compact-xs">Button compact xs</Button>
      <Button size="compact-sm">Button compact sm</Button>
      <Button size="compact-md">Button compact md</Button>
      <Button size="compact-lg">Button compact lg</Button>
      <Button size="compact-xl">Button compact xl</Button>
    </>
  ),
};





