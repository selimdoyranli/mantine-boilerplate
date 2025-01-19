import { useTheme } from '@/ui/hooks';
import type { Meta } from '@storybook/react';
import { Container, Table } from '@mantine/core';

const meta = {
  title: 'UI/Tokens/Breakpoints',
  component: Table,
  tags: ['!autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

export const Values = {
  render: () => {
    const { theme } = useTheme();

    return (
      <Container my="xl">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Breakpoint</Table.Th>
              <Table.Th>Value</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Object.entries(theme.breakpoints || {}).map(([key, value]) => (
              <Table.Tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td>{value}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Container>
    );
  },
};
