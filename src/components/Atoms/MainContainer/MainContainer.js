import React from 'react';

import classes from './main-container.module.scss';

const MainContainer = (props) => {
  return <div className={classes['main-container']}>{props.children}</div>;
};
export default MainContainer;
