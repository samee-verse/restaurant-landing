import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  description: string;
  status: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Chat Ordering',
    description: 'Automated order-taking through intuitive chat interface',
    status: 'Now',
  },
  {
    title: 'Voice Ordering',
    description: 'Natural voice interactions for seamless ordering',
    status: 'Next',
  },
  {
    title: 'Smart POS Integration',
    description: 'Full integration with existing restaurant systems',
    status: 'Future',
  },
];

const VisionSection = () => {
  return (
    <section className="py-20 bg-brand.indigo">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-brand.text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          From chat to voice — building the future of restaurant AI.
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-brand.teal to-brand.purple transform -translate-y-1/2" />

            {/* Timeline items */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-1 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-brand.teal to-brand.purple"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h3 className="mt-4 text-xl font-semibold text-brand.text">
                      {item.title}
                    </h3>
                    <span className="text-sm text-brand.teal font-medium mt-1">
                      {item.status}
                    </span>
                    <p className="mt-2 text-brand.muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;