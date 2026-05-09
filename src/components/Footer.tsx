import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  return (
    <footer 
      className="relative text-slate-300 py-20 border-t border-white/5"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(0,255,255,0.08), transparent 35%),
          radial-gradient(circle at right, rgba(0,180,255,0.10), transparent 30%),
          linear-gradient(135deg, #020B16 0%, #031C28 45%, #04111d 100%)
        `
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-20 mb-16">
          
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="text-[#00D5FF] font-black text-5xl tracking-tighter mb-2">RM</div>
            <h3 className="text-white font-bold text-2xl tracking-tight">
              Richard Alfaro Manzano<span className="text-[#00D5FF]">.</span>
            </h3>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              {t('description')}
            </p>
            
            {/* Glassmorphism Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-y-4 p-5 rounded-2xl w-fit" 
                 style={{
                   backdropFilter: 'blur(12px)',
                   boxShadow: '0 0 40px rgba(0, 255, 255, 0.08)',
                   border: '1px solid rgba(255,255,255,0.06)',
                   background: 'rgba(255, 255, 255, 0.02)'
                 }}>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 pr-4 md:pr-5 border-r border-white/10">
                <i className="bx bx-code-alt text-[#00D5FF] text-lg"></i>
                {t('cleanCode')}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 px-4 md:px-5 border-r border-white/10">
                <i className="bx bx-rocket text-[#00D5FF] text-lg"></i>
                {t('performance')}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 pl-4 md:pl-5">
                <i className="bx bx-shield-quarter text-[#00D5FF] text-lg"></i>
                {t('security')}
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-3 flex flex-col gap-8 md:pl-8">
            <h4 className="text-[#00D5FF] font-bold tracking-widest text-xs uppercase flex flex-col gap-3">
              {t('quickLinks')}
              <span className="w-8 h-[2px] bg-[#00D5FF] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-0">
              {[
                { href: '#home', label: t('home') },
                { href: '#expertise', label: tNav('about') },
                { href: '#projects', label: tNav('projects') },
                { href: '#contact', label: tNav('contact') },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="group py-3 border-b border-white/5 flex items-center gap-3 hover:text-white transition-colors text-sm">
                    <i className="bx bx-chevron-right text-[#00D5FF] group-hover:translate-x-1 transition-transform"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <h4 className="text-[#00D5FF] font-bold tracking-widest text-xs uppercase flex flex-col gap-3">
              {t('followMe')}
              <span className="w-8 h-[2px] bg-[#00D5FF] rounded-full"></span>
            </h4>
            
            <div className="flex gap-4">
              <a href="https://github.com/Richard-stack17" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-[#00D5FF] transition-all hover:scale-110"
                 style={{
                   backdropFilter: 'blur(12px)',
                   boxShadow: '0 0 15px rgba(0, 255, 255, 0.1)',
                   border: '1px solid rgba(255,255,255,0.06)',
                   background: 'rgba(255, 255, 255, 0.02)'
                 }}>
                <i className="bx bxl-github text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/richard-ailton-alfaro-manzano-194446357/" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-[#00D5FF] transition-all hover:scale-110"
                 style={{
                   backdropFilter: 'blur(12px)',
                   boxShadow: '0 0 15px rgba(0, 255, 255, 0.1)',
                   border: '1px solid rgba(255,255,255,0.06)',
                   background: 'rgba(255, 255, 255, 0.02)'
                 }}>
                <i className="bx bxl-linkedin text-2xl"></i>
              </a>
            </div>

            <div className="mt-2">
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {t('collabText')}
              </p>
              <a href="#contact" 
                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white hover:text-[#00D5FF] transition-all"
                 style={{
                   backdropFilter: 'blur(12px)',
                   background: 'rgba(0, 213, 255, 0.05)',
                   boxShadow: '0 0 20px rgba(0, 255, 255, 0.05)',
                   border: '1px solid rgba(255,255,255,0.1)'
                 }}>
                <i className="bx bx-envelope text-lg"></i>
                {t('writeMe')}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 text-[10px] sm:text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 tracking-widest uppercase">
          <p className="normal-case tracking-normal">{t('copy')}</p>
          <div className="flex items-center gap-3 font-semibold">
            <span>{t('designed')}</span>
            <span className="w-1 h-1 rounded-full bg-[#00D5FF]"></span>
            <span>{t('developed')}</span>
            <span className="w-1 h-1 rounded-full bg-[#00D5FF]"></span>
            <span>{t('optimized')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
