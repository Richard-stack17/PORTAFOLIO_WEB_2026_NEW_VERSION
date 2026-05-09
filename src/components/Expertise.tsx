'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Expertise() {
  const t = useTranslations('Expertise');

  const technicalCategories = ['systems', 'development', 'automation'] as const;
  const softSkills = t.raw('soft.list') as string[];

  const softIcons = [
    'bx-refresh',
    'bx-group',
    'bx-brain',
    'bx-chat',
    'bx-medal',
    'bx-search-alt'
  ];

  // Mapping of skill names to their official logo URLs
  const iconMap: Record<string, string> = {
    'React.js': 'https://cdn.simpleicons.org/react/61DAFB',
    'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
    'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
    'Express.js': 'https://cdn.simpleicons.org/express/000000',
    'Laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',
    'PHP': 'https://cdn.simpleicons.org/php/777BB4',
    '.NET Core': 'https://cdn.simpleicons.org/dotnet/512BD4',
    'Python': 'https://cdn.simpleicons.org/python/3776AB',
    'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
    'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
    'Git': 'https://cdn.simpleicons.org/git/F05032',
    'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
    'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
    'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
    'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    'Selenium': 'https://cdn.simpleicons.org/selenium/43B02A',
    'Power Query': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  };

  const getIconUrl = (tag: string) => {
    return iconMap[tag] || null;
  };

  return (
    <section id="expertise" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl" data-aos="fade-up">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">{t('title')}</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {t('subtitle')}
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Technical Skills Column */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                {t('technical.title')}
              </h4>

              <div className="space-y-10">
                {technicalCategories.map((key) => {
                  const tags = t.raw(`technical.${key}.tags`) as string[];
                  return (
                    <div key={key} className="group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          {key === 'systems' && <i className="bx bx-data text-xl"></i>}
                          {key === 'development' && <i className="bx bx-code-alt text-xl"></i>}
                          {key === 'automation' && <i className="bx bx-bot text-xl"></i>}
                        </div>
                        <h5 className="text-lg font-bold text-foreground/90">{t(`technical.${key}.title`)}</h5>
                      </div>
                      <div className="flex flex-wrap gap-3 pl-14">
                        {tags.map((tag) => {
                          const iconUrl = getIconUrl(tag);
                          return (
                            <span key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border text-[11px] font-bold text-muted-foreground tracking-wider uppercase rounded hover:border-primary hover:text-primary transition-all duration-300 cursor-default hover:shadow-sm">
                              {iconUrl && (
                                <img 
                                  src={iconUrl} 
                                  alt={tag} 
                                  className="w-4 h-4 object-contain" 
                                />
                              )}
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Soft Skills Column */}
          <div className="lg:col-span-5">
            <div className="bg-muted/30 p-8 md:p-10 rounded-2xl border border-border sticky top-24">
              <h4 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                {t('soft.title')}
              </h4>

              <ul className="space-y-6">
                {softSkills.map((skill, index) => (
                  <li key={skill} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                      <i className={`bx ${softIcons[index] || 'bx-check'} text-xl`}></i>
                    </div>
                    <span className="text-foreground/80 font-medium group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10 text-center">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "El aprendizaje continuo y la adaptabilidad son las bases de mi crecimiento profesional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
