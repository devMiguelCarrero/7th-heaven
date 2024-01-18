import type { Metadata } from 'next';
import Head from 'next/head';
import '@/shared/common/main-split.scss';

import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import SevenSection, { SectionInner } from '@/components/Atoms/Section/Section';
import TransparentArea from '@/components/Atoms/TransparentArea/TransparentArea';
import SevenMenu from '@/components/Molecules/SevenMenu/SevenMenu';

export const metadata: Metadata = {
  title: '7th Heaven',
  description: 'Original Final Fantasy 7 PS1 game guide and database',
  keywords: ['final fantasy', 'final fantasy 7'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <body suppressHydrationWarning={true}>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
