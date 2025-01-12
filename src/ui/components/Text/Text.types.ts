import { z } from 'zod';
import { MantineColor, MantineStyleProps } from '@mantine/core';

export const TextPropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      root: z.string().optional(),
    })
    .optional(),
  children: z.any().optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional().brand('size'),
  lineClamp: z.number().optional(),
  truncate: z.enum(['start', 'end']).optional(),
  variant: z.enum(['text', 'gradient']).optional(),
  gradient: z
    .object({
      from: z.string(),
      to: z.string(),
      deg: z.number().default(45).optional(),
    })
    .optional(),
  span: z.boolean().optional(),
  inherit: z.boolean().optional(),
  color: z.custom<MantineColor>().optional().brand('c'),
  ta: z.custom<MantineStyleProps['ta']>().optional(),
  fw: z.custom<MantineStyleProps['fw']>().optional(),
  fz: z.custom<MantineStyleProps['fz']>().optional(),
  lh: z.custom<MantineStyleProps['lh']>().optional(),
  fs: z.custom<MantineStyleProps['fs']>().optional(),
  p: z.custom<MantineStyleProps['p']>().optional(),
  py: z.custom<MantineStyleProps['py']>().optional(),
  px: z.custom<MantineStyleProps['px']>().optional(),
});

export type TextProps = z.input<typeof TextPropsSchema>;
