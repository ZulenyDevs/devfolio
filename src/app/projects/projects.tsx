'use client';

import { useTranslations } from 'next-intl';
import { FolderIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = ['gpsDecoder', 'mediaManagement', 'smileAnalysis'];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-white)] mb-12 flex items-center gap-4">
          <span className="text-[var(--color-accent)] font-mono text-2xl">04.</span>
          {t('title')}
          <div className="h-[1px] bg-[var(--color-border)] flex-1 ml-4 max-w-xs"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((projectKey) => {
            const project = t.raw(`projects.${projectKey}`);
            return (
              <div
                key={projectKey}
                className="group bg-[var(--color-primary-light)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Icon/Image */}
                <div className="flex items-center justify-between mb-6">
                  <FolderIcon className="w-12 h-12 text-[var(--color-accent)]" />
                  <div className="flex gap-3">
                    {/* Add external link icons here if needed */}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-[var(--color-text-white)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <div className="flex-1 mb-6">
                  <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                    {project.description1}
                  </p>
                  {project.description2 && (
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {project.description2}
                    </p>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-sm text-[var(--color-text-tertiary)] font-mono hover:text-[var(--color-accent)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Projects Section (Alternative layout for featured) */}
        <div className="mt-20 space-y-24">
          {/* This section can be used for featured projects with image */}
        </div>
      </div>
    </section>
  );
}

