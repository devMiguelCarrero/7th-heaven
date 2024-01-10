import React, { FC, ReactNode } from 'react';
import classes from './selectionable-item.module.scss';

interface Props {
  children: ReactNode;
}

const SelectionableItem: FC<Props> = ({ children }) => {
  return <span className={classes['selectionable-item']}>{children}</span>;
};
export default SelectionableItem;
