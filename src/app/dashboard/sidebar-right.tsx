'use client';

import { Config } from '@/lib/constants';

export default function Sidebar() {
  return (
    <aside className="w-16 hidden lg:flex flex-col items-center justify-end sticky top-0 h-screen pb-8 z-40">
      <div className="flex flex-col items-center gap-6">
        <a
          href={`mailto:${Config.email}`}
          className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors text-sm hover:-translate-y-1 duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          {Config.email}
        </a>
        <div className="w-px h-24 bg-[var(--color-text-tertiary)]"></div>
      </div>
    </aside>
  );
}

