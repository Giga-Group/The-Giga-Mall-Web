import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageContent from '@/components/sections/ServicePageContent';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/utils/servicesData';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServicePageContent service={service} />
      </main>
      <Footer />
    </>
  );
}

