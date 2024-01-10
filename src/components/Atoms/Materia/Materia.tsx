import { FC } from 'react';
import cx from 'classnames';

import { classNames } from '@/shared/types/types';

import classes from './materia.module.scss';
import Link from 'next/link';

interface Props {
  variant?: string;
  className?: classNames;
  name: string;
  slug: string | null;
}

const Materia: FC<Props> = ({
  variant = 'magic',
  className,
  name = 'bolt',
  slug,
}) => {
  const classNames = cx(classes['materia'], {
    [className]: className,
    [classes[`materia--${variant}`]]: variant,
  });

  const materiaSlug = slug ? slug : '#';

  return (
    <Link className={classNames} href={`/materia/${materiaSlug}`}>
      <span>{name}</span>
    </Link>
  );
};

export default Materia;
