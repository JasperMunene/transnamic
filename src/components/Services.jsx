"use client";

import React from 'react';
import { Badge } from './ui/badge';
import Image from 'next/image';
import { Truck, Warehouse, Building2, HardHat, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Truck className="w-6 h-6 text-red-600" />,
    title: 'Road Freight',
    description: 'Efficient and reliable road transportation services across the country.',
    image: '/road-freight.jpg',
    link: '/services/road-freight'
  },
  {
    icon: <Warehouse className="w-6 h-6 text-red-600" />,
    title: 'Warehousing',
    description: 'Secure storage solutions with state-of-the-art facilities.',
    image: '/warehouse.jpg',
    link: '/services/warehousing'
  },
  {
    icon: <Building2 className="w-6 h-6 text-red-600" />,
    title: 'Construction',
    description: 'Expert construction services for commercial and industrial projects.',
    image: '/construction.jpg',
    link: '/services/construction'
  },
  {
    icon: <HardHat className="w-6 h-6 text-red-600" />,
    title: 'Excavation',
    description: 'Professional excavation services with precision and safety.',
    image: '/excavation.jpg',
    link: '/services/excavation'
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="absolute top-4 left-4">
        <div className="bg-white p-3 rounded-full shadow-lg">
          {service.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link 
          href={service.link}
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group/link"
        >
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-red-100 text-red-600 text-lg mb-6 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            From cargo transit to warehousing,{' '}
            <span className="text-red-600">we offer unparalleled support.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions tailored to meet your construction and logistics needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;