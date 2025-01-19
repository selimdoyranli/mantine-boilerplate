import { useTheme } from '@/ui/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Code, Container, Table } from '@mantine/core';

const meta = {
  title: 'UI/Tokens/Radius',
  component: Box,
  tags: ['!autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Values: Story = {
  render: () => {
    const { theme } = useTheme();

    return (
      <Container my="xl">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Value</Table.Th>
              <Table.Th>Preview</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Object.entries(theme.radius || {}).map(([key, value]) => (
              <Table.Tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td>
                  <Code>{value}</Code>
                </Table.Td>
                <Table.Td>
                  <Box
                    w={60}
                    h={60}
                    style={{
                      borderLeft: '2px dashed var(--mantine-color-blue-5)',
                      borderTop: '2px dashed var(--mantine-color-blue-5)',
                      backgroundColor:
                        'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-9))',
                      borderRadius: value,
                    }}
                  />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Container>
    );
  },
};
