import {useTranslations} from 'next-intl';

export default function Experience() {
  const t = useTranslations('Experience');

  const jobs = ['oca', 'neonhouseled', 'nocountry'] as const;

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl" data-aos="fade-up">
         <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">{t('title')}</h2>
          <div className="h-px bg-border w-full max-w-md mx-auto md:mx-0"></div>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-0 space-y-16">
          {jobs.map((job) => {
             const achievements = t.raw(`${job}.achievements`) as string[];
             
             return (
               <div key={job} className="relative pl-10 md:pl-12">
                 {/* Timeline dot */}
                 <div className="absolute w-4 h-4 rounded-full bg-primary border-4 border-background -left-[9px] top-1"></div>
                 
                 <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                   <div>
                     <h3 className="text-2xl font-bold text-foreground tracking-tight">{t(`${job}.role`)}</h3>
                     <p className="text-lg font-medium text-muted-foreground mt-1">{t(`${job}.company`)}</p>
                   </div>
                   <span className="text-sm font-medium text-primary mt-2 md:mt-0 tracking-wide">
                     {t(`${job}.date`)}
                   </span>
                 </div>
                 
                 <ul className="space-y-3 mt-6">
                   {achievements.map((ach, i) => (
                     <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                       <span className="mr-3 text-primary mt-1.5 text-[10px]">■</span>
                       {ach}
                     </li>
                   ))}
                 </ul>
               </div>
             )
          })}
        </div>
      </div>
    </section>
  );
}
