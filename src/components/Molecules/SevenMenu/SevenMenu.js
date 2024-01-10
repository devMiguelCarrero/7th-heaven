import React from 'react';
import Link from 'next/link';

import './Menu.scss';

const SevenMenu = (props) => {
  const data = [
    { id: '1', title: 'Home', url: '/' },
    { id: '2', title: 'About', url: '#' },
    { id: '3', title: 'Materia', url: '/materia' },
    { id: '4', title: 'Equip', url: '#' },
    { id: '5', title: 'Status', url: '#' },
    { id: '6', title: 'Order', url: '#' },
    { id: '7', title: 'Limit', url: '#' },
    { id: '8', title: 'Config', url: '#' },
    { id: 'space', title: 'Item', url: '#' },
    { id: '9', title: 'Save', url: '#' },
  ];

  return (
    <ul className="seven-vertical-menu">
      {data.map((item, index) => {
        if (item.id === 'space') {
          return <li key={`space-${index}`}></li>;
        }
        return (
          <li key={item.id}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default SevenMenu;
