'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="text-center py-8 text-[#a8b2d1] text-sm">
      <p>
        {t('madeWith')} Zuleny Cruz Rodriguez
      </p>
    </footer>
  );
}

