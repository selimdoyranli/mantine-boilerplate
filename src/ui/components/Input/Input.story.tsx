import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@mantine/core';

type Story = StoryObj<typeof Input>;

const meta = {
  title: 'Mantine Theme/Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Input component is the base for all Mantine inputs. See the <a href="https://mantine.dev/core/input" target="_blank">Mantine Input documentation</a> for more details.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name',
  },
};
