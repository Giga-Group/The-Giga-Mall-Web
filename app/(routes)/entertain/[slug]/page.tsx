import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EntertainPageContent from "@/components/sections/EntertainmentPageContent/EntertainPageContent";
import {
  getAllEntertainSlugs,
  getEntertainBySlug,
} from "@/lib/utils/entertainData";

interface EntertainPageProps {
  params: {
    slug: string;
  };
}

// Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

// Generate static params for all entertainment venues
export async function generateStaticParams() {
  const slugs = getAllEntertainSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function EntertainDetailPage({ params }: EntertainPageProps) {
  const entertain = getEntertainBySlug(params.slug);

  if (!entertain) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <EntertainPageContent entertain={entertain} />
      </main>
      <Footer />
    </>
  );
}
