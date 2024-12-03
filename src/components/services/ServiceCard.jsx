import { FC } from 'react';
import ServiceIcon from './ServiceIcon';

const ServiceCard = ({ type, title, description, image }) => {
  return (
    <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-900/50">
      <ServiceIcon type={type} />
      
      <h3 className="mt-6 text-2xl font-bold text-blue-900 dark:text-white">
        {title}
      </h3>
      
      <p className="mt-4 text-gray-600 dark:text-gray-100">
        {description}
      </p>
      
      <div className="mt-8 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ServiceCard;