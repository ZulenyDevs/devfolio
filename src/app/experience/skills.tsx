'use client';

import { useTranslations } from 'next-intl';
import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  CircleStackIcon,
  CloudIcon,
  ServerIcon,
  CubeIcon,
  DocumentTextIcon,
  WindowIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for technologies
const iconMap: Record<string, any> = {
  'React': CodeBracketIcon,
  'Next.js': WindowIcon,
  'TypeScript': CodeBracketIcon,
  'JavaScript': CodeBracketIcon,
  'HTML': DocumentTextIcon,
  'CSS': DocumentTextIcon,
  'Tailwind': DocumentTextIcon,
  'Node.js': ServerIcon,
  'Express': ServerIcon,
  'Python': CommandLineIcon,
  'Java': CpuChipIcon,
  'PHP': CodeBracketIcon,
  'MySQL': CircleStackIcon,
  'PostgreSQL': CircleStackIcon,
  'MongoDB': CircleStackIcon,
  'Redis': CircleStackIcon,
  'Docker': CubeIcon,
  'AWS': CloudIcon,
  'Git': CommandLineIcon,
  'Linux': CommandLineIcon,
  'Kubernetes': CloudIcon,
  'GraphQL': GlobeAltIcon,
};

export default function Skills() {
  const t = useTranslations('skills');

  const categories = ['frontend', 'backend', 'database', 'ops'];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-white)] mb-12 flex items-center gap-4">
          <span className="text-[var(--color-accent)] font-mono text-2xl">03.</span>
          {t('title')}
          <div className="h-[1px] bg-[var(--color-border)] flex-1 ml-4 max-w-xs"></div>
        </h2>

        <div className="space-y-16">
          {categories.map((category) => {
            const categoryData = t.raw(category);
            return (
              <div key={category}>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                  {categoryData.title}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {categoryData.technologies.map((tech: string, idx: number) => {
                    const Icon = iconMap[tech] || CpuChipIcon;
                    return (
                      <li key={idx} className="group">
                        <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-primary-light)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-hover)] transition-all duration-300 hover:transform hover:-translate-y-1">
                          <div className="w-12 h-12 flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-10 h-10" />
                          </div>
                          <span className="text-sm text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 font-medium">
                            {tech}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

