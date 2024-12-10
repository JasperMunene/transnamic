
import { Button } from '@/components/ui/button';

const AboutHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-600">
          [About Us]
        </span>
        <h2 className="text-4xl font-bold text-blue-900 md:text-5xl">
          Driven by Passion,
          <br />
          Grounded in Quality.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Button
          variant="default"
          className="bg-blue-900 px-8 py-6 text-lg hover:bg-blue-800"
        >
          More About Us
        </Button>
      </motion.div>
    </div>
  );
}

export default AboutHeader;