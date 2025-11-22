'use client';

import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Sidebar() {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center gap-6 px-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <div className="w-px h-24 bg-[#a8b2d1]"></div>
        </div>
      </aside>

      {/* Right Sidebar - Email */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center gap-6 px-6">
          <a
            href="mailto:zuleny.cr@gmail.com"
            className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors writing-vertical-rl text-sm"
            style={{ writingMode: 'vertical-rl' }}
          >
            zuleny.cr@gmail.com
          </a>
          <div className="w-px h-24 bg-[#a8b2d1]"></div>
        </div>
      </aside>
    </>
  );
}

