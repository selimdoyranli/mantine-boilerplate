import { Button as MantineButton } from '@mantine/core';
import classes from './Button.module.css';

const Button = MantineButton.extend({
  defaultProps: {
    variant: 'filled',
  },
  classNames: {
    root: classes.root,
  },
});

export default Button;
