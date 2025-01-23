import { useColorScheme } from '@/ui/hooks';
import classes from './ColorSchemeToggleButtonGroup.module.css';
import type { ColorSchemeToggleButtonGroup } from './ColorSchemeToggleButtonGroup.types';
import { Button } from '@mantine/core';

export default function ColorSchemeToggleButtonGroup(): ColorSchemeToggleButtonGroup {
  const { setColorScheme, colorScheme } = useColorScheme();

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
