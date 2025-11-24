'use client';

import { useTranslations } from 'next-intl';


export default function Skills() {
  const t = useTranslations('skills');
  const categories = t.raw('categories') as any[];

  return (
    <section id="skills" className="py-20 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-white)] mb-12 flex items-center gap-4">
          <span className="text-[var(--color-accent)] font-mono text-2xl">03.</span>
          {t('title')}
          <div className="h-[1px] bg-[var(--color-border)] flex-1 ml-4 max-w-xs"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[var(--color-primary-light)] p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-white)] mb-6 flex items-center gap-3">
                <span className="text-[var(--color-accent)]">▹</span>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item: string, idx: number) => (
                  <li key={idx} className="text-[var(--color-text-secondary)] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

