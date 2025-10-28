import { motion } from 'framer-motion';

const RoadmapSection = () => {
  return (
    <section className="py-20 bg-brand-indigo">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-brand-text mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          From chat to voice — building the future of restaurant AI
        </motion.h2>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 relative">
          {/* First Card */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-brand-teal/20 text-brand-teal text-sm font-medium rounded mb-4">
              Now
            </span>
            <h3 className="text-2xl font-bold text-brand-text mb-3">Chat Ordering</h3>
            <p className="text-brand-muted">
              Automated order-taking through intuitive chat interface
            </p>
            {/* Arrow after first card */}
            <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-[2px] bg-gradient-to-r from-brand-teal to-brand-purple"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-[1px] -translate-y-1/2 w-0 h-0 
                border-t-[6px] border-t-transparent 
                border-l-[8px] border-l-brand-purple
                border-b-[6px] border-b-transparent">
              </div>
            </div>
          </motion.div>

          {/* First Mobile Arrow */}
          <div className="md:hidden h-16 flex items-center justify-center -my-4">
            <div className="w-full flex items-center justify-center">
              <div className="w-8 flex flex-col items-center">
                <div className="w-[2px] h-12 bg-gradient-to-b from-brand-teal to-brand-purple"></div>
                <div className="w-4 h-4 -mt-[1px] relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-[6px] border-l-transparent 
                    border-t-[8px] border-t-brand-purple
                    border-r-[6px] border-r-transparent">
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-brand-teal/20 text-brand-teal text-sm font-medium rounded mb-4">
              Next
            </span>
            <h3 className="text-2xl font-bold text-brand-text mb-3">Voice Ordering</h3>
            <p className="text-brand-muted">
              Natural voice interactions for seamless ordering
            </p>
            {/* Arrow after second card */}
            <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-[2px] bg-gradient-to-r from-brand-teal to-brand-purple"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-[1px] -translate-y-1/2 w-0 h-0 
                border-t-[6px] border-t-transparent 
                border-l-[8px] border-l-brand-purple
                border-b-[6px] border-b-transparent">
              </div>
            </div>
          </motion.div>

          {/* Second Mobile Arrow */}
          <div className="md:hidden h-16 flex items-center justify-center -my-4">
            <div className="w-full flex items-center justify-center">
              <div className="w-8 flex flex-col items-center">
                <div className="w-[2px] h-12 bg-gradient-to-b from-brand-teal to-brand-purple"></div>
                <div className="w-4 h-4 -mt-[1px] relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-[6px] border-l-transparent 
                    border-t-[8px] border-t-brand-purple
                    border-r-[6px] border-r-transparent">
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="inline-block px-3 py-1 bg-brand-teal/20 text-brand-teal text-sm font-medium rounded mb-4">
              Future
            </span>
            <h3 className="text-2xl font-bold text-brand-text mb-3">Smart POS Integration</h3>
            <p className="text-brand-muted">
              Full integration with existing restaurant systems
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;