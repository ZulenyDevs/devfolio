'use client';

import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('experience');

  const jobs = [
    'centurysoft',
    'getserver',
    'centurysoftIntern',
  ];

  return (
    <section id="experience" className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda] mb-4">
          {t('title')}
        </h2>
        <h3 className="text-xl text-white mb-12">
          {t('subtitle')}
        </h3>
        
        <div className="space-y-12">
          {jobs.map((jobKey) => {
            const job = t.raw(`jobs.${jobKey}`);
            return (
              <div key={jobKey} className="border-l-2 border-[#64ffda] pl-6">
                <h4 className="text-xl font-semibold text-white mb-1">
                  {job.title}
                </h4>
                <p className="text-[#64ffda] mb-4">
                  {job.company} • {job.period}
                </p>
                <ul className="space-y-2 text-[#8892b0]">
                  {job.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

