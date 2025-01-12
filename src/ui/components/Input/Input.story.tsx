import Input from './Input';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Input>;

const meta = {
  title: 'UI/Components/Input',
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
