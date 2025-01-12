import { z } from 'zod';
import { MantineStyleProps } from '@mantine/core';

export const BoxPropsSchema = z.object({
  className: z.string().optional(),
  children: z.any().optional(),
  p: z.custom<MantineStyleProps['p']>().optional(),
  w: z.custom<MantineStyleProps['w']>().optional(),
  mx: z.custom<MantineStyleProps['mx']>().optional(),
});

export type BoxProps = z.infer<typeof BoxPropsSchema>;
