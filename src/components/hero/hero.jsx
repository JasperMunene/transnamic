import { HeroContent } from "./hero-content";
import { HeroImages } from "./hero-images";

export default function Hero() {
  return (
    <section className="w-full py-20 overflow-hidden bg-white dark:bg-[#03060C] ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImages />
        </div>
      </div>
    </section>
  );
}