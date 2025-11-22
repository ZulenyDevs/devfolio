'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-start px-6 sm:px-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#64ffda] text-sm sm:text-base mb-4 font-mono">
          {t('greeting')}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          {t('name')}
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] mb-6">
          {t('tagline')}
        </h2>
        <p className="text-[#8892b0] text-lg sm:text-xl max-w-2xl mb-8">
          {t('description')}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-block px-8 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
        >
          {tCommon('getInTouch')}
        </Link>
      </div>
    </section>
  );
}

