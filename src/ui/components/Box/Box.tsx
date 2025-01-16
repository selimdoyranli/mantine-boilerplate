import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Box.module.css';
import { BoxProps, BoxPropsSchema } from './Box.types';
import clsx from 'clsx';
import { Box as MantineBox, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<BoxProps> = {};

export default function Box(props: BoxProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<BoxProps>(theme, 'Box');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, BoxPropsSchema, combinedDefaultProps);

  return (
    <MantineBox {...validatedProps} className={clsx(classes.box, validatedProps.className)}>
      {validatedProps.children}
    </MantineBox>
  );
}
