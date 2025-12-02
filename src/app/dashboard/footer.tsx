'use client';

import { useTranslations } from 'next-intl';

import { Config, Github, Linkedin } from '@/lib/constants';

const socialLinks = [
  { icon: Github, href: Config.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: Config.socials.linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="text-center py-8 text-[var(--color-text-tertiary)] text-sm border-t border-[var(--color-border)]">
      {/* Social Links - Only visible when sidebar is hidden (on smaller screens) */}
      <div className="lg:hidden flex justify-center items-center gap-6 mb-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors hover:-translate-y-1 duration-300 cursor-pointer"
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
      <p>
        © {new Date().getFullYear()} ZulenyDev.
      </p>
    </footer>
  );
}

