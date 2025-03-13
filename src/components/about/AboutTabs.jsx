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
      <div className="w-full">
        {tabData.map((tab) => (
            <div
                key={tab.key}
                className="mt-8 rounded-2xl bg-white border shadow-mdtext-blue-950 cursor-pointer"
                role="button"
                onClick={() => handleTabClick(tab.key)}
            >
              {!activeTab && (
                  <h3 className="mb-4 text-2xl font-bold ">{tab.label}</h3>
              )}

              {activeTab === tab.key && (
                  <div>
                    <Image
                        src={tab.image}
                        alt={tab.label}
                        width={500}
                        height={300}
                        className="object-cover mb-4 w-full h-[30vh] bg-gradient-to-r from-blue-950 to-transparent"
                    />
                    <div className='h-[30vh] mt-[-30vh] p-4'>
                      <h3 className="mb-4 text-2xl font-bold text-white pt-4">{tab.label}</h3>

                      <p className="text-lg leading-relaxed text-blue-900">
                        {tab.content}
                      </p>
                    </div>

                  </div>
              )}
            </div>
        ))}
      </div>
  );
};

export default AboutTabs;
