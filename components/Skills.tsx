import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { SKILLS, RADAR_DATA } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-paper dark:bg-navy overflow-hidden transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy dark:text-paper mb-4">Technical Proficiency</h2>
          <p className="text-slate dark:text-gray-400 max-w-2xl mx-auto">
            A balanced mix of design intuition, analytical capability, and hands-on manufacturing skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Radar Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
                 {/* Recharts Radar */}
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                        <PolarGrid stroke="#8d99ae" strokeOpacity={0.3} />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#8d99ae', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name="Skill"
                            dataKey="A"
                            stroke="#2EC4B6"
                            strokeWidth={3}
                            fill="#2EC4B6"
                            fillOpacity={0.4}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Skill Bars */}
          <div className="space-y-8">
            {['Software', 'Programming', 'Technical'].map((category, catIndex) => (
                <div key={category}>
                    <h3 className="text-xl font-bold text-navy dark:text-white mb-4 border-l-4 border-orange pl-3">
                        {category}
                    </h3>
                    <div className="space-y-4">
                        {SKILLS.filter(s => s.category === category).map((skill, index) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-navy dark:text-gray-300">{skill.name}</span>
                                    <span className="text-sm font-mono text-teal">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className="bg-gradient-to-r from-teal to-blue-500 h-2.5 rounded-full"
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;