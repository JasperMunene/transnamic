'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabData = [
  {
    key: '1',
    value: 'mission',
    label: 'Our Mission',
    content:
        'Our mission is to deliver outstanding, innovative construction solutions that consistently exceed expectations. We combine technical expertise with creative problem-solving to create spaces that inspire and endure.',
    image:
        'https://cdn.prod.website-files.com/66cbf3a93b65cddabce581a1/66d8217d51f4e338a0c24d3b_About%20Item%20Block%20Banner-1-p-500.jpg',
  },
  {
    key: '2',
    value: 'history',
    label: 'Our History',
    content:
        "Founded in 2012, we've grown from a small local contractor to a leading regional construction firm. Our journey has been marked by landmark projects, continuous innovation, and an unwavering commitment to quality.",
    image:
        'https://cdn.prod.website-files.com/66cbf3a93b65cddabce581a1/66d8217d51f4e338a0c24d3b_About%20Item%20Block%20Banner-1-p-500.jpg',
  },
  {
    key: '3',
    value: 'values',
    label: 'Our Values',
    content:
        'Integrity, excellence, and innovation form the cornerstone of our operations. We believe in sustainable practices, fostering strong relationships, and creating lasting value for our clients and communities.',
    image:
        'https://cdn.prod.website-files.com/66cbf3a93b65cddabce581a1/66d8217d51f4e338a0c24d3b_About%20Item%20Block%20Banner-1-p-500.jpg',
  },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (key) => {
    setActiveTab((prev) => (prev === key ? null : key));
  };

  return (
      <div className="w-full max-w-4xl mx-auto space-y-10">
        {tabData.map((tab) => (
            <div
                key={tab.key}
                className={`border rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform transform ${
                    activeTab === tab.key ? 'scale-105' : 'hover:scale-105'
                }`}
                role="button"
                onClick={() => handleTabClick(tab.key)}
            >
              {!activeTab || activeTab !== tab.key ? (
                  <div className="bg-gradient-to-r dark:from-gray-900/50 dark:to-transparent p-6 2xl:p-10">
                    <h3 className="text-xl font-semibold text-red-500">{tab.label}</h3>
                  </div>
              ) : (
                  <div className="relative">
                    <Image
                        src={tab.image}
                        alt={tab.label}
                        width={500}
                        height={300}
                        className="object-cover w-full h-60"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 text-blue-50">{tab.label}</h3>
                      <p className="text-sm font-medium md:font-semibold text-blue-50 leading-relaxed">{tab.content}</p>
                    </div>
                  </div>
              )}
            </div>
        ))}
      </div>
  );
};

export default AboutTabs;
