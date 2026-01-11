import React from 'react';
import { Project, Experience, Skill, RadarData } from './types';
import { 
  Box, 
  Cpu, 
  Wind, 
  Code, 
  PenTool, 
  Layers,
  Zap,
  Anchor,
  Settings
} from 'lucide-react';

export const SOCIALS = {
  email: "engineer@example.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
};

export const RADAR_DATA: RadarData[] = [
  { subject: 'CAD/Design', A: 95, fullMark: 100 },
  { subject: 'Simulation', A: 85, fullMark: 100 },
  { subject: 'Programming', A: 75, fullMark: 100 },
  { subject: 'Electronics', A: 80, fullMark: 100 },
  { subject: 'Analysis', A: 90, fullMark: 100 },
  { subject: 'Prototyping', A: 88, fullMark: 100 },
];

export const SKILLS: Skill[] = [
  { name: 'SolidWorks', level: 95, category: 'Software' },
  { name: 'Fusion 360', level: 90, category: 'Software' },
  { name: 'MATLAB', level: 85, category: 'Software' },
  { name: 'ANSYS Fluent', level: 80, category: 'Software' },
  
  { name: 'Python', level: 85, category: 'Programming' },
  { name: 'C++', level: 70, category: 'Programming' },
  { name: 'Arduino', level: 90, category: 'Programming' },
  
  { name: 'CFD', level: 80, category: 'Technical' },
  { name: 'FEA', level: 85, category: 'Technical' },
  { name: '3D Printing', level: 95, category: 'Technical' },
  { name: 'PCB Design', level: 75, category: 'Technical' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'B.S. Aerospace Engineering',
    company: 'Tech University',
    period: '2021 - Present',
    description: 'Specializing in Aerodynamics and Propulsion. GPA: 3.9/4.0.',
    type: 'Education'
  },
  {
    id: '2',
    role: 'Mechatronics Intern',
    company: 'AeroSpace Dynamics Inc.',
    period: 'Summer 2023',
    description: 'Designed and prototyped a servo-actuated control surface mechanism for UAVs. Reduced weight by 15% using topology optimization.',
    type: 'Work'
  },
  {
    id: '3',
    role: 'Propulsion Lead',
    company: 'Rocketry Club',
    period: '2022 - 2023',
    description: 'Led a team of 5 to design a hybrid rocket engine. Successfully reached 10,000ft altitude in competition.',
    type: 'Work'
  },
  {
    id: '4',
    role: 'CSWA - Certified SolidWorks Associate',
    company: 'Dassault Systèmes',
    period: '2022',
    description: 'Certification ID: 123-456-789',
    type: 'Certification'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hybrid Rocket Engine',
    category: 'Aero',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Design and simulation of a sub-scale hybrid rocket engine using paraffin wax and nitrous oxide.',
    longDescription: 'This project involved the complete thermodynamic cycle analysis, nozzle design using the Method of Characteristics in MATLAB, and CFD validation in ANSYS Fluent. We manufactured the casing using carbon fiber composites and successfully test-fired the engine, achieving 500N of thrust for 10 seconds.',
    techStack: ['MATLAB', 'ANSYS', 'SolidWorks', 'Composites'],
    links: {
      github: '#',
      docs: '#'
    }
  },
  {
    id: '2',
    title: '6-DOF Robotic Arm',
    category: 'Mechatronics',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'A fully 3D-printed robotic arm with inverse kinematics control written in Python.',
    longDescription: 'Designed from scratch in Fusion 360, this arm utilizes high-torque stepper motors with closed-loop control. The control software implements inverse kinematics to move the end-effector to Cartesian coordinates. The system is powered by an ESP32 microcontroller.',
    techStack: ['Python', 'Fusion 360', 'C++', 'ESP32', '3D Printing'],
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    id: '3',
    title: 'UAV Airfoil Optimization',
    category: 'CAD',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Parametric modeling and aerodynamic optimization of a high-lift airfoil for a heavy-lift drone.',
    longDescription: 'Leveraged XFoil and a Python genetic algorithm script to optimize airfoil geometry for maximum lift-to-drag ratio at low Reynolds numbers. The final design was modeled in SolidWorks and validated in wind tunnel testing.',
    techStack: ['SolidWorks', 'Python', 'XFoil', 'Aerodynamics'],
    links: {
      docs: '#'
    }
  },
  {
    id: '4',
    title: 'Mars Rover Chassis',
    category: 'CAD',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Rocker-bogie suspension system design for a university rover challenge.',
    longDescription: 'Detailed mechanical design of a rugged suspension system capable of traversing obstacles up to 2x wheel diameter. Performed FEA static analysis to ensure structural integrity under 3G loads.',
    techStack: ['SolidWorks', 'FEA', 'Simulation'],
    links: {
      github: '#'
    }
  },
  {
    id: '5',
    title: 'Autonomous Drone Flight Controller',
    category: 'Mechatronics',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Custom PCB design and PID flight control logic for a quadcopter.',
    longDescription: 'Designed a custom flight controller PCB using KiCAD, integrating an STM32 processor and IMU. Wrote the stabilization and navigation firmware from scratch in C, implementing cascaded PID loops.',
    techStack: ['KiCAD', 'C', 'STM32', 'Control Theory'],
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    id: '6',
    title: 'Supersonic Nozzle Flow',
    category: 'Aero',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'CFD study of shockwave formation in convergent-divergent nozzles.',
    longDescription: 'A study focusing on the compressible flow behavior inside a rocket nozzle. Analyzed the effects of over-expansion and under-expansion on thrust efficiency.',
    techStack: ['ANSYS Fluent', 'CFD', 'Gas Dynamics'],
    links: {
      docs: '#'
    }
  }
];