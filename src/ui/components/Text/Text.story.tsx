import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Text from './Text';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Text>;

const meta = {
  title: 'UI/Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten text component. See the <a href="https://mantine.dev/core/text" target="_blank">Mantine Text documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Default text',
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
    </>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <>
      <Text fw={400}>Regular</Text>
      <Text fw={500}>Medium</Text>
      <Text fw={700}>Bold</Text>
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <Text color="blue">Blue text</Text>
      <Text color="red">Red text</Text>
      <Text color="dimmed">Dimmed text</Text>
    </>
  ),
};

export const Gradient: Story = {
  render: () => (
    <Text variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }} size="xl">
      Gradient text
    </Text>
  ),
};
