import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Input.module.css';
import { InputProps, InputPropsSchema } from './Input.types';
import { Input as MantineInput, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<InputProps> = {
  size: 'md',
  disabled: false,
  error: false,
  required: false,
  variant: 'default',
  placeholder: 'Enter your name',
};

export default function Input(props: InputProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<InputProps>(theme, 'Input');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, InputPropsSchema, combinedDefaultProps);

  return <MantineInput classNames={{ wrapper: classes.wrapper }} {...validatedProps} />;
}
