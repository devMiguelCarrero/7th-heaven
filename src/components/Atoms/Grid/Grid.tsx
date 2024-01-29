import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import { classNames } from '@/shared/types/types';

import classes from './grid.module.scss';

interface Props {
  className?: classNames;
  children: ReactNode;
  columns: number;
  xsColumns?: number;
  smColumns?: number;
  mdColumns?: number;
  lgColumns?: number;
}

const Grid: FC<Props> = ({
  className,
  children,
  columns = 3,
  xsColumns = 1,
  smColumns = null,
  mdColumns = null,
  lgColumns = null,
}) => {
  const classNames = cx(classes.grid, {
    [className]: className,
    [classes[`has-${columns}-columns`]]: columns,
    [classes[`has-xs-${xsColumns}-columns`]]: xsColumns,
    [classes[`has-sm-${smColumns}-columns`]]: smColumns,
    [classes[`has-md-${mdColumns}-columns`]]: mdColumns,
    [classes[`has-lg-${lgColumns}-columns`]]: lgColumns,
  });

  return <div className={classNames}>{children}</div>;
};
export default Grid;
