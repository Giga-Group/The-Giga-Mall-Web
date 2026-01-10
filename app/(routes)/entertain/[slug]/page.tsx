import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EntertainPageContent from "@/components/sections/EntertainmentPageContent/EntertainPageContent";
import {
  getAllEntertainSlugs,
  getEntertainBySlug,
} from "@/lib/utils/entertainData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllEntertainSlugs().map((slug) => ({ slug }));
}

export default function EntertainDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const entertain = getEntertainBySlug(params.slug);

  if (!entertain) notFound();

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
