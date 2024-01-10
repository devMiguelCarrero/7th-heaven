import React, { FC } from 'react';
import cx from 'classnames';

import classes from './paragraph.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  children: React.ReactNode;
  variant?: 'regular' | 'medium' | 'high';
  className?: classNames;
}

const AtomLin: FC<Props> = ({ children, variant, className }) => {
  const classNames = cx(classes['link'], {
    [className]: className,
    [classes[`link--${variant}`]]: variant,
  });

  return <p className={classNames}>{children}</p>;
};
export default AtomLin;
