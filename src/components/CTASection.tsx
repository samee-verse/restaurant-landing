import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand.teal to-brand.purple">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-brand.text mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We're onboarding our first pilot restaurants — join us and shape the future of dining.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="#join"
              className="inline-block bg-brand.dark text-brand.text px-8 py-3 rounded-full text-lg font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(11,14,26,0.8)' }}
              transition={{ duration: 0.2 }}
            >
              Join Waitlist
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;