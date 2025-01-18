import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Input.module.css';
import { InputProps, InputPropsSchema } from './Input.types';
import clsx from 'clsx';
import { Input as MantineInput, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<InputProps> = {
  size: 'md',
  disabled: false,
  error: false,
  required: false,
  variant: 'default',
  placeholder: 'Type something...',
};

export default function Input(props: InputProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<InputProps>(theme, 'Input');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, InputPropsSchema, combinedDefaultProps);

  return (
    <MantineInput
      {...validatedProps}
      className={validatedProps.className}
      classNames={{
        wrapper: clsx(classes.wrapper, validatedProps.classNames?.wrapper),
        input: clsx(classes.input, validatedProps.classNames?.input),
        section: clsx(classes.section, validatedProps.classNames?.section),
      }}
    />
  );
}
