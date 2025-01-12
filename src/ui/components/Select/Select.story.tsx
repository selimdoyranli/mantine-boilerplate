import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Select from './Select';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Select>;

const meta = {
  title: 'UI/Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overridden select component. See the <a href="https://mantine.dev/core/select" target="_blank">Mantine Select documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

export const Usage: Story = {
  render: () => (
    <Select
      label="Your favorite framework"
      placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
      ]}
    />
  ),
};

export const Searchable: Story = {
  render: () => (
    <Select
      label="Your favorite framework"
      placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
      ]}
      searchable
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <Select
      label="Your favorite framework"
      placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
      ]}
      error="Please select a framework"
    />
  ),
};
