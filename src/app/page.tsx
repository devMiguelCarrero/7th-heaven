import classes from './page.module.scss';
import Image from 'next/image';

import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import SevenSection from '@/components/Atoms/Section/Section';
import Materia from '@/components/Atoms/Materia/Materia';

export default function Home() {
  return (
    <main className={classes.main}>
      <MainContainer>
        <SevenSection variant="index-section">
          <p>
            7th Heaven <Materia variant="summon" name="knights of the round" />
          </p>
        </SevenSection>
      </MainContainer>
    </main>
  );
}
