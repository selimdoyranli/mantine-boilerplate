import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { AllowedPropsSchema } from '@/ui/utils/props';
import { getAllowedProps } from '@/ui/utils/props';
import type { ButtonProps } from './Button.types';
import classes from './Button.module.css';

const ALLOWED_PROPS: AllowedPropsSchema<ButtonProps> = {
  variant: ['default', 'filled', 'outline'],
  size: ['xs', 'sm', 'md', 'lg', 'xl'],
  disabled: [true, false],
  loading: [true, false],
  fullWidth: [true, false],
};

export const DEFAULT_PROPS: ButtonProps = {
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: true,
};

export default function Button({ children, ...props }: ButtonProps) {
  const finalProps = getAllowedProps(props, DEFAULT_PROPS, ALLOWED_PROPS);

  return (
    <MantineButton classNames={{ root: classes.root }} {...finalProps}>
      {children}
    </MantineButton>
  );
}
