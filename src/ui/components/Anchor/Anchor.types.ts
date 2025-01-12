import { z } from 'zod';

export const AnchorPropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      root: z.string().optional(),
    })
    .optional(),
  children: z.any().optional(),
  underline: z.enum(['always', 'hover', 'never']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  disabled: z.boolean().optional(),
  href: z.string().optional(),
  target: z.string().optional(),
  variant: z.string().optional(),
  component: z.any().optional(),
  onClick: z.function().args(z.custom<React.MouseEvent<HTMLAnchorElement>>()).optional(),
});

export type AnchorProps = z.infer<typeof AnchorPropsSchema>;
