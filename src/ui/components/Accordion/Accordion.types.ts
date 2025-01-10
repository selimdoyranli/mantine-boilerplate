// Custom type definitions without depending on Mantine types
export type AccordionVariant = 'default' | 'contained' | 'filled' | 'separated';
export type AccordionRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ChevronPosition = 'left' | 'right';
export type AccordionHeadingOrder = 2 | 3 | 4 | 5 | 6;

export interface AccordionStylesNames {
  root: string;
  item: string;
  control: string;
  chevron: string;
  label: string;
  icon: string;
  panel: string;
}

export interface AccordionProps {
  /** Accordion variant */
  variant?: AccordionVariant;
  /** Border radius from theme.radius or number to set value in px */
  radius?: AccordionRadius;
  /** Allow multiple items to be opened at the same time */
  multiple?: boolean;
  /** Position of the chevron */
  chevronPosition?: ChevronPosition;
  /** Transition duration in ms */
  transitionDuration?: number;
  /** Index of initial opened item */
  defaultValue?: string | string[];
  /** Value for controlled component */
  value?: string | string[] | null;
  /** Called when value changes */
  onChange?: (value: string | string[] | null) => void;
  /** Determines whether arrow key presses should loop through items */
  loop?: boolean;
  /** Accordion content */
  children: React.ReactNode;
  /** Order of heading element (h2-h6) */
  order?: AccordionHeadingOrder;
  /** Static id to bind accordion items */
  id?: string;
}

export interface AccordionItemProps {
  /** Item value, must be unique */
  value: string;
  /** Section content */
  children: React.ReactNode;
}

export interface AccordionControlProps {
  /** Disables control button */
  disabled?: boolean;
  /** Custom chevron icon */
  chevron?: React.ReactNode;
  /** Position of the chevron */
  chevronPosition?: ChevronPosition;
  /** Icon displayed next to label */
  icon?: React.ReactNode;
  /** Control label */
  children: React.ReactNode;
}

export interface AccordionPanelProps {
  /** Panel content */
  children: React.ReactNode;
}

export interface AccordionChevronProps {
  /** Chevron size */
  size?: number;
}
