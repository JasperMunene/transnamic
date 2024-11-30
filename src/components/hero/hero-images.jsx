"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroImages() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex flex-col items-center sm:block">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Image
          src="https://cdn.prod.website-files.com/6329ae223e4134f94a1f5728/6329c0599e19769163da5257_baner%20img%201.png"
          alt="Construction site"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-xl block"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative sm:absolute sm:left-[-2rem] sm:bottom-[-2rem] z-20 w-[300px] mt-4 sm:mt-0"
      >
        <Image
          src="/image.png"
          alt="Construction equipment"
          width={300}
          height={200}
          className="object-cover rounded-lg shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden sm:block absolute right-[-2rem] top-[-2rem] z-0 w-[53%] h-[110%] border-2 border-gray-200 dark:border-gray-800 rounded-lg"
      />
    </div>
  );
}
