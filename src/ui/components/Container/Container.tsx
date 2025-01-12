import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Container.module.css';
import { ContainerProps, ContainerPropsSchema } from './Container.types';
import { Container as MantineContainer, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<ContainerProps> = {
  size: 'md',
  fluid: false,
  padding: 'md',
};

export default function Container(props: ContainerProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<ContainerProps>(theme, 'Container');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, ContainerPropsSchema, combinedDefaultProps);

  return (
    <MantineContainer classNames={{ root: classes.root }} {...validatedProps}>
      {validatedProps.children}
    </MantineContainer>
  );
}
