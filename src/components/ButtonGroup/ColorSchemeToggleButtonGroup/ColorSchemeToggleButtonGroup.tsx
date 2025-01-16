import Button from '@/ui/components/Button/Button';
import { useColorSchemeContext } from '@/ui/contexts/ColorSchemeContext';
import classes from './ColorSchemeToggleButtonGroup.module.css';
import type { ColorSchemeToggleButtonGroup } from './ColorSchemeToggleButtonGroup.types';

export default function ColorSchemeToggleButtonGroup(): ColorSchemeToggleButtonGroup {
  const { setColorScheme, colorScheme } = useColorSchemeContext();

  return (
    <div className={classes.colorSchemeToggleButtonGroup}>
      <Button
        variant={colorScheme === 'light' ? 'filled' : 'default'}
        onClick={() => setColorScheme('light')}
      >
        Light
      </Button>
      <Button
        variant={colorScheme === 'dark' ? 'filled' : 'default'}
        onClick={() => setColorScheme('dark')}
      >
        Dark
      </Button>
      <Button
        variant={colorScheme === 'auto' ? 'filled' : 'default'}
        onClick={() => setColorScheme('auto')}
      >
        Auto
      </Button>
    </div>
  );
}
