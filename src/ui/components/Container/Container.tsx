import React from 'react';
import { Container as MantineContainer } from '@mantine/core';
import type { AllowedPropsSchema } from '@/ui/utils/props';
import { getAllowedProps } from '@/ui/utils/props';
import type { ContainerProps } from './Container.types';
import classes from './Container.module.css';

const ALLOWED_PROPS: AllowedPropsSchema<ContainerProps> = {};

export const DEFAULT_PROPS: ContainerProps = {};

export default function Container({ children, ...props }: ContainerProps) {
  const finalProps = getAllowedProps(props, DEFAULT_PROPS, ALLOWED_PROPS);

  return (
    <MantineContainer classNames={{ root: classes.root }} {...finalProps}>
      {children}
    </MantineContainer>
  );
}
