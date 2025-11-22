'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    // Remove locale from pathname if present
    let pathWithoutLocale = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    }
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/experience', label: t('experience') },
    { href: '/projects', label: t('projects') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <Link href={`/${locale}`} className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-[#a8b2d1] flex items-center justify-center">
            <span className="text-[#a8b2d1] font-bold text-xl">Z</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="p-2 text-[#a8b2d1] hover:text-[#64ffda] transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
          </button>
          <Link
            href={`/${locale}/resume`}
            className="hidden sm:inline-block px-4 py-2 bg-[#64ffda] text-[#0a0a0a] font-medium rounded hover:bg-[#52e8c4] transition-colors text-sm"
          >
            {t('resume')}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#a8b2d1] hover:text-[#64ffda] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a]">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#a8b2d1] hover:text-[#64ffda] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/resume`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 bg-[#64ffda] text-[#0a0a0a] font-medium rounded hover:bg-[#52e8c4] transition-colors text-center"
            >
              {t('resume')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

