"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectImages } from './project-images';
import { AnimatedCounter } from './animated-counter';
import Image from 'next/image';

export default function Stats() {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Stats */}
          <div className="space-y-16">
            {/* First Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <AnimatedCounter end={50} suffix="+" />
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
                Successfully completed projects across various sectors.
              </p>
              <ProjectImages />
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

            {/* Second Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
                Building a greener future with every project.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-600 font-medium group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Building Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            {/* red Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br dark:from-gray-900/90 dark:via-gray-950/70 dark:to-transparent z-10  to-transparent" />

            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-20 p-12"
            >
              <h2 className="text-6xl font-bold text-blue-950 dark:text-white leading-tight">
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