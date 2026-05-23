import { Camera, Video, MonitorPlay, Award, BookOpen, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

const MediaPlaceholder = ({ type = 'photo', className = '', label = 'MEDIA', src = '' }: { type?: 'photo' | 'video', className?: string, label?: string, src?: string }) => (
  <div className={`w-full h-full min-h-[120px] bg-gray-900 border border-slate-800 rounded-xl flex items-center justify-center text-[10px] font-bold italic hover:border-wonder-green/50 transition-colors group/media overflow-hidden relative ${className}`}>
    {src ? (
      <>
        {type === 'video' ? (
          <video src={src} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" />
        ) : (
          <img src={src} className="absolute inset-0 w-full h-full object-cover" alt={label} loading="lazy" />
        )}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-end p-2 z-10 pointer-events-none">
          <span className="text-white text-[9px] font-semibold tracking-wider uppercase bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">{label}</span>
        </div>
      </>
    ) : (
      <div className="relative z-10">
        {type === 'video' ? (
          <span className="text-wonder-green">{label}</span>
        ) : (
          <span className="text-slate-700 group-hover/media:text-slate-500 transition-colors">{label}</span>
        )}
      </div>
    )}
  </div>
);

interface BentoGridProps {
  onViewChange: (view: 'home' | 'maker' | 'weather-journey' | 'robot-journey') => void;
}

export default function BentoGrid({ onViewChange }: BentoGridProps) {
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      {/* Top Row: Academic Foundation on the left, Guinness World Record on the right */}
      <div className="relative w-full max-w-3xl mx-auto flex flex-col gap-6">
        {/* Education - Timeline style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-3xl mx-auto xl:mx-0 xl:absolute xl:right-full xl:mr-6 xl:top-0 xl:w-[320px] xl:max-w-none xl:h-fit bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 flex flex-col gap-4 hover:scale-[1.02] hover:shadow-2xl transition-all"
        >
          <div className="flex items-center gap-2 text-wonder-green">
            <div className="w-2 h-2 rounded-full bg-wonder-green"></div>
            <h3 className="text-xs font-bold uppercase tracking-widest">Academic Foundation</h3>
          </div>
          <div className="space-y-6 flex-1 mt-2">
            <div className="relative pl-4 border-l border-slate-800">
              <p className="text-xs text-wonder-blue font-bold">Class 11-12</p>
              <p className="text-sm text-gray-100 font-bold mt-1">School of Scholars, Atrey Layout</p>
              <p className="text-xs text-gray-400 mt-0.5">Science Student</p>
            </div>
            <div className="relative pl-4 border-l border-slate-800">
              <p className="text-xs text-wonder-blue font-bold">Class 10</p>
              <p className="text-sm text-gray-100 font-bold mt-1">School of Scholars, Wanadongri</p>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-800">
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Academic Distinction</span>
          </div>
        </motion.div>

        {/* World Record */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 flex flex-col gap-2 hover:scale-[1.02] hover:shadow-2xl transition-all relative overflow-hidden"
        >
          <div className="flex justify-between items-start z-10 flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-wonder-green">Guinness World Record</h3>
              <p className="text-xl font-bold text-gray-100">Smallest Weather Station</p>
            </div>
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
              <span className="text-xs bg-wonder-green/10 text-wonder-green px-2 py-1 rounded border border-wonder-green/30 font-bold shrink-0">2025</span>
              <button
                onClick={() => onViewChange('weather-journey')}
                className="text-xs font-bold px-3 py-1 rounded bg-wonder-green/20 text-wonder-green hover:bg-wonder-green/30 border border-wonder-green/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                Journey ➔
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-1 leading-relaxed">
            AI-powered, ultra-portable, and highly precise. The real-time monitoring with custom AI-based weather prediction algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
            {/* Column 1: Prototype & Demo */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden">
                <MediaPlaceholder type="photo" src="./weather-1.jpg" label="Hiten holding his certificate and Weather Station" className="w-full h-full" />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <MediaPlaceholder type="video" src="./weather-3.mp4" label="Weather Station Closeup" className="bg-slate-800/50 border-wonder-green/20 w-full h-full" />
              </div>
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden">
                <MediaPlaceholder type="photo" src="./weather-4.JPG" label="Close Up View" className="w-full h-full" />
              </div>
            </div>

            {/* Column 2: Closeup & Copyright */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <div className="aspect-[5/4] w-full rounded-xl overflow-hidden">
                <MediaPlaceholder type="photo" src="./weather-2.jpg" label="Hiten's Felicitation" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Copyright of Code: Firmware of AI-powered Weather Station</p>
                <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
                  <MediaPlaceholder type="photo" src="./copyright.png" label="Copyright Certificate" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stack: Other Achievements */}
      <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
        {/* HastaVaani App */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-all"
        >
          <div className="flex justify-between items-start w-full gap-2 mb-1 flex-col sm:flex-row sm:items-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-wonder-green">HastaVaani App</h3>
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
              <div className="flex flex-row items-center gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hitens.hastavaani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold px-3 py-1 rounded bg-wonder-green/20 text-wonder-green hover:bg-wonder-green/30 border border-wonder-green/30 transition-colors"
                >
                  Download App
                </a>
                <span className="text-xs bg-wonder-green/10 text-wonder-green px-2 py-1 rounded border border-wonder-green/30 font-bold">2025</span>
              </div>
              <a
                href="./hastavaanireport.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold px-3 py-1 rounded bg-wonder-green/20 text-wonder-green hover:bg-wonder-green/30 border border-wonder-green/30 transition-colors cursor-pointer"
              >
                Report ➔
              </a>
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-100 mb-3">An Indian Sign Language Translator App</p>

          <div className="space-y-2 mt-1 mb-4 flex-1">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-wonder-blue">Unique Features:</h4>
            <ul className="text-[11px] text-gray-400 space-y-1.5 list-disc list-outside pl-3 leading-relaxed">
              <li>Fully offline functionality, no internet required.</li>
              <li>Lightweight app with efficient 3D avatar animations.</li>
              <li>Visually appealing UI featuring mascot Varnika, the 3D avatar.</li>
              <li>Clean interface with high responsiveness and engaging animations.</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 w-full">
            <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="photo" src="./app-1.png" label="HastaVaani UI Image 1" className="w-full h-full" />
            </div>
            <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="photo" src="./app-2.png" label="HastaVaani UI Image 2" className="w-full h-full" />
            </div>
            <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="photo" src="./app-3.png" label="HastaVaani UI Image 3" className="w-full h-full" />
            </div>
            <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="video" src="./appdemo.mp4" label="HastaVaani Demo" className="bg-wonder-green/5 border-wonder-green/20 text-wonder-green w-full h-full" />
            </div>
          </div>
        </motion.div>

        {/* Robot Dance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl transition-all gap-4"
        >
          <div className="flex justify-between items-start z-10 flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-wonder-green uppercase">World Record</h3>
              <p className="text-base font-bold text-gray-100 leading-relaxed">Youngest Boy To Give A Synchronized Dance Performance With Self-Created 3d Printed Robots</p>
              <p className="text-sm text-gray-400 font-medium">by Worldwide Book of Records</p>
            </div>
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
              <span className="text-xs bg-wonder-green/10 text-wonder-green px-2 py-1 rounded border border-wonder-green/30 font-bold shrink-0">2024</span>
              <button
                onClick={() => onViewChange('robot-journey')}
                className="text-xs font-bold px-3 py-1 rounded bg-wonder-green/20 text-wonder-green hover:bg-wonder-green/30 border border-wonder-green/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                Journey ➔
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="video" src="./robotdance.mp4" label="Robot Synchronized Dance" className="w-full h-full" />
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="photo" src="./worldrecord.png" label="World Record Certificate" className="w-full h-full" />
            </div>
          </div>
        </motion.div>

        {/* GPAI Summit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-all"
        >
          <div className="flex justify-between items-start w-full gap-2 flex-col sm:flex-row">
            <div className="space-y-1">
              <h3 className="text-sm font-bold uppercase tracking-widest text-wonder-green">Global Partnership on Artificial Intelligence (GPAI) Summit</h3>
              <p className="text-base font-bold text-gray-100">Presented my project as top 10 winners of YUVAi Program</p>
            </div>
            <span className="text-xs bg-wonder-green/10 text-wonder-green px-2 py-1 rounded border border-wonder-green/30 font-bold shrink-0">2023</span>
          </div>

          <div className="flex flex-col gap-3 mt-6 w-full">
            {/* Top row: GPAI-1 and GPAI-2 side-by-side, equal width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <MediaPlaceholder type="photo" src="./gpai-1.jpg" label="GPAI Image 1" className="w-full h-full" />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <MediaPlaceholder type="photo" src="./gpai-2.JPG" label="GPAI Image 2" className="w-full h-full" />
              </div>
            </div>

            {/* Bottom row: GPAI-3 on the left (w-[40%]), GPAI-4 and GPAI-5 stacked on the right (w-[60%]) */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full sm:w-[40%] flex flex-col">
                <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
                  <MediaPlaceholder type="photo" src="./gpai-3.jpg" label="GPAI Image 3" className="w-full h-full" />
                </div>
              </div>
              <div className="w-full sm:w-[60%] flex flex-col gap-3 justify-between">
                <div className="aspect-video w-full rounded-xl overflow-hidden">
                  <MediaPlaceholder type="photo" src="./gpai-4.JPG" label="GPAI Image 4" className="w-full h-full" />
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden">
                  <MediaPlaceholder type="photo" src="./gpai-5.JPG" label="GPAI Image 5" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-all"
        >
          <div className="flex justify-between items-start w-full gap-2 mb-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-wonder-green">India Book of Records</h3>
            <span className="text-xs bg-wonder-green/10 text-wonder-green px-2 py-1 rounded border border-wonder-green/30 font-bold shrink-0">2023</span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="text-5xl font-black text-white italic">801</div>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">
              Certificates in coding, STEM and Courses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800/50 w-full">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="photo" src="./ibr-1.jpg" label="Hiten Holding India Book of Records Certificate" className="w-full h-full" />
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <MediaPlaceholder type="photo" src="./ibr-2.jpg" label="Hiten's Felicitation" className="w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
