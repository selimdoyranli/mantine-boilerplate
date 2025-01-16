import { z } from 'zod';

// Base schemas for reusable types
const TabsVariantSchema = z.enum(['default', 'outline', 'pills']);
const TabsRadiusSchema = z.enum(['xs', 'sm', 'md', 'lg', 'xl']);
const TabsPlacementSchema = z.enum(['left', 'right']);
const TabsOrientationSchema = z.enum(['horizontal', 'vertical']);

// Main Tabs schema
export const TabsPropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      root: z.string().optional(),
      list: z.string().optional(),
      panel: z.string().optional(),
      tab: z.string().optional(),
      tabLabel: z.string().optional(),
      tabSection: z.string().optional(),
    })
    .optional(),
  children: z.any().optional(),
  defaultValue: z.string().optional(),
  value: z.string().optional(),
  onChange: z.function().args(z.string().nullable()).optional(),
  variant: TabsVariantSchema.optional(),
  color: z.string().optional(),
  radius: TabsRadiusSchema.optional(),
  orientation: TabsOrientationSchema.optional(),
  placement: TabsPlacementSchema.optional(),
  keepMounted: z.boolean().optional(),
  activateTabWithKeyboard: z.boolean().optional(),
  allowTabDeactivation: z.boolean().optional(),
  loop: z.boolean().optional(),
  inverted: z.boolean().optional(),
});

// Subcomponent schemas
export const TabsListPropsSchema = z.object({
  children: z.any(),
  grow: z.boolean().optional(),
  justify: z.enum(['flex-start', 'center', 'flex-end', 'space-between']).optional(),
});

export const TabsTabPropsSchema = z.object({
  value: z.string(),
  children: z.any(),
  leftSection: z.any().optional(),
  rightSection: z.any().optional(),
  color: z.string().optional(),
  disabled: z.boolean().optional(),
});

export const TabsPanelPropsSchema = z.object({
  value: z.string(),
  children: z.any(),
});

// Type exports
export type TabsProps = z.infer<typeof TabsPropsSchema>;
export type TabsListProps = z.infer<typeof TabsListPropsSchema>;
export type TabsTabProps = z.infer<typeof TabsTabPropsSchema>;
export type TabsPanelProps = z.infer<typeof TabsPanelPropsSchema>;
