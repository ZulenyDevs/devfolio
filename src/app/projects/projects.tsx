'use client';

import { useTranslations } from 'next-intl';
import { FolderIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { projects } from '@/lib/constants';
import Link from 'next/link';

export default function Projects() {
  const t = useTranslations('projects');
  const tc = useTranslations('common');

  return (
    <section id="projects" className="py-20 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-white)] mb-20 flex items-center gap-4">
          <span className="text-[var(--color-accent)] font-mono text-2xl">04.</span>
          {t('title')}
          <div className="h-[1px] bg-[var(--color-border)] flex-1 ml-4 max-w-xs"></div>
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((projectConfig, index) => {
            const projectData = t.raw(`items.${projectConfig.id}`);
            const isEven = index % 2 === 0;

            return (
              <div key={projectConfig.id} className="relative flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center">
                {/* Project Image Area */}
                <div className={`w-full lg:col-span-6 relative ${isEven ? 'lg:col-start-1' : 'lg:col-start-7 lg:row-start-1'} h-[300px] sm:h-[360px] md:h-[400px]`}>
                  <div className="absolute inset-0 bg-[var(--color-bg-card)] rounded-lg border border-[var(--color-border)] overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-full bg-[var(--color-primary-light)] flex items-center justify-center relative overflow-hidden">

                      {/* Fallback icon if image fails or while loading */}
                      <FolderIcon className="w-20 h-20 text-[var(--color-accent)] opacity-50 absolute" />
                      <Image
                        src={projectConfig.image}
                        alt={projectData.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 2} // Prioritize loading for the first two images
                      />
                    </div>
                  </div>
                </div>

                {/* Project Content Area */}
                <div className={`w-full lg:col-span-6 relative z-20 ${isEven ? 'lg:col-start-7 lg:text-right' : 'lg:col-start-1 lg:row-start-1 lg:text-left'}`}>
                  <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
                    {projectData.type}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-white)] mb-6 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                    {projectData.title}
                  </h3>

                  <div className={`bg-[var(--color-primary-light)] p-6 rounded-lg border border-[var(--color-border)] shadow-xl mb-6 text-[var(--color-text-secondary)] text-base leading-relaxed`}>
                    <p>{projectData.description}</p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 mb-8 text-[var(--color-text-tertiary)] font-mono text-sm ${isEven ? 'justify-start lg:justify-end' : 'justify-start'}`}>
                    {projectConfig.technologies.map((tech: string, idx: number) => (
                      <li key={idx} className="whitespace-nowrap">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-4 ${isEven ? 'justify-start lg:justify-end' : 'justify-start'}`}>
                    {/* Project Links */}
                    <a
                      href={projectConfig.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 font-mono text-sm"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      <span>{tc('sourceCode')}</span>
                    </a>
                    <a
                      href={projectConfig.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 font-mono text-sm"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      <span>{tc('livePreview')}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

