import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StorePageContent from '@/components/sections/StorePageContent';
import { getStoreBySlug, getAllStoreSlugs } from '@/lib/utils/storeData';

interface StorePageProps {
  params: {
    slug: string;
  };
}

// Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

// Generate static params for all stores
export async function generateStaticParams() {
  const slugs = getAllStoreSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function StorePage({ params }: StorePageProps) {
  const store = getStoreBySlug(params.slug);

  if (!store) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <StorePageContent store={store} />
      </main>
      <Footer />
    </>
  );
}

