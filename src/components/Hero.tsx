import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden bg-transparent transition-colors duration-500">
      {/* Background Dots Grid - Visible in both modes */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      {/* Big Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto z-10 max-w-5xl px-4 md:px-6" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('available')}
            </div>

            <div className="space-y-2">
              <p className="text-base text-slate-600 dark:text-slate-300 font-medium">{t('greeting')}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                {t('tagline').split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                  {t('tagline').split(' ').slice(2).join(' ')}
                </span>
              </h1>
            </div>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium flex items-center gap-3 divide-x divide-slate-300 dark:divide-slate-700">
              <span>Full Stack Developer</span>
              <span className="pl-3">BI Analyst</span>
              <span className="pl-3">Automation Developer</span>
            </p>

            <p className="text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed text-sm">
              {t('description')}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group relative inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] text-sm">
                <span className="relative z-10 flex items-center gap-2">
                  {t('cta')} <i className="bx bx-right-arrow-alt text-lg group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </a>
              
              <a href="#contact" className="px-6 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-slate-100 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm text-sm">
                Contáctame <i className="bx bx-message-rounded-dots text-lg"></i>
              </a>

              <div className="flex gap-3 ml-2">
                <a href="https://www.linkedin.com/in/richard-ailton-alfaro-manzano-194446357/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                  <i className="bx bxl-linkedin text-xl"></i>
                </a>
                <a href="https://github.com/Richard-stack17" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                  <i className="bx bxl-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content (3D Profile) */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-[260px] h-[260px] sm:w-[380px] sm:h-[380px]">
              
              {/* EXTERNAL GLOW (AZULADO) */}
              <div className="absolute inset-[-30px] rounded-full bg-primary/20 blur-[60px] animate-pulse z-0" />
              <div className="absolute inset-[-15px] rounded-full bg-cyan-500/10 blur-[40px] z-0" />

              {/* Smoky/Glowing Background inside circle */}
              <div className="absolute inset-4 rounded-full bg-slate-100 dark:bg-[#08232b] border-[1px] border-primary/20 overflow-hidden z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)]" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-1/2 bg-primary/20 dark:bg-primary/30 blur-[60px] rounded-full animate-pulse" />
                
                {/* Visual Grid Inside */}
                <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              </div>

              {/* Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_30s_linear_infinite] z-10" />
              <div className="absolute inset-6 rounded-full border-2 border-primary/40 shadow-[0_0_80px_rgba(20,184,166,0.2)] dark:shadow-[0_0_80px_rgba(20,184,166,0.4)] z-10" />
              
              {/* Profile Image */}
              <div className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden rounded-full">
                <img 
                  src="/img/profile/fotoMine.png" 
                  alt="Richard Alfaro" 
                  className="w-[110%] h-[110%] object-cover object-top translate-y-10 scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]" 
                />
              </div>

              {/* Floating Glass Cards */}
              
              {/* BI Card */}
              <div className="absolute -top-4 right-0 sm:right-4 bg-white/80 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-4 rounded-2xl shadow-2xl z-30 animate-[bounce_6s_infinite]">
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] font-bold text-primary uppercase tracking-[0.2em]">Business Intelligence</span>
                  <div className="flex items-end gap-1 h-10">
                    {[3, 5, 10, 6, 8, 4, 9].map((h, i) => (
                      <div key={i} className="w-1.5 rounded-full bg-primary" style={{ height: `${h * 10}%`, opacity: 0.3 + (h * 0.07) }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Automation Card */}
              <div className="absolute bottom-12 -right-2 sm:-right-6 bg-white/80 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-4 rounded-2xl shadow-2xl z-30">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-bold text-primary uppercase tracking-[0.2em]">Automatización</span>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">+85%</span>
                    <div className="relative w-12 h-8">
                      <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-primary stroke-2">
                        <path d="M0 35 Q 25 35, 50 20 T 100 5" className="animate-[dash_2s_ease-in-out_infinite]" strokeDasharray="100" strokeDashoffset="100" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon Cards */}
              <div className="absolute top-1/4 -left-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-primary/30 w-12 h-12 rounded-xl flex items-center justify-center shadow-2xl z-30 animate-[pulse_4s_infinite]">
                <i className="bx bx-code-alt text-2xl text-primary"></i>
              </div>

              <div className="absolute bottom-1/3 -left-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-primary/30 w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl z-30">
                <i className="bx bxs-data text-xl text-primary"></i>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-[1.5rem] shadow-2xl animate-slide-up">
          {[
            { label: 'Años de experiencia', val: '1+', icon: 'bx-rocket' },
            { label: 'Proyectos completados', val: '10+', icon: 'bx-book-content' },
            { label: 'Herramientas dominadas', val: '5+', icon: 'bx-user-voice' },
            { label: 'Compromiso', val: '100%', icon: 'bx-target-lock' },
            { label: 'Reducción de tiempos', val: '60%', icon: 'bx-bolt-circle' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-1 group text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <i className={`bx ${stat.icon} text-lg`}></i>
                </div>
                <span className="text-xl font-black text-slate-900 dark:text-white">{stat.val}</span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold max-w-[100px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
