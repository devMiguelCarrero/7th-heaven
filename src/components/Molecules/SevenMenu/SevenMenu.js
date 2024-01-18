import React from 'react';
import Link from 'next/link';

import './Menu.scss';
import AtomLink from '@/components/Atoms/AtomLink';

const SevenMenu = (props) => {
  const data = [
    { id: '1', title: 'Home', url: '/', disabled: false },
    { id: '2', title: 'About', url: '#', disabled: true },
    { id: '4', title: 'Characters', url: '#', disabled: true },
    { id: '3', title: 'Materia', url: '/materia', disabled: false },
    { id: '5', title: 'Enemy Skill', url: '#', disabled: true },
    { id: '6', title: 'Chocobo', url: '#', disabled: true },
    { id: '7', title: 'Limit', url: '#', disabled: true },
    { id: '8', title: 'Credits', url: '#', disabled: true },
    { id: '9', title: 'Enemies', url: '#', disabled: true },
  ];

  return (
    <ul className="seven-vertical-menu">
      {data.map((item, index) => {
        if (item.id === 'space') {
          return <li key={`space-${index}`}></li>;
        }
        return (
          <li key={item.id}>
            <AtomLink
              href={item.url}
              title={item.title}
              disabled={item.disabled}
            >
              {item.title}
            </AtomLink>
          </li>
        );
      })}
    </ul>
  );
};
export default SevenMenu;
