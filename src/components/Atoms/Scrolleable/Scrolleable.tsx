import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import { classNames } from '@/shared/types/types';

import classes from './scrolleable.module.scss';

interface Props {
  className?: classNames;
  children: ReactNode;
}

const Scrolleable: FC<Props> = ({ className, children }) => {
  const classNames = cx(classes.scrolleable, {
    [className]: className,
  });

  return <div className={classNames}>{children}</div>;
};
export default Scrolleable;
