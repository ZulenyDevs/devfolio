'use client';

import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations('education');

  const items = ['bachelor', 'diploma1', 'diploma2', 'course'];

  return (
    <section id="education" className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda] mb-12">
          {t('title')}
        </h2>
        
        <div className="space-y-8">
          {items.map((itemKey) => {
            const item = t.raw(`items.${itemKey}`);
            return (
              <div key={itemKey} className="border-l-2 border-[#64ffda] pl-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[#64ffda] mb-2">
                  {item.institution}
                </p>
                <p className="text-[#8892b0]">
                  {item.period}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-[#233554]">
          <h3 className="text-xl font-semibold text-white mb-2">
            {t('additionalInfo.title')}
          </h3>
          <p className="text-[#8892b0]">
            {t('additionalInfo.languages')}
          </p>
        </div>
      </div>
    </section>
  );
}

