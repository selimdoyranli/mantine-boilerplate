import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Accordion.module.css';
import {
  AccordionChevronProps,
  AccordionChevronPropsSchema,
  AccordionControlProps,
  AccordionControlPropsSchema,
  AccordionItemProps,
  AccordionItemPropsSchema,
  AccordionPanelProps,
  AccordionPanelPropsSchema,
  AccordionProps,
  AccordionPropsSchema,
} from './Accordion.types';
import clsx from 'clsx';
import { Accordion as MantineAccordion, useMantineTheme } from '@mantine/core';

// Default props for main Accordion
export const DEFAULT_PROPS: Partial<AccordionProps> = {
  variant: 'default',
  radius: 'sm',
  multiple: false,
  chevronPosition: 'right',
  transitionDuration: 200,
  loop: true,
};

export default function Accordion(props: AccordionProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<AccordionProps>(theme, 'Accordion');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, AccordionPropsSchema, combinedDefaultProps);

  return (
    <MantineAccordion
      {...validatedProps}
      className={clsx(validatedProps.className)}
      classNames={{
        root: clsx(classes.root, validatedProps.classNames?.root),
        item: clsx(classes.item, validatedProps.classNames?.item),
        control: clsx(classes.control, validatedProps.classNames?.control),
        chevron: clsx(classes.chevron, validatedProps.classNames?.chevron),
        label: clsx(classes.label, validatedProps.classNames?.label),
        icon: clsx(classes.icon, validatedProps.classNames?.icon),
        panel: clsx(classes.panel, validatedProps.classNames?.panel),
      }}
    >
      {validatedProps.children}
    </MantineAccordion>
  );
}

const AccordionItem = (props: AccordionItemProps) => {
  const validatedProps = validateProps(props, AccordionItemPropsSchema, {});
  return (
    <MantineAccordion.Item {...validatedProps}>{validatedProps.children}</MantineAccordion.Item>
  );
};

const AccordionControl = (props: AccordionControlProps) => {
  const validatedProps = validateProps(props, AccordionControlPropsSchema, {});
  return (
    <MantineAccordion.Control {...validatedProps}>
      {validatedProps.children}
    </MantineAccordion.Control>
  );
};

const AccordionPanel = (props: AccordionPanelProps) => {
  const validatedProps = validateProps(props, AccordionPanelPropsSchema, {});
  return (
    <MantineAccordion.Panel {...validatedProps}>{validatedProps.children}</MantineAccordion.Panel>
  );
};

const AccordionChevron = (props: AccordionChevronProps) => {
  const validatedProps = validateProps(props, AccordionChevronPropsSchema, {});
  return <MantineAccordion.Chevron {...validatedProps} />;
};

// Binding components to main Accordion
Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
Accordion.Chevron = AccordionChevron;
