import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import data from '@/data/materia/materia.json';
import Title from '@/components/Atoms/Title';
import Paragraph from '@/components/Atoms/Paragraph';
import Separator from '@/components/Atoms/Separator/Separator';
import StandardLayout from '@/components/Organisms/Layout/StandardLayout/StandardLayout';
import Materia from '@/components/Molecules/Materia/Materia';
import Scrolleable from '@/components/Atoms/Scrolleable/Scrolleable';
import Level from '@/components/Atoms/Level/Level';

interface Props {
  params: any;
}

const MateriaDetailPage: FC<Props> = ({ params }) => {
  const materia = data.find((materia) => materia.slug === params.slug);

  return (
    <>
      {materia && (
        <StandardLayout>
          <Title tag="h1" variant="regular">
            <Materia
              slug="knights-of-the-round"
              variant={materia['materia type'].toLowerCase()}
              name={materia.materia}
            />
          </Title>
          <Paragraph>{materia['menu description']}</Paragraph>
          <Separator />
          <Scrolleable>
            <Title tag="h3">AP needed</Title>
            <Level level={2} />
            <Level level={3} />
            <Level level={4} />
          </Scrolleable>
        </StandardLayout>
      )}
    </>
  );
};
export default MateriaDetailPage;
