import Grid from '@/components/Atoms/Grid/Grid';
import Materia from '@/components/Molecules/Materia/Materia';
import Paragraph from '@/components/Atoms/Paragraph';
import Scrolleable from '@/components/Atoms/Scrolleable/Scrolleable';
import SelectionableItem from '@/components/Atoms/SelectionableItem/SelectionableItem';
import Separator from '@/components/Atoms/Separator/Separator';
import Title from '@/components/Atoms/Title';
import StandardLayout from '@/components/Organisms/Layout/StandardLayout/StandardLayout';

import data from '@/data/materia/materia.json';

export default function MateriaPage() {
  const MateriaData = [...data];

  type Materia = {
    id: string;
    slug: string;
  };

  return (
    <StandardLayout>
      <Title tag="h1" variant="regular">
        Materia
      </Title>
      <Paragraph>
        Materia (マテリア, Materia?) are items in the Final Fantasy VII series
        that allow a character to cast spells, summon, and use new command
        abilities, boost stats and give support abilities. Materia form the
        basis of the skill and ability system for Final Fantasy VII, and play a
        prominent role in character skills in other games.
      </Paragraph>
      <Separator />
      <Scrolleable>
        <Grid>
          {MateriaData &&
            MateriaData.map((materia: any) => {
              return (
                <SelectionableItem key={`materia-${materia.id}`}>
                  <Materia
                    linkType="lifestream"
                    variant={materia['materia type']?.toLocaleLowerCase()}
                    name={materia.materia}
                    slug={materia.slug}
                  />
                </SelectionableItem>
              );
            })}
        </Grid>
      </Scrolleable>
    </StandardLayout>
  );
}
