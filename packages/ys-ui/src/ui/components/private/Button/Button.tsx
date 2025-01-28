import React from 'react';
import classes from './Button.module.css';
import type { ButtonProps } from './Button.types';
import clsx from 'clsx';
import { Button as MantineButton } from '@mantine/core';

export default function Button(props: ButtonProps) {
  const { className, classNames, children, variant, size, disabled, loading, fullWidth, onClick } =
    props;

  return (
    <MantineButton
      className={clsx(className)}
      classNames={{
        root: clsx(classes.root, classNames?.root),
        loader: clsx(classes.loader, classNames?.loader),
        inner: clsx(classes.inner, classNames?.inner),
        section: clsx(classes.section, classNames?.section),
        label: clsx(classes.label, classNames?.label),
      }}
      variant={variant}
      size={size}
      disabled={disabled}
      loading={loading}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </MantineButton>
  );
}
