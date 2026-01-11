import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Grid - CSS Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" 
             style={{ 
                backgroundImage: 'linear-gradient(#2EC4B6 1px, transparent 1px), linear-gradient(90deg, #2EC4B6 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
             }}>
        </div>
        {/* Radial Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent dark:from-navy"></div>
      </div>

      {/* Animated Particles / Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-teal/20 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/5 w-96 h-96 border border-orange/10 rounded-full"
        />
         <motion.div 
          animate={{ x: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-teal to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal border border-teal/30 font-mono text-xs tracking-wider mb-6">
            WELCOME TO MY PORTFOLIO
          </span>
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-navy dark:text-paper mb-6 tracking-tight">
            Aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue-500">Aerospace</span> Engineer
          </h1>
          <p className="text-lg md:text-xl text-slate dark:text-gray-400 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            Bridging the gap between <strong>CAD Design</strong>, <strong>Mechatronics</strong>, and <strong>Aerodynamics</strong>. 
            Building the future of flight, one prototype at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-teal hover:bg-teal/90 text-navy font-bold rounded-sm transition-all shadow-[4px_4px_0px_0px_rgba(1,22,39,1)] dark:shadow-[4px_4px_0px_0px_rgba(253,255,252,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-navy dark:border-paper text-navy dark:text-paper font-bold rounded-sm hover:bg-navy hover:text-teal dark:hover:bg-paper dark:hover:text-navy transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-teal cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;