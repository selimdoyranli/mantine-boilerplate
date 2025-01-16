import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Tabs.module.css';
import {
  TabsListProps,
  TabsListPropsSchema,
  TabsPanelProps,
  TabsPanelPropsSchema,
  TabsProps,
  TabsPropsSchema,
  TabsTabProps,
  TabsTabPropsSchema,
} from './Tabs.types';
import clsx from 'clsx';
import { Tabs as MantineTabs, useMantineTheme } from '@mantine/core';

// Default props for main Tabs
export const DEFAULT_PROPS: Partial<TabsProps> = {
  variant: 'default',
  radius: 'sm',
  orientation: 'horizontal',
  placement: 'left',
  keepMounted: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  loop: true,
  inverted: false,
};

export default function Tabs(props: TabsProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<TabsProps>(theme, 'Tabs');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, TabsPropsSchema, combinedDefaultProps);

  return (
    <MantineTabs
      {...validatedProps}
      className={clsx(validatedProps.className)}
      classNames={{
        root: clsx(classes.root, validatedProps.classNames?.root),
        list: clsx(classes.list, validatedProps.classNames?.list),
        panel: clsx(classes.panel, validatedProps.classNames?.panel),
        tab: clsx(classes.tab, validatedProps.classNames?.tab),
        tabLabel: clsx(classes.tabLabel, validatedProps.classNames?.tabLabel),
        tabSection: clsx(classes.tabSection, validatedProps.classNames?.tabSection),
      }}
    >
      {validatedProps.children}
    </MantineTabs>
  );
}

const TabsList = (props: TabsListProps) => {
  const validatedProps = validateProps(props, TabsListPropsSchema, {});
  return <MantineTabs.List {...validatedProps}>{validatedProps.children}</MantineTabs.List>;
};

const Tab = (props: TabsTabProps) => {
  const validatedProps = validateProps(props, TabsTabPropsSchema, {});
  return <MantineTabs.Tab {...validatedProps}>{validatedProps.children}</MantineTabs.Tab>;
};

const Panel = (props: TabsPanelProps) => {
  const validatedProps = validateProps(props, TabsPanelPropsSchema, {});
  return <MantineTabs.Panel {...validatedProps}>{validatedProps.children}</MantineTabs.Panel>;
};

// Binding components to main Tabs
Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
