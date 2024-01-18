import classes from './page.module.scss';
import Image from 'next/image';

import Materia from '@/components/Molecules/Materia/Materia';
import StandardLayout from '@/components/Organisms/Layout/StandardLayout/StandardLayout';

export default function Home() {
  return (
    <StandardLayout>
      <p>
        7th Heaven{' '}
        <Materia
          slug="knights-of-the-round"
          variant="summon"
          name="knights of the round"
        />
      </p>
    </StandardLayout>
  );
}
