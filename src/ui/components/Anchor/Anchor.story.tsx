import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Anchor from './Anchor';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Anchor>;

const meta = {
  title: 'UI/Components/Anchor',
  component: Anchor,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten anchor component. See the <a href="https://mantine.dev/core/anchor" target="_blank">Mantine Anchor documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Anchor>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Anchor Link',
    href: '#',
  },
};

export const Underline: Story = {
  render: () => (
    <>
      <Anchor href="#" underline="always">
        Always underlined
      </Anchor>
      <Anchor href="#" underline="hover">
        Hover underline
      </Anchor>
      <Anchor href="#" underline="never">
        Never underlined
      </Anchor>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Anchor href="#" size="xs">
        Size xs
      </Anchor>
      <Anchor href="#" size="sm">
        Size sm
      </Anchor>
      <Anchor href="#" size="md">
        Size md
      </Anchor>
      <Anchor href="#" size="lg">
        Size lg
      </Anchor>
      <Anchor href="#" size="xl">
        Size xl
      </Anchor>
    </>
  ),
};
