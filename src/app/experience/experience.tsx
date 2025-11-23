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
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-white)] mb-4 flex items-center gap-4 max-w-5xl">
          <span className="text-[var(--color-accent)] font-mono text-2xl">02.</span>
          {t('title')}
          <div className="h-[1px] bg-[var(--color-border)] flex-1 ml-4 max-w-xs"></div>
        </h2>
        <h3 className="text-xl text-[var(--color-text-primary)] mb-16">
          {t('subtitle')}
        </h3>

        <div className="space-y-12">
          {jobs.map((jobKey, index) => {
            const job = t.raw(`jobs.${jobKey}`);
            return (
              <div key={jobKey} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index !== jobs.length - 1 && (
                  <div className="absolute left-[7px] top-8 bottom-0 w-[2px] bg-[var(--color-border)]"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-primary)]"></div>

                {/* Content card */}
                <div className="bg-[var(--color-primary-light)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] transition-all duration-300 hover:transform hover:-translate-y-1">
                  <h4 className="text-2xl font-semibold text-[var(--color-text-white)] mb-2">
                    {job.title}
                  </h4>
                  <p className="text-[var(--color-accent)] mb-4 font-medium">
                    {job.company} • {job.period}
                  </p>
                  <ul className="space-y-3 text-[var(--color-text-secondary)]">
                    {job.achievements.map((achievement: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1 text-lg">▹</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

