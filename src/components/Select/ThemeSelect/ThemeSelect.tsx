import useTheme from '@/composables/use-theme/use-theme.composable';
import { ThemeKeyEnum } from '@/enums';
import classes from './ThemeSelect.module.css';
import type { ThemeOptions } from './ThemeSelect.types';
import { Select } from '@mantine/core';

interface ThemeSelectProps {
  onChange?: (value: string) => void;
}

export default function ThemeSelect({ onChange }: ThemeSelectProps) {
  const { setSelectedTheme } = useTheme();

  const themeOptions: ThemeOptions = [
    { value: ThemeKeyEnum.Base, label: 'Base Theme' },
    { value: ThemeKeyEnum.Alternative, label: 'Alternative Theme' },
  ];

  const handleChange = (value: string | null) => {
    if (value) {
      setSelectedTheme(value as ThemeKeyEnum);
      onChange?.(value);
    }
  };

  return (
    <>
      <Select
        data={themeOptions}
        className={classes.themeSelect}
        onChange={handleChange}
        placeholder="Select a theme"
      />
    </>
  );
}
