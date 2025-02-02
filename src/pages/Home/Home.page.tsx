import WelcomeBanner from '@/components/Banner/WelcomeBanner/WelcomeBanner';
import ColorSchemeToggleButtonGroup from '@/components/ButtonGroup/ColorSchemeToggleButtonGroup/ColorSchemeToggleButtonGroup';
import ThemeSelect from '@/components/Select/ThemeSelect/ThemeSelect';
import Box from '@/ui/components/Box/Box';
import Text from '@/ui/components/Text/Text';

export default function HomePage() {
  return (
    <>
      <WelcomeBanner />
      <ColorSchemeToggleButtonGroup />
      <Box p="xl" w="420px" mx="auto">
        <Text size="sm" py="sm">
          Theme Select
        </Text>
        <ThemeSelect />
      </Box>
      <br />
    </>
  );
}
