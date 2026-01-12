import React, { useState } from 'react';
import { EXPERIENCE, RESUME_URL } from '../constants';
import { Briefcase, GraduationCap, Award, Download, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#021d33]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
                <h2 className="text-4xl font-bold text-navy dark:text-paper mb-2">Experience & Education</h2>
                <div className="w-20 h-1 bg-red rounded-full"></div>
            </div>
            
            {/* Desktop Buttons */}
            <div className="hidden sm:flex gap-3">
                 <button 
                    onClick={() => setShowResume(true)}
                    className="flex items-center gap-2 border border-navy text-navy px-4 py-2 rounded hover:bg-navy/10 dark:border-teal dark:text-teal dark:hover:bg-teal/10 transition-colors font-medium"
                >
                    <Eye size={18} /> View CV
                </button>
                <a 
                    href={RESUME_URL}
                    download="Nirukts_CV.pdf"
                    className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded hover:bg-navy/80 dark:bg-teal dark:text-navy transition-colors font-medium"
                >
                    <Download size={18} /> Download
                </a>
            </div>
        </div>

        {/* Timeline */}
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
        
        {/* Mobile Buttons */}
        <div className="mt-12 sm:hidden grid grid-cols-2 gap-4">
            <button 
                onClick={() => setShowResume(true)}
                className="flex items-center justify-center gap-2 border border-navy text-navy px-4 py-3 rounded hover:bg-navy/10 dark:border-teal dark:text-teal dark:hover:bg-teal/10 transition-colors font-medium"
            >
                <Eye size={18} /> View CV
            </button>
            <a 
                href={RESUME_URL}
                download="Nirukts_CV.pdf"
                className="flex items-center justify-center gap-2 bg-navy text-white px-4 py-3 rounded hover:bg-navy/80 dark:bg-teal dark:text-navy transition-colors font-medium"
            >
                <Download size={18} /> Download
            </a>
        </div>

      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#011627] w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl border border-teal/20 flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50 dark:bg-navy">
                <h3 className="text-lg font-bold text-navy dark:text-paper flex items-center gap-2">
                    <Briefcase size={20} className="text-teal" /> Resume
                </h3>
                <div className="flex gap-2">
                    <a 
                        href={RESUME_URL}
                        download="Resume.pdf"
                        className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors text-navy dark:text-paper"
                        title="Download"
                    >
                        <Download size={20} />
                    </a>
                    <button 
                        onClick={() => setShowResume(false)}
                        className="p-2 hover:bg-red hover:text-white rounded-full transition-colors text-navy dark:text-paper"
                    >
                        <X size={20} />
                    </button>
                </div>
              </div>

              {/* PDF Embed */}
              <div className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-hidden relative">
                  <iframe 
                    src={RESUME_URL} 
                    className="w-full h-full" 
                    title="Resume PDF"
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                        <p className="mb-4 text-navy dark:text-paper">Your browser does not support embedded PDFs.</p>
                        <a href={RESUME_URL} className="text-teal underline">Download it here</a>
                    </div>
                  </iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;