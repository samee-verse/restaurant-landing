import { motion } from 'framer-motion';
import Logo from '../assets/Sameeverse_Logo.png';
import Story from '../assets/Story.png';
import BackgroundParticles from './BackgroundParticles';

const HeroSection = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-gradient-to-br from-brand-dark to-[#00171F] flex items-center justify-center py-20 overflow-hidden">
      <BackgroundParticles />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={Logo}
              alt="Sameeverse Logo"
              className="w-20 md:w-28 mx-auto drop-shadow-[0_0_20px_rgba(140,95,255,0.5)]"
              animate={{ scale: [1, 1.05, 1], opacity: [1, 0.85, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-purple text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Samee never calls in sick.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-brand-text max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI that takes your restaurant orders — fast, friendly, accurate, and increased check size!

            <br />
            <br />
            Samee AI gives your customers the power to order, re-order, ask questions , and pay—all with their voice. No apps, no waiting. Simple and efficient service.
          </motion.p>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative w-full md:w-1/2 mt-8 mx-auto overflow-hidden"
        >
          

          <motion.div
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="mailto:hello@sameeverse.com?subject=Sameeverse%20Waitlist%20Request"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-brand-teal to-brand-purple text-brand-text px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(74,243,247,0.5)] transition w-full sm:w-auto text-center"
            >
              Join Waitlist
            </motion.a>
            <motion.a
              href="#contact"
              onClick={handleContactClick}
              className="px-8 py-3 rounded-full border-2 border-transparent text-brand-text relative bg-transparent hover:bg-opacity-10 hover:bg-brand-text before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-brand-teal before:to-brand-purple w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* <motion.img
            src={Story}
            alt="Samee AI in Action"
            className="w-full h-80 rounded-xl shadow-lg border border-brand-purple/30 mt-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          /> */}
        </motion.div>
          
        </div>   
        
      </div>
    </section>
  );
};

export default HeroSection;