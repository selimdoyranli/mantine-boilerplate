import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Title from './Title';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Title>;

const meta = {
  title: 'UI/Components/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten title component. See the <a href="https://mantine.dev/core/title" target="_blank">Mantine Title documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Title Component',
  },
};

export const Orders: Story = {
  render: () => (
    <>
      <Title order={1}>H1 Title</Title>
      <Title order={2}>H2 Title</Title>
      <Title order={3}>H3 Title</Title>
      <Title order={4}>H4 Title</Title>
      <Title order={5}>H5 Title</Title>
      <Title order={6}>H6 Title</Title>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Title size="h1">Title h1</Title>
      <Title size="h2">Title h2</Title>
      <Title size="h3">Title h3</Title>
      <Title size="h4">Title h4</Title>
      <Title size="h5">Title h5</Title>
      <Title size="h6">Title h6</Title>
      <Title size="1rem">Title 1rem</Title>
      <Title size="0.8rem">Title 0.8rem</Title>
    </>
  ),
};

export const TextWrap: Story = {
  render: () => (
    <>
      <Title textWrap="wrap">
        This is a very long title that will wrap to the next line when it reaches the end of its
        container
      </Title>
      <Title textWrap="balance">
        This is a balanced title that will try to create visually pleasing line breaks
      </Title>
      <Title textWrap="nowrap">This title will not wrap to the next line</Title>
    </>
  ),
};
