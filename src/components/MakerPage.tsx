import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Github } from 'lucide-react';

const XIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function MakerPage() {
  const [imgSrc, setImgSrc] = useState('./image.png');

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hiten__dharpure',
      icon: <Instagram className="w-5 h-5" />,
      colorClass: 'hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hiten-dharpure',
      icon: <Linkedin className="w-5 h-5" />,
      colorClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/hitendharpure',
      icon: <XIcon className="w-5 h-5" />,
      colorClass: 'hover:text-white hover:border-white/30 hover:bg-white/5',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hitendharpure',
      icon: <Github className="w-5 h-5" />,
      colorClass: 'hover:text-wonder-green hover:border-wonder-green/40 hover:bg-wonder-green/5',
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto pt-4 md:pt-8 animate-in fade-in duration-500">
      {/* Header section with back to home or just info */}
      <div className="flex items-center gap-2 text-wonder-green">
        <div className="w-2 h-2 rounded-full bg-wonder-green animate-pulse"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest">The Creator Behind the Technology</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full items-stretch">
        {/* Left Side: Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full md:w-[40%] bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 flex flex-col items-center justify-between text-center gap-6 hover:scale-[1.01] hover:shadow-2xl hover:shadow-wonder-green/5 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Subtle overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-slate-800 shadow-lg relative bg-slate-950">
            <img 
              src={imgSrc} 
              onError={() => setImgSrc('/image.JPG')} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Hiten Dharpure" 
            />
          </div>
          <div className="space-y-1.5 relative z-10">
            <h2 className="text-2xl font-black tracking-tight text-white">Hiten Dharpure</h2>
            <p className="text-xs text-wonder-blue font-bold tracking-widest uppercase">Innovator & Developer</p>
          </div>
        </motion.div>

        {/* Right Side: Philosophy Card / Pallet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[60%] bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-6 md:p-8 flex flex-col justify-center hover:scale-[1.01] hover:shadow-2xl hover:shadow-wonder-blue/5 transition-all duration-300 relative overflow-hidden"
        >
          {/* Glowing background highlights */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-wonder-green/5 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-wonder-blue/10 blur-[60px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <span className="text-[10px] text-wonder-green font-bold uppercase tracking-widest">Artist's Statement</span>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-semibold italic text-left">
              "For me, technology is an art form. Whether I am drawing inspiration from rich cultural heritage or writing the precise logic for an AI-powered device, the goal is always creation. True innovation happens at the intersection of traditional values and futuristic hardware. I build not just to break records, but to craft meaningful, 100% functional solutions that push the boundaries of what is possible."
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono">HITEN DHARPURE</span>
              <div className="w-1.5 h-1.5 rounded-full bg-lotus-pink"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact & Social Media Card / Pallet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-6 hover:scale-[1.01] hover:shadow-2xl hover:shadow-wonder-green/5 transition-all duration-300 relative overflow-hidden"
      >
        {/* Glow overlay */}
        <div className="absolute -bottom-12 right-12 w-32 h-32 bg-wonder-green/5 blur-[40px] rounded-full pointer-events-none"></div>
        
        <div className="flex items-center gap-2 text-wonder-green mb-5 relative z-10">
          <span className="text-base md:text-lg">📬</span>
          <h3 className="text-xs font-bold uppercase tracking-widest">Contact & Social Media</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-4 rounded-xl border border-slate-800 bg-slate-950/20 backdrop-blur-sm transition-all duration-300 gap-2.5 group/social ${social.colorClass}`}
            >
              <div className="p-2 rounded-lg bg-slate-900/85 border border-slate-800 group-hover/social:bg-transparent group-hover/social:border-current transition-all duration-300">
                {social.icon}
              </div>
              <span className="text-xs font-bold text-gray-300 group-hover/social:text-current transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
