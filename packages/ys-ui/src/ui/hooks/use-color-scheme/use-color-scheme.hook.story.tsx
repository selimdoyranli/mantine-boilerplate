import { useColorScheme } from './use-color-scheme.hook';
import type { Meta } from '@storybook/react';
import { Button, Container, Group, Table, Text } from '@mantine/core';

const meta = {
  title: 'UI/Public/Hooks/useColorScheme',
  component: Table,
  tags: ['!autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

export const Usage = {
  render: () => {
    const { colorScheme, setColorScheme } = useColorScheme();

    return (
      <Container my="xl">
        <Group mb="xl">
          <Button
            onClick={() => setColorScheme('light')}
            variant={colorScheme === 'light' ? 'filled' : 'outline'}
          >
            Light Mode
          </Button>
          <Button
            onClick={() => setColorScheme('dark')}
            variant={colorScheme === 'dark' ? 'filled' : 'outline'}
          >
            Dark Mode
          </Button>
          <Button
            onClick={() => setColorScheme('auto')}
            variant={colorScheme === 'auto' ? 'filled' : 'outline'}
          >
            Auto Mode
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
              <Table.Td>Current Color Scheme</Table.Td>
              <Table.Td>{colorScheme}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>

        <Text mt="xl" size="sm" c="dimmed">
          Note: The 'auto' mode will follow your system preferences.
        </Text>
      </Container>
    );
  },
};
