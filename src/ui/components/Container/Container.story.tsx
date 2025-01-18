import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Container from './Container';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Container>;

const meta = {
  title: 'UI/Components/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten container component. See the <a href="https://mantine.dev/core/container" target="_blank">Mantine Container documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;

export const Usage: Story = {
  render: () => (
    <>
      <Container>Container</Container>
    </>
  ),
};
