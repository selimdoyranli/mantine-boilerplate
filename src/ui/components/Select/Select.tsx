import React from 'react';
import { getThemeProps, validateProps } from '@/ui/utils/props';
import classes from './Select.module.css';
import { SelectProps, SelectPropsSchema } from './Select.types';
import clsx from 'clsx';
import { Select as MantineSelect, useMantineTheme } from '@mantine/core';

export const DEFAULT_PROPS: Partial<SelectProps> = {
  size: 'md',
  searchable: false,
  clearable: false,
  disabled: false,
  readOnly: false,
  allowDeselect: true,
  placeholder: 'Select',
};

export default function Select(props: SelectProps) {
  const theme = useMantineTheme();
  const themeDefaultProps = getThemeProps<SelectProps>(theme, 'Select');
  const combinedDefaultProps = { ...DEFAULT_PROPS, ...themeDefaultProps };

  const validatedProps = validateProps(props, SelectPropsSchema, combinedDefaultProps);

  return (
    <MantineSelect
      {...validatedProps}
      className={validatedProps.className}
      classNames={{
        wrapper: clsx(classes.wrapper, validatedProps.classNames?.wrapper),
        input: clsx(classes.input, validatedProps.classNames?.input),
        section: clsx(classes.section, validatedProps.classNames?.section),
        root: clsx(classes.root, validatedProps.classNames?.root),
        label: clsx(classes.label, validatedProps.classNames?.label),
        required: clsx(classes.required, validatedProps.classNames?.required),
        description: clsx(classes.description, validatedProps.classNames?.description),
        error: clsx(classes.error, validatedProps.classNames?.error),
        dropdown: clsx(classes.dropdown, validatedProps.classNames?.dropdown),
        options: clsx(classes.options, validatedProps.classNames?.options),
        option: clsx(classes.option, validatedProps.classNames?.option),
        empty: clsx(classes.empty, validatedProps.classNames?.empty),
        group: clsx(classes.group, validatedProps.classNames?.group),
        groupLabel: clsx(classes.groupLabel, validatedProps.classNames?.groupLabel),
      }}
    />
  );
}
