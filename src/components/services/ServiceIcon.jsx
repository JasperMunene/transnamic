import { FC } from 'react';
import { Building2, HardHat, Home, CableCar, Pickaxe, Drill, Truck } from 'lucide-react';

import { cn } from '@/lib/utils';

const ServiceIcon = ({ type, className }) => {
  const icons = {
    sustainable: Building2,
    construction: HardHat,
    residential: Home,
    car: CableCar,
    pickaxe: Pickaxe,
    drill: Drill ,
    truck: Truck
  };

  const Icon = icons[type];

  return (
    <div className={cn(
      "flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 dark:bg-gray-900",
      className
    )}>
      <Icon className="h-8 w-8 text-red-500" />
    </div>
  );
};

export default ServiceIcon;