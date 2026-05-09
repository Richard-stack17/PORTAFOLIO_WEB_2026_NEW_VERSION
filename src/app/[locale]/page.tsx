import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {setRequestLocale} from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full selection:bg-primary selection:text-white">
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
