import { HeroContent } from "./hero-content";
import { HeroImages } from "./hero-images";

export default function Hero() {
  return (
    <section className="w-full py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImages />
        </div>
      </div>
    </section>
  );
}