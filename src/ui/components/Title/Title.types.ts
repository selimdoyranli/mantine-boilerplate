import { z } from 'zod';
import { MantineStyleProps, TitleOrder, TitleSize } from '@mantine/core';

export const TitlePropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      root: z.string().optional(),
    })
    .optional(),
  children: z.any().optional(),
  order: z.custom<TitleOrder>().optional(),
  size: z.custom<TitleSize>().optional(),
  textWrap: z.enum(['wrap', 'nowrap', 'balance', 'pretty']).optional(),
  ta: z.custom<MantineStyleProps['ta']>().optional(),
  c: z.custom<MantineStyleProps['c']>().optional(),
  fw: z.custom<MantineStyleProps['fw']>().optional(),
  fz: z.custom<MantineStyleProps['fz']>().optional(),
  lh: z.custom<MantineStyleProps['lh']>().optional(),
  fs: z.custom<MantineStyleProps['fs']>().optional(),
});

export type TitleProps = z.infer<typeof TitlePropsSchema>;
