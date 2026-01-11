import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            
            <h2 className="text-4xl md:text-5xl font-bold text-paper mb-6">Let's Build Something Fly.</h2>
            <p className="text-xl text-slate mb-12 max-w-2xl mx-auto">
                I'm currently looking for full-time positions or internships in Aerospace Engineering and Mechatronics.
            </p>

            <a 
                href={`mailto:${SOCIALS.email}`}
                className="inline-flex items-center gap-3 bg-teal hover:bg-teal/90 text-navy font-bold text-lg px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg shadow-teal/20 mb-16"
            >
                <Mail size={24} />
                Send me an email
            </a>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 border-t border-white/10 pt-12">
                <div className="text-left">
                    <h4 className="text-paper font-bold mb-4">Socials</h4>
                    <div className="flex gap-6">
                        <a href={SOCIALS.linkedin} className="text-slate hover:text-white transition-colors">
                            <Linkedin size={28} />
                        </a>
                        <a href={SOCIALS.github} className="text-slate hover:text-white transition-colors">
                            <Github size={28} />
                        </a>
                    </div>
                </div>

                <div className="text-left md:border-l md:border-white/10 md:pl-12">
                    <h4 className="text-paper font-bold mb-2">Location</h4>
                    <p className="text-slate">New York, NY (Open to Relocation)</p>
                </div>
            </div>

            <div className="mt-20 text-slate/40 text-sm font-mono">
                © {new Date().getFullYear()} AeroFolio. Built with React & Tailwind.
            </div>
        </div>
    </section>
  );
};

export default Contact;