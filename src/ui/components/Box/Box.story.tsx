import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Box from './Box';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Box>;

const meta = {
  title: 'UI/Components/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten box component. See the <a href="https://mantine.dev/core/box" target="_blank">Mantine Box documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;

export const Default: Story = {
  render: () => <Box>This is a box component</Box>,
};
