import React from 'react';
import classes from './Button.module.css';
import type { ButtonProps } from './Button.types';
import clsx from 'clsx';
import { Button as MantineButton } from '@mantine/core';

export default function Button(props: ButtonProps) {
  return (
    <MantineButton
      variant={props.variant}
      size={props.size}
      className={clsx(props.className)}
      classNames={{
        root: clsx(classes.root, props.classNames?.root),
        loader: clsx(classes.loader, props.classNames?.loader),
        inner: clsx(classes.inner, props.classNames?.inner),
        section: clsx(classes.section, props.classNames?.section),
        label: clsx(classes.label, props.classNames?.label),
      }}
    >
      {props.children}
    </MantineButton>
  );
}
