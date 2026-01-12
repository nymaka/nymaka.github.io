import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, PenTool, GraduationCap } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="bg-white dark:bg-navy/50 border border-gray-200 dark:border-teal/20 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
    <Icon className="w-8 h-8 text-teal mx-auto mb-3" />
    <div className="text-3xl font-bold text-navy dark:text-paper mb-1">{value}</div>
    <div className="text-sm font-mono text-slate uppercase tracking-wide">{label}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-paper dark:bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Graphic Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-navy dark:border-teal/30">
                {/* Placeholder for professional photo */}
                <img 
                    src="https://picsum.photos/800/800?grayscale" 
                    alt="Engineer working" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-teal/20 mix-blend-overlay"></div>
            </div>
            {/* Decorative box behind */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange/50 rounded-lg -z-10 hidden md:block"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-teal"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-paper font-sans">About Me</h2>
            </div>
            
            <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-6">
                I am a first year Aerospace Engineering student with a deep passion for 
                <span className="text-teal font-semibold"> aerodynamics </span> and 
                <span className="text-teal font-semibold"> mechatronics</span>.
            </p>
            <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-8">
                I am a highly motivated engineering student seeking an engineering internship position to
                 develop my skills in project management/delivery, research, and technical proficiency. Eager to
                 contribute to teams and gain hands-on experience in a real-world engineering environment.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               <StatCard icon={Layers} value="5+" label="Projects" />
               <StatCard icon={Award} value="4" label="A-Levels" />
               <StatCard icon={PenTool} value="3" label="Years CAD" />
               <StatCard icon={GraduationCap} value="1st" label="Average Grade" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;