'use client';

import { Config, Github, Linkedin, Twitter, Instagram } from '@/lib/constants';


const socialLinks = [
  { icon: Github, href: Config.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: Config.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: Config.socials.twitter, label: 'Twitter' },
  { icon: Instagram, href: Config.socials.instagram, label: 'Instagram' },
];

export default function Sidebar() {
  return (
    <aside className="w-16 hidden lg:flex flex-col items-center justify-end sticky top-0 h-screen pb-8 z-40">
      <div className="flex flex-col items-center gap-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors hover:-translate-y-1 duration-300"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
        <div className="w-px h-24 bg-[var(--color-text-tertiary)]"></div>
      </div>
    </aside>
  );
}

