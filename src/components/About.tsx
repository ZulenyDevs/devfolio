'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda] mb-8">
          {t('title')}
        </h2>
        <div className="space-y-4 text-[#8892b0] text-lg leading-relaxed">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
        </div>
      </div>
    </section>
  );
}

