import { useTheme } from './use-theme.hook';
import type { Meta } from '@storybook/react';
import { Button, Container, Group, Table, Text } from '@mantine/core';

const meta = {
  title: 'UI/Public/Hooks/useTheme',
  component: Table,
  tags: ['!autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

export const Usage = {
  render: () => {
    const { theme, activeThemeKey, setActiveThemeKey } = useTheme();

    return (
      <Container my="xl">
        <Group mb="xl">
          <Button
            onClick={() => setActiveThemeKey('base')}
            variant={activeThemeKey === 'base' ? 'filled' : 'outline'}
          >
            Base Theme
          </Button>
          <Button
            onClick={() => setActiveThemeKey('alternative')}
            variant={activeThemeKey === 'alternative' ? 'filled' : 'outline'}
          >
            Alternative Theme
          </Button>
        </Group>

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Property</Table.Th>
              <Table.Th>Value</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Active Theme</Table.Td>
              <Table.Td>{activeThemeKey}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>

        <Text mt="xl" size="sm" c="dimmed">
          Note: Switch between base and alternative themes to see the changes.
        </Text>

        <Group mt="xl">
          <Text fw="bold" size="xl">
            Theme JSON
          </Text>
          <Text mt="sm" size="sm" c="dimmed">
            {JSON.stringify(theme)}
          </Text>
        </Group>
      </Container>
    );
  },
};
