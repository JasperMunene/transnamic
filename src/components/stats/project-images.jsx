"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60",
    alt: "Construction project 1"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&auto=format&fit=crop&q=60",
    alt: "Construction project 2"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60",
    alt: "Construction project 3"
  }
];

export function ProjectImages() {
  return (
    <div className="flex -space-x-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.alt}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}