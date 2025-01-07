import { Button, Group, useMantineColorScheme } from '@mantine/core';
import type { ColorSchemeToggleButtonGroup } from './ColorSchemeToggleButtonGroup.types';
import classes from './ColorSchemeToggleButtonGroup.module.css';

export default function ColorSchemeToggleButtonGroup(): ColorSchemeToggleButtonGroup {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl" className={classes.colorSchemeToggleButtonGroup}>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
