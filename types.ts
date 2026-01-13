import React from 'react';

export type Category = 'All' | 'Design' | 'Mechatronics/Electronics' | 'Aero' | 'Misc.';

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  longDescription: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
  category: 'Software' | 'Programming' | 'Technical';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string | React.ReactNode;
  type: 'Education' | 'Work' | 'Certification';
}

export interface RadarData {
  subject: string;
  A: number; // Current Level
  fullMark: number;
}