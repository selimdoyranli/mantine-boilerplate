import WelcomeBanner from '@/components/Banner/WelcomeBanner/WelcomeBanner';
import ColorSchemeToggleButtonGroup from '@/components/ButtonGroup/ColorSchemeToggleButtonGroup/ColorSchemeToggleButtonGroup';
import ThemeSelect from '@/components/Select/ThemeSelect/ThemeSelect';
import { Box, Text } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <WelcomeBanner />
      <ColorSchemeToggleButtonGroup />
      <Box p="xl" w="300px" mx="auto">
        <Text size="sm" py="sm">
          Theme Select
        </Text>
        <ThemeSelect />
      </Box>
      <br />
    </>
  );
}
