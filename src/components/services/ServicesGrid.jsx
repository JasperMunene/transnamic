'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import ServicesNavigation from './ServicesNavigation';

const services = [
  {
    type: 'sustainable' ,
    title: 'Sustainable Building',
    description: 'Implementing eco-friendly practices and materials to create sustainable structures.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: 'construction' ,
    title: 'Construction Management',
    description: 'Ensuring seamless execution of your project with expert from planning to completion.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: 'residential' ,
    title: 'Residential Construction',
    description: 'Delivering custom-built homes that combine comfort, style, and functionality.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: 'drill' ,
    title: 'Borehole',
    description: 'Borehall provides sustainable borehole drilling for water extraction, environmental assessments, and geotechnical applications, delivering efficient solutions for construction and industry.',
    image: 'https://images.unsplash.com/photo-1687669981635-a0becffac6be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },

  {
    type: 'pickaxe',
    title: 'Excavator Operator',
    description: 'Precision for creating accurate and safe foundations, trenches, and site preparation',
    image: 'https://media.istockphoto.com/id/1419307054/photo/excavator-at-a-construction-site-against-sunset-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=S1uBZQUqlZgjCeYVukzk3LqGQpqZ_-dBWx1xiPBlwy4='
  },
  {
    type: 'truck',
    title: 'Road freight',
    description: 'We offer reliable road freight services, ensuring timely delivery across local, regional, and national routes with a fleet of well-maintained vehicles and experienced drivers, providing cost-effective solutions for businesses',
    image: '/truck0001.jpeg'
  }
];

const CARDS_PER_PAGE = 3;

const ServicesGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(services.length / CARDS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentServices = services.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </AnimatePresence>
      
      <ServicesNavigation onNext={nextPage} onPrev={prevPage} />
    </div>
  );
};

export default ServicesGrid;