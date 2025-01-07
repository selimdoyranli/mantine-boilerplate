import { Container as MantineContainer } from '@mantine/core';
import classes from './Container.module.css';

const Container = MantineContainer.extend({
  defaultProps: {},
  classNames: {
    root: classes.root,
  },
});

export default Container;  
