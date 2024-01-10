import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import { classNames } from '@/shared/types/types';

import classes from './grid.module.scss';

interface Props {
  className?: classNames;
  children: ReactNode;
}

const Grid: FC<Props> = ({ className, children }) => {
  const classNames = cx(classes.grid, {
    [className]: className,
  });

  return <div className={classNames}>{children}</div>;
};
export default Grid;
