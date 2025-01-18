import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Button.module.css';
import {
  AllowedElements,
  ButtonBasePropsSchema,
  ButtonProps,
  PolymorphicButtonProps,
} from './Button.types';
import clsx from 'clsx';
import { Button as MantineButton, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<ButtonProps> = {
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
};

export default function Button<C extends AllowedElements = 'button'>(
  props: PolymorphicButtonProps<C>
) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<ButtonProps>(theme, 'Button');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, ButtonBasePropsSchema, combinedDefaultProps);

  return (
    <MantineButton
      {...validatedProps}
      component={props.component as any}
      className={clsx(validatedProps.className)}
      classNames={{
        root: clsx(classes.root, validatedProps.classNames?.root),
        loader: clsx(classes.loader, validatedProps.classNames?.loader),
        inner: clsx(classes.inner, validatedProps.classNames?.inner),
        section: clsx(classes.section, validatedProps.classNames?.section),
        label: clsx(classes.label, validatedProps.classNames?.label),
      }}
    >
      {validatedProps.children}
    </MantineButton>
  );
}
