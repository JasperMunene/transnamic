import AboutSection from '@/components/about/AboutSection';
import Hero from '@/components/hero/hero';
import Navbar from '@/components/Navbar'
import Services from '@/components/services/Services';
import Stats from '@/components/stats/Stats';
import Works from '@/components/works/Works';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Stats />
        <Services />
        <AboutSection />
      </div>
    </main>
  );
}