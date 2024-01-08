import classes from './page.module.scss';
import Image from 'next/image';

import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import SevenSection from '@/components/Atoms/Section/Section';
import Materia from '@/components/Atoms/Materia/Materia';
import TransparentArea from '@/components/Atoms/TransparentArea/TransparentArea';
import SevenMenu from '@/components/Molecules/SevenMenu/SevenMenu';

export default function Home() {
  return (
    <main className={classes.main}>
      <MainContainer>
        <SevenSection variant="index-section">
          <p>
            7th Heaven <Materia variant="summon" name="knights of the round" />
          </p>
        </SevenSection>
        <TransparentArea variant="index-section">
          <SevenSection variant="main-menu-section">
            <SevenMenu />
          </SevenSection>
        </TransparentArea>
      </MainContainer>
    </main>
  );
}
