import Button from '@/ui/components/Button/Button';
import classes from './ColorSchemeToggleButtonGroup.module.css';
import type { ColorSchemeToggleButtonGroup } from './ColorSchemeToggleButtonGroup.types';
import { Group, useMantineColorScheme } from '@mantine/core';

export default function ColorSchemeToggleButtonGroup(): ColorSchemeToggleButtonGroup {
  const { setColorScheme } = useMantineColorScheme();

  const handleClick = (scheme: 'light' | 'dark' | 'auto') => {
    setColorScheme(scheme);
  };

  return (
    <Group justify="center" mt="xl" className={classes.colorSchemeToggleButtonGroup}>
      <Button onClick={() => handleClick('light')}>Light</Button>
      <Button onClick={() => handleClick('dark')}>Dark</Button>
      <Button onClick={() => handleClick('auto')}>Auto</Button>
    </Group>
  );
}
