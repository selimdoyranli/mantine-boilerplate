import { removeMantineCoreHtmlTags } from '@/ui/docs/utils/html-transformer';
import FeedCard from './FeedCard';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof FeedCard>;

const meta = {
  title: 'UI/Public/Components/Card/FeedCard',
  component: FeedCard,
  parameters: {
    docs: {
      description: {
        component: 'FeedCard component.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeedCard>;

export default meta;

export const Default: Story = {
  args: {
    title: 'FeedCard Title',
    description: 'FeedCard Description',
  },
  render: (args) => {
    return (
      <>
        <FeedCard {...args} />
      </>
    );
  },
};
