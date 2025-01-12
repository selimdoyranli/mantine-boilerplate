import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Title.module.css';
import { TitleProps, TitlePropsSchema } from './Title.types';
import clsx from 'clsx';
import { Title as MantineTitle, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<TitleProps> = {
  order: 1,
  size: 'h1',
  textWrap: 'wrap',
};

export default function Title(props: TitleProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<TitleProps>(theme, 'Title');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, TitlePropsSchema, combinedDefaultProps);

  return (
    <MantineTitle
      className={clsx(validatedProps.className)}
      classNames={{
        root: clsx(classes.root, validatedProps.classNames?.root),
      }}
      {...validatedProps}
    >
      {validatedProps.children}
    </MantineTitle>
  );
}
