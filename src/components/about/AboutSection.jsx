import { FC } from 'react';
import { motion } from 'framer-motion';
import AboutTabs from './AboutTabs';
import AboutHeader from './AboutHeader';
import ExperienceCard from './ExperienceCard';

const AboutSection= () => {
  return (
    <section className="bg-white py-24 dark:bg-[#03060C]">
      <div className="container mx-auto px-4">
        <AboutHeader />
        
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ExperienceCard />
          <AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
