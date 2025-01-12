import { z } from 'zod';

// Base schemas for reusable types
const AccordionVariantSchema = z.enum(['default', 'contained', 'filled', 'separated']);
const AccordionRadiusSchema = z.enum(['xs', 'sm', 'md', 'lg', 'xl']);
const ChevronPositionSchema = z.enum(['left', 'right']);
const AccordionHeadingOrderSchema = z
  .union([z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)])
  .optional();

// Main Accordion schema
export const AccordionPropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      root: z.string().optional(),
      item: z.string().optional(),
      control: z.string().optional(),
      chevron: z.string().optional(),
      label: z.string().optional(),
      icon: z.string().optional(),
      panel: z.string().optional(),
    })
    .optional(),
  children: z.any(),
  variant: AccordionVariantSchema.optional(),
  radius: AccordionRadiusSchema.optional(),
  multiple: z.boolean().optional(),
  chevronPosition: ChevronPositionSchema.optional(),
  transitionDuration: z.number().optional(),
  defaultValue: z.union([z.string(), z.array(z.string())]).optional(),
  value: z.union([z.string(), z.array(z.string()), z.null()]).optional(),
  onChange: z
    .function()
    .args(z.union([z.string(), z.array(z.string()), z.null()]))
    .optional(),
  loop: z.boolean().optional(),
  order: AccordionHeadingOrderSchema.optional(),
  id: z.string().optional(),
});

// Subcomponent schemas
export const AccordionItemPropsSchema = z.object({
  value: z.string(),
  children: z.any(),
});

export const AccordionControlPropsSchema = z.object({
  disabled: z.boolean().optional(),
  chevron: z.any().optional(),
  chevronPosition: ChevronPositionSchema.optional(),
  icon: z.any().optional(),
  children: z.any(),
});

export const AccordionPanelPropsSchema = z.object({
  children: z.any(),
});

export const AccordionChevronPropsSchema = z.object({
  size: z.number().optional(),
});

// Type exports
export type AccordionProps = z.infer<typeof AccordionPropsSchema>;
export type AccordionItemProps = z.infer<typeof AccordionItemPropsSchema>;
export type AccordionControlProps = z.infer<typeof AccordionControlPropsSchema>;
export type AccordionPanelProps = z.infer<typeof AccordionPanelPropsSchema>;
export type AccordionChevronProps = z.infer<typeof AccordionChevronPropsSchema>;
