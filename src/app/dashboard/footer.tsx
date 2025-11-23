'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="text-center py-8 text-[var(--color-text-tertiary)] text-sm border-t border-[var(--color-border)]">
      <p>
        © {new Date().getFullYear()} ZulenyDev.
      </p>
    </footer>
  );
}

