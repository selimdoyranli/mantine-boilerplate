import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Accordion from './Accordion';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Accordion>;

const meta = {
  title: 'UI/Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten accordion component. See the <a href="https://mantine.dev/core/accordion" target="_blank">Mantine Accordion documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item value="item1">
        <Accordion.Control>First item</Accordion.Control>
        <Accordion.Panel>First item content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Control>Second item</Accordion.Control>
        <Accordion.Panel>Second item content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple>
      <Accordion.Item value="multi1">
        <Accordion.Control>Multiple item 1</Accordion.Control>
        <Accordion.Panel>Content 1</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="multi2">
        <Accordion.Control>Multiple item 2</Accordion.Control>
        <Accordion.Panel>Content 2</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="multi3">
        <Accordion.Control>Multiple item 3</Accordion.Control>
        <Accordion.Panel>Content 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-2">
      <Accordion variant="contained">
        <Accordion.Item value="contained">
          <Accordion.Control>Contained variant</Accordion.Control>
          <Accordion.Panel>Contained content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion variant="filled">
        <Accordion.Item value="filled">
          <Accordion.Control>Filled variant</Accordion.Control>
          <Accordion.Panel>Filled content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion variant="separated">
        <Accordion.Item value="separated">
          <Accordion.Control>Separated variant</Accordion.Control>
          <Accordion.Panel>Separated content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const ChevronPositions: Story = {
  render: () => (
    <div className="space-y-2">
      <Accordion chevronPosition="left">
        <Accordion.Item value="chevron-left">
          <Accordion.Control>Chevron on left</Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion chevronPosition="right">
        <Accordion.Item value="chevron-right">
          <Accordion.Control>Chevron on right</Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};
