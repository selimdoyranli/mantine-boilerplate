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

export const Variants: Story = {
  render: () => (
    <>
      <Accordion variant="default">
        <Accordion.Item value="default">
          <Accordion.Control>Default variant</Accordion.Control>
          <Accordion.Panel>Default content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>

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
    </>
  ),
};

export const ChevronPosition: Story = {
  render: () => (
    <>
      <Accordion chevronPosition="right">
        <Accordion.Item value="right">
          <Accordion.Control>Chevron right</Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion chevronPosition="left">
        <Accordion.Item value="left">
          <Accordion.Control>Chevron left</Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple>
      <Accordion.Item value="item1">
        <Accordion.Control>First item</Accordion.Control>
        <Accordion.Panel>First content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Control>Second item</Accordion.Control>
        <Accordion.Panel>Second content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Control>Third item</Accordion.Control>
        <Accordion.Panel>Third content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};
