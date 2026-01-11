import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#021d33]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-16">
            <div>
                <h2 className="text-4xl font-bold text-navy dark:text-paper mb-2">Experience & Education</h2>
                <div className="w-20 h-1 bg-red rounded-full"></div>
            </div>
            <button className="hidden sm:flex items-center gap-2 bg-navy text-white px-4 py-2 rounded hover:bg-navy/80 dark:bg-teal dark:text-navy transition-colors font-medium">
                <Download size={18} /> Resume.pdf
            </button>
        </div>

        <div className="relative border-l-2 border-teal/30 ml-3 space-y-12">
            {EXPERIENCE.map((item, index) => {
                const Icon = item.type === 'Education' ? GraduationCap : item.type === 'Certification' ? Award : Briefcase;
                
                return (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 sm:pl-12 group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[11px] top-0 bg-paper dark:bg-navy p-1 rounded-full border border-teal">
                            <div className="w-3 h-3 bg-teal rounded-full group-hover:scale-125 transition-transform"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-navy dark:text-paper flex items-center gap-2">
                                <Icon size={20} className="text-orange" />
                                {item.role}
                            </h3>
                            <span className="font-mono text-sm text-slate dark:text-teal/80 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded w-fit mt-2 sm:mt-0">
                                {item.period}
                            </span>
                        </div>
                        
                        <div className="text-lg font-medium text-teal mb-2">{item.company}</div>
                        <p className="text-slate dark:text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
        
        <div className="mt-12 sm:hidden">
             <button className="w-full flex items-center justify-center gap-2 bg-navy text-white px-4 py-3 rounded hover:bg-navy/80 dark:bg-teal dark:text-navy transition-colors font-medium">
                <Download size={18} /> Download Resume
            </button>
        </div>

      </div>
    </section>
  );
};

export default Experience;