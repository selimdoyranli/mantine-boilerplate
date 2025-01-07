import type { Meta, StoryObj } from '@storybook/react';

import { Container, Box, Table, Code, useMantineTheme, MantineProvider } from '@mantine/core';

const meta = {
  title: 'Mantine Theme/Tokens/Shadows',
  component: Box,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof Box>;

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
            {Object.entries(theme.shadows).map(([key, value]) => (
              <Table.Tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td><Code>{value}</Code></Table.Td>
                <Table.Td>
                  <Box
                    w={60}
                    h={60}
                    style={{
                      backgroundColor: 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-9))',
                      boxShadow: value
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
