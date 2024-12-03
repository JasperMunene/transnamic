
import { ChevronLeft, ChevronRight } from 'lucide-react';



const ServicesNavigation = ({ onNext, onPrev }) => {
  return (
    <div className="absolute -bottom-16 right-0 flex items-center gap-4">
      <button
        onClick={onPrev}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-900/50 dark:border-gray-950 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-slate-900/90"
        aria-label="Previous services"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={onNext}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-900/50 dark:border-gray-950 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-slate-900/90"
        aria-label="Next services"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ServicesNavigation;