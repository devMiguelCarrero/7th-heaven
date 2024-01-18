import { FC } from 'react';
import cx from 'classnames';

import { classNames } from '@/shared/types/types';

import classes from './materia.module.scss';
import AtomLink, { linkVariants } from '@/components/Atoms/AtomLink';

interface Props {
  variant?: string;
  className?: classNames;
  name: string;
  slug: string | null;
  linkType?: linkVariants;
}

const Materia: FC<Props> = ({
  variant = 'magic',
  className,
  name = 'bolt',
  slug,
  linkType = 'regular',
}) => {
  const classNames = cx(classes['materia'], {
    [className]: className,
    [classes[`materia--${variant}`]]: variant,
  });

  const materiaSlug = slug ? slug : '#';

  return (
    <AtomLink
      variant={linkType}
      className={classNames}
      href={`/materia/${materiaSlug}`}
      title={name}
    >
      <span>{name}</span>
    </AtomLink>
  );
};

export default Materia;
