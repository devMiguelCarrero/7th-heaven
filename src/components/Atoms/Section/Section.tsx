import React, { FC } from 'react';
import cx from 'classnames';

import classes from './section.module.scss';
import { classNames } from '@/shared/types/types';

interface InnerProps {
  variant?: string;
  children: React.ReactNode;
}

export const SectionInner: FC<InnerProps> = ({ variant, children }) => {
  const classNames = cx(classes['section-container__inner'], {
    [classes[`section-container__inner--${variant}`]]: variant,
  });

  return <div className={classNames}>{children}</div>;
};

interface Props {
  variant?: string;
  className?: classNames;
  children: React.ReactNode;
}

const SevenSection: FC<Props> = (props) => {
  const classNames = cx(`container ${classes['section-container']}`, {
    [props.className]: props.className,
    [classes[`section-container--${props.variant}`]]: props.variant,
  });

  return <section className={classNames}>{props.children}</section>;
};
export default SevenSection;
