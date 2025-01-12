import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Anchor.module.css';
import { AnchorProps, AnchorPropsSchema } from './Anchor.types';
import clsx from 'clsx';
import { Anchor as MantineAnchor, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<AnchorProps> = {
  underline: 'hover',
  size: 'md',
  disabled: false,
};

export default function Anchor(props: AnchorProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<AnchorProps>(theme, 'Anchor');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, AnchorPropsSchema, combinedDefaultProps);

  return (
    <MantineAnchor
      className={clsx(validatedProps.className)}
      classNames={{ root: clsx(classes.root, validatedProps.classNames?.root) }}
      {...validatedProps}
    >
      {validatedProps.children}
    </MantineAnchor>
  );
}
