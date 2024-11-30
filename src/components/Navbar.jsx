"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './Header/DarkModeSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={cn(
        'z-50 fixed top-0 left-0 right-0 backdrop-blur-md',
        'lg:top-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-auto lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-300 dark:lg:border-gray-700'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Transnamic
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-gray-600 dark:text-gray-300 font-medium group transition duration-200 p-[0.4rem]"
              >
                <span className="absolute inset-0 rounded-md bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-20 group-hover:scale-105 transform transition-all duration-500"></span>
                <span className="relative z-10 group-hover:text-red-600 dark:group-hover:text-red-400">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get a quote
            </Button>
          </div>

          {/* Mode Toggle */}
          <div className="hidden md:flex">
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ModeToggle className="mr-4" />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-200 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-[#020817] shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
