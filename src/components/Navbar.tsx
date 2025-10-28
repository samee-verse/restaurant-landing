import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from '../assets/Sameeverse_Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-brand-dark/70 backdrop-blur-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <motion.img
            src={Logo}
            alt="Sameeverse Logo"
            className="h-8 md:h-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-purple font-semibold text-lg">
            SameeVerse
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#hero">Home</NavLink>
          <NavLink href="#vision">Vision</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <motion.a
            href="mailto:hello@sameeverse.com?subject=Sameeverse%20Waitlist%20Request"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-brand-teal to-brand-purple text-brand-text px-5 py-2 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(74,243,247,0.5)] transition"
          >
            Join Waitlist
          </motion.a>
        </div>

        <motion.button 
          className="md:hidden text-brand-text relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
            />
          </svg>
        </motion.button>

        <motion.div
          className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-md md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#hero" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink href="#vision" onClick={() => setIsOpen(false)}>Vision</NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
            <motion.a
              href="mailto:hello@sameeverse.com?subject=Sameeverse%20Waitlist%20Request"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-brand-teal to-brand-purple text-brand-text px-5 py-2 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(74,243,247,0.5)] transition w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Join Waitlist
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Approximate height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      if (onClick) onClick();
    }
  };

  return (
    <motion.a
      href={href}
      className="text-brand-text hover:text-brand-teal transition-colors"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
    >
      {children}
    </motion.a>
  );
};

export default Navbar;