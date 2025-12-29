'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { GlobeAltIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLocale = (newLocale: string) => {
    // Remove locale from pathname if present
    let pathWithoutLocale = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    }
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/experience', label: t('experience') },
    { href: '/projects', label: t('projects') },
    { href: '/education', label: t('education') },
    { href: '/contact', label: t('contact') },
  ];

  // Build languages array from translations
  const languages = [
    {
      code: 'en',
      label: t('languages.en.label'),
      abbr: t('languages.en.abbr')
    },
    {
      code: 'es',
      label: t('languages.es.label'),
      abbr: t('languages.es.abbr')
    },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[var(--color-bg-dark)]/90 backdrop-blur-sm border-b border-[var(--color-border-light)]">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <Link href={`/${locale}`} className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-[var(--color-accent)] flex items-center justify-center hover:bg-[var(--color-accent-dim)] transition-all duration-300">
            <span className="text-[var(--color-accent)] font-bold text-xl">Z</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center gap-2 p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="Select language"
            >
              <GlobeAltIcon className="w-5 h-5" />
              <span className="text-sm font-medium">{currentLanguage.abbr}</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLocale(lang.code);
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${locale === lang.code
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                      : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-white)]'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{lang.label}</span>
                      <span className="text-xs font-mono">{lang.abbr}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/resume`}
            className="hidden sm:inline-block px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-medium rounded hover:bg-[var(--color-accent-hover)] transition-colors text-sm"
          >
            {t('resume')}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-bg-dark)] border-t border-[var(--color-border-light)]">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/resume`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-medium rounded hover:bg-[var(--color-accent-hover)] transition-colors text-center"
            >
              {t('resume')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

