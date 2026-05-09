import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Studies() {
  const t = useTranslations('Studies');

  const studies = [
    {
      id: 1,
      title: t('s1_title'),
      inst: t('s1_inst'),
      date: t('s1_date'),
      img: "https://cdn0.iconfinder.com/data/icons/fillicons-information-technology/1550/programmer_software_developer-512.png"
    },
    {
      id: 2,
      title: t('s2_title'),
      inst: t('s2_inst'),
      date: t('s2_date'),
      img: "https://cdn-icons-png.flaticon.com/512/297/297432.png"
    },
    {
      id: 3,
      title: t('s3_title'),
      inst: t('s3_inst'),
      date: t('s3_date'),
      img: "/assets/img/academla.png" // User's static asset
    }
  ];

  return (
    <section id="studies" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative pb-4 inline-block left-1/2 -translate-x-1/2">
          {t('title')}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12">{t('subtitle')}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {studies.map((s) => (
            <div key={s.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-24 h-24 mb-4">
                <Image src={s.img} alt={s.title} fill className="object-contain drop-shadow-md" sizes="(max-width: 768px) 96px, 96px"/>
              </div>
              <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm tracking-wider uppercase flex items-center gap-2">
                <i className="fa-sharp fa-solid fa-chevron-down"></i> {s.title}
              </h4>
              <p className="font-medium text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2">
                <i className="fa-solid fa-building-columns text-slate-400"></i> {s.inst}
              </p>
              <p className="text-sm font-semibold text-slate-500 flex items-center justify-center gap-2 mt-auto pt-4">
                <i className="fa-sharp fa-solid fa-chevron-right text-slate-400"></i> {s.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
