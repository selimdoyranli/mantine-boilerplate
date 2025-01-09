import type { Meta, StoryObj } from '@storybook/react';
import { Box, MantineProvider, Stack, Text, useMantineTheme } from '@mantine/core';

const meta: Meta = {
  title: 'Mantine Theme/Tokens/Colors',
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default meta;

export const Values: StoryObj = {
  render: () => {
    const theme = useMantineTheme();

    // Sort colors by name alphabetically on palette
    const sortedColorNames = Object.keys(theme.colors).sort();

    return (
      <Stack gap="xl" styles={{ root: { margin: 'var(--mantine-spacing-xl)' } }}>
        {sortedColorNames.map((colorName) => {
          const shades = theme.colors[colorName];
          return (
            <div key={colorName}>
              <Text size="xl" fw={700} mb="md" tt="capitalize">
                {colorName}
              </Text>
              <div style={{ display: 'flex', gap: 'var(--mantine-spacing-md)', flexWrap: 'wrap' }}>
                {shades.map((color, index) => (
                  <div key={index} style={{ marginBottom: 'var(--mantine-spacing-md)' }}>
                    <Box
                      w={100}
                      h={100}
                      style={{
                        backgroundColor: color,
                        borderRadius: '8px',
                        marginBottom: 'var(--mantine-spacing-xs)',
                      }}
                    />
                    <Text size="sm" ta="center">
                      {color}
                    </Text>
                    <Text size="xs" c="dimmed" ta="center">
                      {colorName}.{index}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Stack>
    );
  },
};
