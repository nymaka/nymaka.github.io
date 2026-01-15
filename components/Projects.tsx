import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, Category } from '../types';

const Categories: Category[] = ['All', 'Design', 'Mechatronics/Electronics', 'Aero', 'Misc.'];

// --- Sub-component for individual Project Cards with SLIDING Slideshow ---
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
      }, 4000); 
      return () => clearInterval(interval);
    }
  }, [project.images.length, project.images]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative h-96 cursor-pointer perspective-1000"
      onClick={onClick}
    >
      <div className="w-full h-full bg-white dark:bg-navy rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 transition-transform duration-500 group-hover:-translate-y-2">
        {/* Image Area */}
        <div className="h-48 overflow-hidden relative bg-navy/10">
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/0 transition-colors z-10"></div>
          
          {/* 
             CRITICAL FIXES FOR SLIDING:
             1. Removed mode="wait" (allows images to slide over each other)
             2. Changed animation to x-axis (100% -> 0 -> -100%)
          */}
          <AnimatePresence initial={false}>
            <motion.img 
              key={activeImageIndex}
              src={project.images[activeImageIndex]} 
              alt={project.title} 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-navy/80 text-teal text-xs font-mono px-3 py-1 rounded backdrop-blur-md border border-teal/20">
              {project.category}
            </span>
          </div>

          {/* Slide Indicator Dots */}
          {project.images.length > 1 && (
            <div className="absolute bottom-2 left-0 w-full flex justify-center gap-1 z-20">
              {project.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeImageIndex 
                      ? 'bg-teal w-3' 
                      : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy dark:text-paper mb-2 group-hover:text-teal transition-colors">{project.title}</h3>
          <p className="text-slate text-sm line-clamp-2 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map(tech => (
              <span key={tech} className="text-xs bg-gray-100 dark:bg-white/5 text-navy dark:text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs text-slate px-2 py-1">+{project.techStack.length - 3}</span>
            )}
          </div>
        </div>

        {/* Hover Overlay 'View Details' */}
        <div className="absolute inset-0 bg-teal/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          <span className="text-navy font-bold text-lg border-2 border-navy px-6 py-2 rounded">View Details</span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      setCurrentModalImageIndex(0);
    }
  }, [selectedId]);

  const nextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentModalImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentModalImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#021d33] relative transition-all overflow-x-hidden duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy dark:text-paper mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal mx-auto rounded-full"></div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm border transition-all ${
                filter === cat 
                  ? 'bg-navy text-teal border-navy dark:bg-teal dark:text-navy dark:border-teal' 
                  : 'bg-transparent text-slate border-slate/30 hover:border-teal hover:text-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedId(project.id)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#011627] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-teal/20"
            >
              {/* Carousel Header Image */}
              <div className="relative h-64 md:h-96 bg-black group overflow-hidden">
                {/* 
                   Applied the same SLIDE fix to the Modal 
                   Removed mode="wait" and added x-axis animation
                */}
                <AnimatePresence initial={false}>
                    <motion.img 
                        key={currentModalImageIndex}
                        src={selectedProject.images[currentModalImageIndex]} 
                        alt={selectedProject.title} 
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full h-full object-contain bg-black/50 absolute inset-0" 
                    />
                </AnimatePresence>

                {/* Close Button */}
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 bg-navy/50 hover:bg-red text-white rounded-full transition-colors backdrop-blur-md z-20"
                >
                  <X size={24} />
                </button>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                    <>
                        <button 
                            onClick={prevModalImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-teal text-white rounded-full backdrop-blur-sm transition-all z-10 opacity-40 group-hover:opacity-100"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={nextModalImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-teal text-white rounded-full backdrop-blur-sm transition-all z-10 opacity-40 group-hover:opacity-100"
                        >
                            <ChevronRight size={24} />
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
                            {selectedProject.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentModalImageIndex(idx); }}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentModalImageIndex ? 'bg-teal w-4' : 'bg-white/50 hover:bg-white'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-navy dark:text-paper mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-teal/10 text-teal border border-teal/30 rounded-full text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h4 className="text-xl font-bold text-navy dark:text-paper mb-4">Project Overview</h4>
                        <p className="text-slate dark:text-gray-300 leading-relaxed mb-6">
                            {selectedProject.longDescription}
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl h-fit">
                        <h4 className="text-lg font-bold text-navy dark:text-paper mb-4">Links & Resources</h4>
                        <div className="space-y-3">
                            {selectedProject.links.github && (
                                <a href={selectedProject.links.github} className="flex items-center gap-3 text-slate hover:text-teal dark:text-gray-300 dark:hover:text-teal transition-colors">
                                    <Github size={20} /> View Code
                                </a>
                            )}
                            {selectedProject.links.demo && (
                                <a href={selectedProject.links.demo} className="flex items-center gap-3 text-slate hover:text-teal dark:text-gray-300 dark:hover:text-teal transition-colors">
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}
                            {selectedProject.links.docs && (
                                <a href={selectedProject.links.docs} className="flex items-center gap-3 text-slate hover:text-teal dark:text-gray-300 dark:hover:text-teal transition-colors">
                                    <FileText size={20} /> Technical Report
                                </a>
                            )}
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
