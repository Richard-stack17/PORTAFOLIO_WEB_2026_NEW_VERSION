'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {X, ChevronLeft, ChevronRight, Maximize2} from 'lucide-react';

export default function Projects() {
  const t = useTranslations('Projects');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectIndices = [0, 1, 2];

  const openGallery = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject === null) return;
    const images = t.raw(`list.${selectedProject}.images`) as string[];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject === null) return;
    const images = t.raw(`list.${selectedProject}.images`) as string[];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl" data-aos="fade-up">
         <div className="mb-16 text-center lg:text-left">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">{t('title')}</h2>
          <div className="h-px bg-border w-full max-w-md mx-auto lg:mx-0"></div>
        </div>

        <div className="space-y-20">
          {projectIndices.map((i) => {
            const images = t.raw(`list.${i}.images`) as string[];
            return (
              <div key={i} className="group grid lg:grid-cols-12 gap-10 items-center">
                
                {/* Image Area */}
                <div 
                  className={`lg:col-span-7 bg-muted border border-border aspect-video relative overflow-hidden cursor-zoom-in ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                  onClick={() => openGallery(i)}
                >
                  <img 
                    src={images[0]} 
                    alt={t(`list.${i}.title`)} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 dark:bg-black/80 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 size={24} className="text-primary" />
                    </div>
                  </div>
                  {images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                      +{images.length - 1} imágenes
                    </div>
                  )}
                </div>

                {/* Content area */}
                <div className={`lg:col-span-5 space-y-6 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <p className="text-xs font-bold tracking-widest text-primary uppercase">{t(`list.${i}.role`)}</p>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">{t(`list.${i}.title`)}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-background border border-border shadow-sm">
                      <p className="text-sm font-bold text-foreground mb-1 uppercase tracking-wider text-[11px]">El Problema</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t(`list.${i}.problem`)}</p>
                    </div>
                    <div className="p-4 bg-primary/5 border border-primary/20 shadow-sm">
                      <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider text-[11px]">La Solución</p>
                      <p className="text-foreground text-sm leading-relaxed">{t(`list.${i}.solution`)}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a href={t(`list.${i}.link`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors group/link">
                      {t('viewProject')}
                      <i className="bx bx-right-arrow-alt text-xl ml-1 group-hover/link:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-in fade-in duration-300"
          onClick={closeGallery}
        >
          <button 
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
            onClick={closeGallery}
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-5xl px-4 flex items-center justify-center gap-4">
            {(t.raw(`list.${selectedProject}.images`) as string[]).length > 1 && (
              <button 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex-shrink-0"
                onClick={prevImage}
              >
                <ChevronLeft size={32} />
              </button>
            )}

            <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-lg shadow-2xl bg-slate-900 flex items-center justify-center">
              <img 
                src={(t.raw(`list.${selectedProject}.images`) as string[])[currentImageIndex]} 
                alt="Gallery preview" 
                className="max-w-full max-h-full object-contain select-none"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white/90 px-4 py-2 rounded-full text-sm backdrop-blur-md border border-white/10">
                {currentImageIndex + 1} / {(t.raw(`list.${selectedProject}.images`) as string[]).length}
              </div>
            </div>

            {(t.raw(`list.${selectedProject}.images`) as string[]).length > 1 && (
              <button 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex-shrink-0"
                onClick={nextImage}
              >
                <ChevronRight size={32} />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
