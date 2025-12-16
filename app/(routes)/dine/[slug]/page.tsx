import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DinePageContent from '@/components/sections/DinePageContent';
import { getDineBySlug, getAllDineSlugs } from '@/lib/utils/dineData';

interface DinePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all restaurants
export async function generateStaticParams() {
  const slugs = getAllDineSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function DinePage({ params }: DinePageProps) {
  const dine = getDineBySlug(params.slug);

  if (!dine) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <DinePageContent dine={dine} />
      </main>
      <Footer />
    </>
  );
}

