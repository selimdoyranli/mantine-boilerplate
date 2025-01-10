import React from 'react';
import type { AllowedPropsSchema } from '@/ui/utils/props';
import { getAllowedProps, getThemeProps } from '@/ui/utils/props';
import classes from './Button.module.css';
import type { ButtonProps } from './Button.types';
import { Button as MantineButton, useMantineTheme } from '@mantine/core';

const ALLOWED_PROPS: AllowedPropsSchema<ButtonProps> = {
  variant: ['default', 'filled', 'outline'],
  size: ['xs', 'sm', 'md', 'lg', 'xl'],
  disabled: 'boolean',
  loading: 'boolean',
  fullWidth: 'boolean',
  onClick: 'function',
};

export const DEFAULT_PROPS: ButtonProps = {
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
};

export default function Button({ children, ...props }: ButtonProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps(theme, 'Button');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const allowedProps = getAllowedProps(props, combinedDefaultProps, ALLOWED_PROPS);

  return (
    <MantineButton classNames={{ root: classes.root }} {...allowedProps}>
      {children}
    </MantineButton>
  );
}
