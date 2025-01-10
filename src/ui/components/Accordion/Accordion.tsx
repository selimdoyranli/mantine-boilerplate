import React from 'react';
import type { AllowedPropsSchema } from '@/ui/utils/props';
import { getAllowedProps, getThemeProps } from '@/ui/utils/props';
import classes from './Accordion.module.css';
import type {
  AccordionChevronProps,
  AccordionControlProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from './Accordion.types';
import { Accordion as MantineAccordion, useMantineTheme } from '@mantine/core';

// Main Accordion allowed props
const ALLOWED_PROPS: AllowedPropsSchema<AccordionProps> = {
  variant: ['default', 'contained', 'filled', 'separated'],
  radius: ['xs', 'sm', 'md', 'lg', 'xl'],
  multiple: 'boolean',
  chevronPosition: ['left', 'right'],
  transitionDuration: 'number',
  order: 'number',
  defaultValue: ['string', 'array'],
  value: ['string', 'array', 'null'],
  // onChange: 'function',
  //id: 'string',
  loop: 'boolean',
};

// Default props for main Accordion
export const DEFAULT_PROPS: Partial<AccordionProps> = {
  variant: 'default',
  radius: 'sm',
  multiple: false,
  chevronPosition: 'right',
  transitionDuration: 200,
  loop: true,
};

// Default props for AccordionItem
export const ITEM_DEFAULT_PROPS: Partial<AccordionItemProps> = {
  value: '',
};

// Default props for AccordionControl
export const CONTROL_DEFAULT_PROPS: Partial<AccordionControlProps> = {
  disabled: false,
  icon: null,
  children: null,
};

// Default props for AccordionPanel
export const PANEL_DEFAULT_PROPS: Partial<AccordionPanelProps> = {
  children: null,
};

// Default props for AccordionChevron
export const CHEVRON_DEFAULT_PROPS: Partial<AccordionChevronProps> = {
  size: 160,
};

// Main Accordion component
const Accordion = ({ children, ...props }: AccordionProps) => {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps(theme, 'Accordion');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const allowedProps = getAllowedProps(props, combinedDefaultProps, ALLOWED_PROPS);

  return (
    <MantineAccordion
      classNames={{
        root: classes.root,
        item: classes.item,
        control: classes.control,
        chevron: classes.chevron,
        label: classes.label,
        icon: classes.icon,
        panel: classes.panel,
      }}
      {...allowedProps}
    >
      {children}
    </MantineAccordion>
  );
};

// AccordionItem component
const AccordionItem = ({ children, ...props }: AccordionItemProps) => (
  <MantineAccordion.Item {...ITEM_DEFAULT_PROPS} {...props}>
    {children}
  </MantineAccordion.Item>
);

// AccordionControl component
const AccordionControl = ({ children, ...props }: AccordionControlProps) => (
  <MantineAccordion.Control {...CONTROL_DEFAULT_PROPS} {...props}>
    {children}
  </MantineAccordion.Control>
);

// AccordionPanel component
const AccordionPanel = ({ children, ...props }: AccordionPanelProps) => {
  return <MantineAccordion.Panel {...props}>{children}</MantineAccordion.Panel>;
};

// AccordionChevron component
const AccordionChevron = ({ ...props }: AccordionChevronProps) => {
  const finalProps = { ...CHEVRON_DEFAULT_PROPS, ...props };
  return <MantineAccordion.Chevron {...finalProps} />;
};

// Binding components to main Accordion
Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
Accordion.Chevron = AccordionChevron;

export default Accordion;
