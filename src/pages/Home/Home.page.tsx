import WelcomeBanner from '@/components/Banner/WelcomeBanner/WelcomeBanner';
import ColorSchemeToggleButtonGroup from '@/components/ButtonGroup/ColorSchemeToggleButtonGroup/ColorSchemeToggleButtonGroup';
import ThemeSelect from '@/components/Select/ThemeSelect/ThemeSelect';
import Box from '@/ui/components/Box/Box';
import Button from '@/ui/components/Button/Button';
import Text from '@/ui/components/Text/Text';
import { Link } from 'react-router-dom';

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
      <div>
        <Button component={Link} to="/">
          Button
        </Button>
        <Button component="a" href="https://google.com" target="_blank">
          Button
        </Button>
        <Button component="button" type="submit">
          Button
        </Button>
      </div>
    </>
  );
}
