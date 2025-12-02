'use client';

import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations('education');

  const items = t.raw('items') as any[];

  return (
    <section id="education" className="py-20 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-white)] mb-12 flex items-center gap-4 max-w-5xl">
          <span className="text-[var(--color-accent)] font-mono text-2xl">05.</span>
          {t('title')}
          <div className="h-[1px] bg-[var(--color-border)] flex-1 ml-4 max-w-xs"></div>
        </h2>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="bg-[var(--color-primary-light)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] transition-all duration-300">
              <h3 className="text-xl font-semibold text-[var(--color-text-white)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--color-accent)] mb-2 font-medium">
                {item.institution}
              </p>
              <p className="text-[var(--color-text-secondary)]">
                {item.period}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <h3 className="text-xl font-semibold text-[var(--color-text-white)] mb-3">
            {t('additionalInfo.title')}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-lg">
            {t('additionalInfo.languages')}
          </p>
        </div>
      </div>
    </section>
  );
}

