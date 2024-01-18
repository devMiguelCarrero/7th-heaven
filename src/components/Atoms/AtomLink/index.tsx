import React, { FC } from 'react';
import cx from 'classnames';

import classes from './atom-link.module.scss';
import { classNames } from '@/shared/types/types';

export type linkVariants = 'regular' | 'lifestream';

interface Props {
  children: React.ReactNode;
  variant?: linkVariants;
  className?: classNames;
  disabled?: boolean;
  href: string;
  title: string;
}

const AtomLink: FC<Props> = ({
  children,
  variant,
  className,
  disabled = false,
  href = '#',
  title = '7th heaven',
}) => {
  const classNames = cx(classes['link'], {
    [className]: className,
    [classes[`link--${variant}`]]: variant && !disabled,
    [classes['link--disabled']]: disabled,
  });

  return (
    <a href={href} title={title} className={classNames}>
      {children}
    </a>
  );
};
export default AtomLink;
