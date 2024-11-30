import Hero from '@/components/hero/hero';
import Navbar from '@/components/Navbar'
import Stats from '@/components/stats/Stats';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Stats />
      </div>
    </main>
  );
}