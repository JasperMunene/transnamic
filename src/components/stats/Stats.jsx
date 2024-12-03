"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectImages } from './project-images';
import { AnimatedCounter } from './animated-counter';
import Image from 'next/image';

export default function Stats() {
  return (
    <section className="relative bg-white dark:bg-[#03060C] overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Stats Section - 3 columns */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
            {/* First Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <AnimatedCounter end={1600} suffix="k+" />
              <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 mb-6">
                Successfully completed projects across various sectors.
              </p>
              <ProjectImages />
            </motion.div>

            {/* Second Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 mb-6">
                success rate
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-600 group text-lg font-semibold"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Building Image Section - 2 columns */}
          <div className="lg:col-span-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            {/* Yellow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-200/90 to-transparent z-10 dark:from-blue-950" />
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-20 p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white leading-tight">
                Crafting<br />Quality,<br />Building<br />Trust.
              </h2>
            </motion.div>

            {/* Building Sketch */}
            <Image
              src="/r1.jpg"
              alt="Building Sketch"
              fill
              className="object-cover object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}