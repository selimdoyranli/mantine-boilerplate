import { useTheme } from '@/ui/components/Provider/ThemeProvider/ThemeProvider';
import type { Meta } from '@storybook/react';
import { Box, Stack, Text } from '@mantine/core';

const meta: Meta = {
  title: 'UI/Tokens/Colors',
  tags: ['!autodocs'],
};

export default meta;

function ColorsStory() {
  const { theme } = useTheme();

  if (!theme?.colors) {
    return null;
  }

  const sortedColorNames = Object.keys(theme.colors).sort();

  return (
    <Stack gap="xl" styles={{ root: { margin: 'var(--mantine-spacing-xl)' } }}>
      {sortedColorNames.map((colorName) => {
        const shades = theme.colors?.[colorName];
        if (!Array.isArray(shades)) {
          return null;
        }

        return (
          <div key={colorName}>
            <Text size="xl" fw={700} mb="md" tt="capitalize">
              {colorName}
            </Text>
            <div style={{ display: 'flex', gap: 'var(--mantine-spacing-md)', flexWrap: 'wrap' }}>
              {shades.map((color, index) => (
                <div
                  key={`${colorName}-${index}`}
                  style={{ marginBottom: 'var(--mantine-spacing-md)' }}
                >
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
}

export const Values = {
  render: () => {
    return <ColorsStory />;
  },
};
