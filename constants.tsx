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

export const RESUME_URL = "./resume.pdf"; 

export const SOCIALS = {
  email: "nirukt@gmail.com",
  linkedin: "https://linkedin.com/in/niruktagrawal",
  github: "https://github.com/nymaka",
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
    role: 'M.Eng Aerospace Engineering',
    company: 'University of Bath',
    period: '2025 - Present',
    description: 'Studying Design, Materials, Mechatronics, Mechanics and Thermofluids. Most enjoy design and mechatronics. Currently predicted a 1st.',
    type: 'Education'
  },
  {
    id: '2',
    role: 'Airline Operations',
    company: 'Virgin Atlantic Airways',
    period: 'Summer 2024',
    description: 'Explored airline operations and maintenance practices. Learnt about the extensive safety precautions taken in commercial aviation along with new sustainability developments such as SAF and the Virgin Flight 100.',
    type: 'Work'
  },
  {
    id: '3',
    role: 'Aerodynamics & Design',
    company: 'Team Bath Drones: First-year drone competition',
    period: '2025 - 2026',
    description: 'Worked with a team of 12 to design a drone against a set of competition regulations. Main focus was on aerodynamics design using CAD and CFD.',
    type: 'Work'
  },
  {
    id: '4',
    role: 'Young Enterprise: Wild Cards',
    company: 'Wild Cards by Aylesbury Grammar School',
    period: '2023 - 2024',
    description: 'Led a team of 16 as Managing Director in the building of a small business from scratch and winning our local area competition. Our product focused on sustainability, generating a revenue of £1500+ in 4 months.',
    type: 'Certification'
  },
  {
    id: '5',
    role: 'A-Levels & GCSEs',
    company: 'Aylesbury Grammar School',
    period: '2018 - 2025',
    description: (
      <>
        <strong>Maths (A*), Physics (A*), Computer Science (A*), Further Maths (A) at A-level.</strong>{' '}
        GCSEs of Maths (9), Additional Maths (A - max grade), Statistics (9), English Language (9), Physics (9), Chemistry (9), Biology (9), Geography (9), Business (8), Engineering (8), English Literature (7), German (7).
      </>
    ),
    type: 'Education'
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