import Logo from '../assets/Sameeverse_Logo.png';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Approximate height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-center">
            <img src={Logo} alt="Sameeverse Logo" className="h-12 md:h-24 mb-2" />
            <p className="text-brand-muted text-sm max-w-[260px] text-center md:text-left">
              AI-powered ordering system for modern restaurants
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-brand-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#hero" 
                  className="text-brand-muted hover:text-brand-teal transition-colors"
                  onClick={(e) => handleNavClick(e, '#hero')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#vision" 
                  className="text-brand-muted hover:text-brand-teal transition-colors"
                  onClick={(e) => handleNavClick(e, '#vision')}
                >
                  Vision
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-brand-muted hover:text-brand-teal transition-colors"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="text-center md:text-left">
            <h4 className="text-brand-text font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-brand-muted">
              <li>
                <a 
                  href="mailto:hello@sameeverse.com" 
                  className="hover:text-brand-teal transition-colors"
                >
                  hello@sameeverse.com
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-brand-teal transition-colors"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Toronto, ON Canada
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-brand-teal to-brand-purple my-8" />

        {/* Copyright */}
        <div className="text-center text-brand-muted text-sm">
          © 2025 Sameeverse Inc. | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;