import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Code,
  Container,
  MantineProvider,
  Table,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';

const meta = {
  title: 'Mantine Theme/Tokens/Typography',
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
        <Title order={2} mb="xl">
          Font Families
        </Title>
        <Table mb={40}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Value</Table.Th>
              <Table.Th>Preview</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Default Font</Table.Td>
              <Table.Td>
                <Code>{theme.fontFamily}</Code>
              </Table.Td>
              <Table.Td>
                <Text style={{ fontFamily: theme.fontFamily }}>
                  The quick brown fox jumps over the lazy dog
                </Text>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Monospace Font</Table.Td>
              <Table.Td>
                <Code>{theme.fontFamilyMonospace}</Code>
              </Table.Td>
              <Table.Td>
                <Text style={{ fontFamily: theme.fontFamilyMonospace }}>
                  The quick brown fox jumps over the lazy dog
                </Text>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Headings Font</Table.Td>
              <Table.Td>
                <Code>{theme.headings.fontFamily}</Code>
              </Table.Td>
              <Table.Td>
                <Title order={6} style={{ fontFamily: theme.headings.fontFamily }}>
                  The quick brown fox jumps over the lazy dog
                </Title>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>

        <Title order={2} mb="xl">
          Headings
        </Title>
        <Table mb={40}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Level</Table.Th>
              <Table.Th>Properties</Table.Th>
              <Table.Th>Preview</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Object.entries(theme.headings.sizes).map(([key, value]) => (
              <Table.Tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td>
                  <Code>fontSize: {value.fontSize}</Code>
                  <br />
                  <Code>lineHeight: {value.lineHeight}</Code>
                  <br />
                  <Code>fontWeight: {value.fontWeight}</Code>
                </Table.Td>
                <Table.Td>
                  <Title style={value}>Heading Example</Title>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        <Title order={2} mb="xl">
          Font Sizes
        </Title>
        <Table mb={40}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Value</Table.Th>
              <Table.Th>Preview</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Object.entries(theme.fontSizes).map(([key, value]) => (
              <Table.Tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td>
                  <Code>{value}</Code>
                </Table.Td>
                <Table.Td>
                  <Text size={key as any}>The quick brown fox jumps over the lazy dog</Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        <Title order={2} mb="xl">
          Line Heights
        </Title>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Value</Table.Th>
              <Table.Th>Preview</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Object.entries(theme.lineHeights).map(([key, value]) => (
              <Table.Tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td>
                  <Code>{value}</Code>
                </Table.Td>
                <Table.Td>
                  <Text lh={key as any}>
                    The quick brown fox jumps over the lazy dog. This is a second line to
                    demonstrate line height. And here is a third line for better visualization.
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Container>
    );
  },
};
