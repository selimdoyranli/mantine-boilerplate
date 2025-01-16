import { removeMantineCoreHtmlTags } from '@/docs/utils/html-transformer';
import Text from '@/ui/components/Text/Text';
import Tabs from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Tabs>;

const meta = {
  title: 'UI/Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Mantine overritten tabs component. See the <a href="https://mantine.dev/core/tabs" target="_blank">Mantine Tabs documentation</a> for more details.',
      },
      source: {
        language: 'tsx',
        transform: (code: string) => removeMantineCoreHtmlTags(code),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<Text size="sm">🖼️</Text>}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<Text size="sm">💬</Text>}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<Text size="sm">⚙️</Text>}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery panel content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages panel content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings panel content</Tabs.Panel>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Tabs variant="default" defaultValue="default">
        <Tabs.List>
          <Tabs.Tab value="default">Default variant</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="default">Default variant content</Tabs.Panel>
      </Tabs>

      <Tabs variant="outline" defaultValue="outline">
        <Tabs.List>
          <Tabs.Tab value="outline">Outline variant</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="outline">Outline variant content</Tabs.Panel>
      </Tabs>

      <Tabs variant="pills" defaultValue="pills">
        <Tabs.List>
          <Tabs.Tab value="pills">Pills variant</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="pills">Pills variant content</Tabs.Panel>
      </Tabs>
    </div>
  ),
};

export const Orientation: Story = {
  render: () => (
    <Tabs orientation="vertical" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery panel content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages panel content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings panel content</Tabs.Panel>
    </Tabs>
  ),
};
