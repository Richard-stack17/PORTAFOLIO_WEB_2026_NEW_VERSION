import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('About');

  const skills = [
    { id: 'html', name: 'HTML5', icon: 'fa-html5', color: 'text-orange-500' },
    { id: 'css', name: 'CSS3', icon: 'fa-css3-alt', color: 'text-blue-500' },
    { id: 'js', name: 'JavaScript', icon: 'fa-js', color: 'text-yellow-400' },
    { id: 'react', name: 'React', icon: 'fa-react', color: 'text-cyan-400' },
    { id: 'node', name: 'Node.js', icon: 'fa-node', color: 'text-green-500' },
    { id: 'db', name: 'PgSQL', icon: 'fa-database', color: 'text-indigo-400' }
  ];

  const personalSkills = Object.keys(t.raw('skills'));

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative pb-4">
          {t('title')}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {t('description')}
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200 p-4 border-l-4 border-blue-600 bg-white dark:bg-slate-800 rounded-r-lg shadow-sm">
              {t('experience')}
            </p>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-6">{t('skillsTitle')}</h3>
              <div className="flex flex-wrap gap-3">
                {personalSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium shadow-sm">
                    {t(`skills.${skill}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                <i className={`fa-brands ${skill.icon} text-5xl ${skill.color}`}></i>
                <h4 className="font-medium text-sm">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
