import { FC } from 'react';
import cx from 'classnames';

import { classNames } from '@/shared/types/types';

import classes from './materia.module.scss';
import Link from 'next/link';

interface Props {
  variant?: 'magic' | 'support' | 'command' | 'independent' | 'summon';
  className?: classNames;
  name: string;
}

const Materia: FC<Props> = ({
  variant = 'magic',
  className,
  name = 'bolt',
}) => {
  const classNames = cx(classes['materia'], {
    [className]: className,
    [classes[`materia--${variant}`]]: variant,
  });

  return (
    <Link className={classNames} href="#">
      <span>{name}</span>
    </Link>
  );
};

export default Materia;
