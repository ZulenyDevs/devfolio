'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-8 md:px-12">
      <div className="max-w-6xl w-full">
        <p className="text-[var(--color-accent)] text-base sm:text-lg mb-5 font-mono">
          {t('greeting')}
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-text-white)] mb-4 leading-tight max-w-4xl">
          {t('name')}
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          {t('description')}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded hover:bg-[var(--color-accent-dim)] transition-all duration-300 font-medium text-lg"
        >
          {tCommon('getInTouch')}
        </Link>
      </div>
    </section>
  );
}

