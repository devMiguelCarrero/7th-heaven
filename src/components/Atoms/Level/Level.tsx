import React, { FC } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import classes from './level.module.scss';
import { classNames } from '@/shared/types/types';

import Star from '@/shared/assets/img/level/magic-materia-star.webp';
import StarLeveled from '@/shared/assets/img/level/magic-materia-star-leveled.webp';

interface Props {
  level: 2 | 3 | 4;
  className?: classNames;
}

const Level: FC<Props> = ({ level, className }) => {
  const levels = [2, 3, 4];

  const LevelGrid: FC = () => {
    return (
      <div className={classes.level__grid}>
        {levels.map((levelUp) => (
          <Image
            key={`level-${levelUp}`}
            className={classes.level__grid__star}
            src={level >= levelUp ? StarLeveled : Star}
            alt={`FF7 level star${level >= levelUp ? ' leveld' : ''}`}
          />
        ))}
      </div>
    );
  };

  const classNames = cx(classes['level'], {
    [className]: className,
  });

  return (
    <div className={classNames}>
      <LevelGrid />
      <span className={classes.level__text}>{`Level ${level}`}</span>
    </div>
  );
};
export default Level;
