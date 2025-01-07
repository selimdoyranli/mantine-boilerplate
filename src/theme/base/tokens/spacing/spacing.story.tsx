import type { Meta, StoryObj } from '@storybook/react';

import { Container, Table, Code, useMantineTheme, MantineProvider } from '@mantine/core';

const meta = {
  title: 'Mantine Theme/Tokens/Spacing',
  component: Table,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Values: Story = {
  render: () => {
    const theme = useMantineTheme();

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
            {Object.entries(theme.spacing).map(([key, value]) => (
              <Table.Tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td><Code>{value}</Code></Table.Td>
                <Table.Td>
                  <div style={{ width: value, height: '20px', background: 'var(--mantine-color-blue-5)' }} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Container>
    );
  },
};
