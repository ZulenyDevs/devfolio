'use client';

import { useTranslations } from 'next-intl';

export default function Skills() {
  const t = useTranslations('skills');

  const categories = ['frontend', 'backend', 'database', 'ops'];

  return (
    <section id="skills" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda] mb-12 text-center">
          {t('title')}
        </h2>

        <div className="space-y-12">
          {categories.map((category) => {
            const categoryData = t.raw(category);
            return (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-6">
                  {categoryData.title}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {categoryData.technologies.map((tech: string, idx: number) => (
                    <li key={idx} className="flex flex-col items-center text-center gap-2">
                      <div className="w-12 h-12 rounded-lg border border-[#233554] bg-[#0b1220] flex items-center justify-center text-[#64ffda] text-sm">
                        {tech[0]}
                      </div>
                      <span className="text-xs text-[#a8b2d1]">{tech}</span>
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

