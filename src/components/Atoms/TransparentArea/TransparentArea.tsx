import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import { classNames } from '@/shared/types/types';
import classes from './transparent-area.module.scss';

interface Props {
  className?: classNames;
  variant?: 'index-section' | 'main-section';
  children: ReactNode;
}

const TransparentArea: FC<Props> = ({
  className,
  variant,
  children,
  ...props
}) => {
  const classnames = cx(classes['transparent-area'], {
    [className]: className,
    [classes[`transparent-area--${variant}`]]: variant,
  });

  return (
    <div {...props} className={classnames}>
      {children}
    </div>
  );
};
export default TransparentArea;
