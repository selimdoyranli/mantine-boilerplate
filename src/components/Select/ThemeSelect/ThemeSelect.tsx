import { ThemeKeyEnum } from '@/enums';
import Select from '@/ui/components/Select/Select';
import { useThemeContext } from '@/ui/contexts/ThemeContext';
import classes from './ThemeSelect.module.css';
import type { ThemeOptions, ThemeSelectProps } from './ThemeSelect.types';

export default function ThemeSelect({ onChange }: ThemeSelectProps) {
  const { selectedTheme, setSelectedTheme } = useThemeContext();

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
    <Select
      data={themeOptions}
      className={classes.themeSelect}
      onChange={handleChange}
      value={selectedTheme}
    />
  );
}
