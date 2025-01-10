import React from 'react';
import type { AllowedPropsSchema } from '@/ui/utils/props';
import { getAllowedProps, getThemeProps } from '@/ui/utils/props';
import classes from './Input.module.css';
import type { InputProps } from './Input.types';
import { Input as MantineInput, useMantineTheme } from '@mantine/core';

const ALLOWED_PROPS: AllowedPropsSchema<InputProps> = {
  size: ['xs', 'sm', 'md', 'lg', 'xl'],
  disabled: 'boolean',
  error: 'boolean',
  required: 'boolean',
  variant: ['default', 'filled'],
};

export const DEFAULT_PROPS: InputProps = {
  size: 'md',
  disabled: false,
  error: false,
  required: false,
  variant: 'default',
  placeholder: 'Enter your name',
};

export default function Input({ ...props }: InputProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps(theme, 'Input');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const finalProps = getAllowedProps(props, combinedDefaultProps, ALLOWED_PROPS);

  return <MantineInput classNames={{ wrapper: classes.wrapper }} {...finalProps} />;
}
