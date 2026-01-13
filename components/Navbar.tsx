import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Plane } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-teal text-navy' : 'bg-navy text-teal'} transition-colors`}>
              <Plane className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-500" />
            </div>
            <span className={`font-sans font-bold text-xl tracking-wider ${scrolled || darkMode ? 'text-paper' : 'text-navy'} dark:text-paper`}>
              NIRUKT'S<span className="text-teal"> AEROFOLIO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-mono text-sm uppercase tracking-widest hover:text-teal transition-colors ${scrolled || darkMode ? 'text-paper/80' : 'text-navy/80'} dark:text-paper/80`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-white/10 transition-colors ${scrolled || darkMode ? 'text-paper' : 'text-navy'} dark:text-paper`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full hover:bg-white/10 transition-colors ${scrolled || darkMode ? 'text-paper' : 'text-navy'} dark:text-paper`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`text-teal focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy border-t border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-paper hover:text-teal hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;