import { Input as MantineInput } from '@mantine/core';
import classes from './Input.module.css';

const Input = MantineInput.extend({
  defaultProps: {
    variant: 'default',
  },
  classNames: {
    wrapper: classes.wrapper,
  },
});

export default Input;  
