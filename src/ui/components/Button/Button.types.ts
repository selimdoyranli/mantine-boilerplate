import { ComponentPropsWithoutRef, ElementType } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';

// Define allowed elements
export type AllowedElements = 'button' | 'a' | typeof Link;

// Base button props
export const ButtonBasePropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      root: z.string().optional(),
      loader: z.string().optional(),
      inner: z.string().optional(),
      section: z.string().optional(),
      label: z.string().optional(),
    })
    .optional(),
  children: z.any().optional(),
  variant: z.enum(['default', 'filled', 'outline']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  disabled: z.boolean().optional(),
  loading: z.boolean().optional(),
  fullWidth: z.boolean().optional(),
});

export type ButtonBaseProps = z.infer<typeof ButtonBasePropsSchema>;

// Generic type for polymorphic props
export type PolymorphicButtonProps<C extends AllowedElements> = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<C extends ElementType ? C : never>, keyof ButtonBaseProps> & {
    component?: C;
  };

// Default button props type
export type ButtonProps =
  | PolymorphicButtonProps<'button'>
  | PolymorphicButtonProps<'a'>
  | PolymorphicButtonProps<typeof Link>;
