import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Text.module.css';
import { TextProps, TextPropsSchema } from './Text.types';
import clsx from 'clsx';
import { Text as MantineText, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<TextProps> = {
  size: 'md',
  variant: 'text',
  span: false,
  inherit: false,
  color: 'dimmed',
};

export default function Text(props: TextProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<TextProps>(theme, 'Text');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, TextPropsSchema, combinedDefaultProps);

  return (
    <MantineText
      {...validatedProps}
      className={clsx(validatedProps.className)}
      classNames={{ root: clsx(classes.root, validatedProps.classNames?.root) }}
    >
      {validatedProps.children}
    </MantineText>
  );
}
