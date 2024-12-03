import { motion } from 'framer-motion';
import ServicesGrid from './ServicesGrid';

const Services = () => {
  return (
    <section className="dark:bg-[#03060C] py-24">
      <div className="container mx-auto px-4">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-red-600">
            [What We Do]
          </span>
          <h2 className="text-4xl font-bold text-blue-950 md:text-5xl dark:text-white">
            Delivering Quality from Start to Finish.
          </h2>
        </div>

        <div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
};

export default Services;