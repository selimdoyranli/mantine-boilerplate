import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Button.module.css';
import { ButtonProps, ButtonPropsSchema } from './Button.types';
import { Button as MantineButton, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<ButtonProps> = {
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
};

export default function Button(props: ButtonProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<ButtonProps>(theme, 'Button');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, ButtonPropsSchema, combinedDefaultProps);

  return (
    <MantineButton classNames={{ root: classes.root }} {...validatedProps}>
      {validatedProps.children}
    </MantineButton>
  );
}
