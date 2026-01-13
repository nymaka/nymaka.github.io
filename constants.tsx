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
    description: 'Studying Design, Materials, Mechatronics, Mechanics and Thermofluids. I am most passionate about design and mechatronics. Currently predicted a 1st.',
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
    title: 'CFD Solver for 4-digit NACA Aerofoils',
    category: 'Aero',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Created a web application that modeled airflow around NACA aerofoils.',
    longDescription: 'Using python, I used a finite difference method along with a NACA aerofoil generator to make a web-based CFD solver. The web app also included a forum for discussion.',
    techStack: ['Python', 'CFD', 'HTML/CSS', 'Databases', 'Maths'],
    links: {
      github: '#',  
    }
  },
  {
    id: '2',
    title: 'Door Detection System with Person Counter',
    category: 'Mechatronics/Electronics',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Designed a calibrated ultrasonic sensing system for distance measurement and door-based person counting.',
    longDescription: 'Developed a door-detection and person-counting system using an ultrasonic sensor, using distance measurements to detect people passing through a doorway and increment a counter. Documented the full design, experimental methodology, results, and limitations in a structured mechatronics report.',
    techStack: ['MATLAB', 'Electric Circuits', 'Arduino', 'Signal Processing', 'Embedded Sytems', 'Report Writing'],
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    id: '3',
    title: 'CAD of Wing and Fuselage Geometry for a Drone',
    category: 'Design',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Generating a CAD model that can be used to generate molds for fuselage production and for CFD analysis.',
    longDescription: 'Developed a CAD model after manual calculations of a drone deisgned to competition regulations. Model was then used for manufacturing and for CFD to make sure stable flight would be achieved.',
    techStack: ['Autodesk Inventor', 'Ansys Fluent'],
    links: {
      docs: '#'
    }
  },
  {
    id: '4',
    title: 'Planetary Gearbox',
    category: 'Design',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Designed a planetary gearbox with a stationary ring gear with appropriate movement constraints. Animated and produced exploded views.',
    longDescription: 'Designed a multi-stage planetary gearbox using Inventor and integrated into a model of the lower compression stage of a turbofan, so that the main fan spins slower than the lower compression fans. Also produced a video with animations and technical views outlining its operation.',
    techStack: ['Autodesk Inventor', 'Video Editing', 'Animation'],
    links: {
      github: '#'
    }
  },
  {
    id: '5',
    title: 'Wireless Speaker',
    category: 'Mechatronics/Electronics',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Used broken headphones and laptop speakers to make a wireless speaker that worked using a 2.4 GHz receiver.',
    longDescription: 'This was one of my first projects. I used the logic board from the broken headphones and used a multimeter to figure out inputs and outputs. I then soldered the laptop speakers for working wireless speakers. Later, to increase volume, I made a basic amplifier setup using a transistor, capacitor and some resistors.',
    techStack: ['Electric Circuits', 'Audio', 'Sustainability', 'Reverse Engineering'],
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    id: '6',
    title: 'Homerton Design Challenge: Solve a UN Goal',
    category: 'Misc.',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'Worked in a team to create a theoretical solution for food security using unmanned drones.',
    longDescription: 'We designed an unmanned drone system that would monitor plants for abnormal signs indicating disease and then neutralise diseased plants, increasing farm yields through early detection. Our report won "Runner-up for Best Research" at Homerton College, Cambridge.',
    techStack: ['Report Writing', 'Research', 'Teamwork', 'Sustainability'],
    links: {
      docs: '#'
    } 
  }
  
];