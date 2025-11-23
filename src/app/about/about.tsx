'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-white)] mb-12 flex items-center gap-4 max-w-4xl">
          <span className="text-[var(--color-accent)] font-mono text-2xl">01.</span>
          {t('title')}
          <div className="h-[1px] bg-[var(--color-border)] flex-1 ml-4 max-w-xs"></div>
        </h2>

        <div className="space-y-4 text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-4xl">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
        </div>
      </div>
    </section>
  );
}
