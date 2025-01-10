import React from 'react';
import type { AllowedPropsSchema } from '@/ui/utils/props';
import { getAllowedProps, getThemeProps } from '@/ui/utils/props';
import classes from './Container.module.css';
import type { ContainerProps } from './Container.types';
import { Container as MantineContainer, useMantineTheme } from '@mantine/core';

const ALLOWED_PROPS: AllowedPropsSchema<ContainerProps> = {
  size: ['xs', 'sm', 'md', 'lg', 'xl'],
  fluid: 'boolean',
  padding: ['xs', 'sm', 'md', 'lg', 'xl'],
};

export const DEFAULT_PROPS: ContainerProps = {
  size: 'md',
  fluid: false,
  padding: 'md',
};

export default function Container({ children, ...props }: ContainerProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps(theme, 'Container');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const allowedProps = getAllowedProps(props, combinedDefaultProps, ALLOWED_PROPS);

  return (
    <MantineContainer classNames={{ root: classes.root }} {...allowedProps}>
      {children}
    </MantineContainer>
  );
}
