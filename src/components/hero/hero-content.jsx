"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <p className="text-red-600 font-medium tracking-wider text-sm">
          CONSTRUCTION SOLUTION
        </p>
        <div className="w-[40px] bg-red-600 h-[1.4px]" />
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold leading-tight text-blue-950 dark:text-gray-200"
      >
        Fast and Flexible Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quam 
        architecto expedita facere similique reprehenderit quaerat iusto ad 
        dolorem exercitationem.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 mt-4"
      >
        <Button size="lg" className="bg-red-600 hover:bg-red-700">
          Contact us
        </Button>
        <Button size="lg" variant="outline" className="group">
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </div>
  );
}