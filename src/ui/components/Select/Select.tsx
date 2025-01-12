import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Select.module.css';
import { SelectProps, SelectPropsSchema } from './Select.types';
import { Select as MantineSelect, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<SelectProps> = {
  size: 'md',
  searchable: false,
  clearable: false,
  disabled: false,
  readOnly: false,
  allowDeselect: true,
  placeholder: 'Select',
};

export default function Select(props: SelectProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<SelectProps>(theme, 'Select');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, SelectPropsSchema, combinedDefaultProps);

  return <MantineSelect classNames={{ root: classes.root }} {...validatedProps} />;
}
