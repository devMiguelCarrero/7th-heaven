import { FC, ReactNode } from 'react';

import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import SevenSection, { SectionInner } from '@/components/Atoms/Section/Section';
import TransparentArea from '@/components/Atoms/TransparentArea/TransparentArea';
import SevenMenu from '@/components/Molecules/SevenMenu/SevenMenu';

interface Props {
  children: ReactNode;
}

const StandardLayout: FC<Props> = ({ children }) => {
  return (
    <MainContainer>
      <TransparentArea variant="main-section">
        <SevenSection variant="index-section">
          <SectionInner>{children}</SectionInner>
        </SevenSection>
      </TransparentArea>
      <TransparentArea variant="index-section">
        <SevenSection variant="main-menu-section">
          <SevenMenu />
        </SevenSection>
      </TransparentArea>
    </MainContainer>
  );
};
export default StandardLayout;
