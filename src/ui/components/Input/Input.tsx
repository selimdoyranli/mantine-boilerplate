import React from 'react';
import { Input as MantineInput } from '@mantine/core';
import type { AllowedPropsSchema } from '@/ui/utils/props';
import { getAllowedProps } from '@/ui/utils/props';
import type { InputProps } from './Input.types';
import classes from './Input.module.css';

const ALLOWED_PROPS: AllowedPropsSchema<InputProps> = {};

export const DEFAULT_PROPS: InputProps = {};

export default function Input({ ...props }: InputProps) {
  const finalProps = getAllowedProps(props, DEFAULT_PROPS, ALLOWED_PROPS);

  return <MantineInput classNames={{ wrapper: classes.wrapper }} {...finalProps} />;
}
