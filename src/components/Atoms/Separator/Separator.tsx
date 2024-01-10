import React, { FC } from 'react';
import { classNames } from '@/shared/types/types';
import cx from 'classnames';

import classes from './separator.module.scss';

interface Props {
  className?: classNames;
}

const Separator: FC<Props> = ({ className }) => {
  const classNames = cx(classes.separator, {
    [className]: className,
  });

  return <div className={classNames} />;
};
export default Separator;
