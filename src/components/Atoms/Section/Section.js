import React from 'react';
import cx from 'classnames';

import classes from './section.module.scss';

const SevenSection = (props) => {
  const classNames = cx(`container ${classes['section-container']}`, {
    [props.className]: props.className,
    [classes[`section-container--${props.variant}`]]: props.variant,
  });

  return <section className={classNames}>{props.children}</section>;
};
export default SevenSection;
