import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, Category } from '../types';

const Categories: Category[] = ['All', 'CAD', 'Mechatronics', 'Aero'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#021d33] relative">
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
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative h-96 cursor-pointer perspective-1000"
                onClick={() => setSelectedId(project.id)}
              >
                 {/* Card Container */}
                <div className="w-full h-full bg-white dark:bg-navy rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors z-10"></div>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 right-4 z-20">
                            <span className="bg-navy/80 text-teal text-xs font-mono px-3 py-1 rounded backdrop-blur-md border border-teal/20">
                                {project.category}
                            </span>
                        </div>
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
                    <div className="absolute inset-0 bg-teal/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <span className="text-navy font-bold text-lg border-2 border-navy px-6 py-2 rounded">View Details</span>
                    </div>
                </div>
              </motion.div>
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
              <div className="relative h-64 md:h-80">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 bg-navy/50 hover:bg-red text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-navy to-transparent p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-8">
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