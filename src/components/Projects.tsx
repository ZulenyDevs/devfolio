'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = ['gpsDecoder', 'mediaManagement', 'smileAnalysis'];

  return (
    <section id="projects" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda] mb-12">
          {t('title')}
        </h2>

        <div className="space-y-24">
          {projects.map((projectKey, index) => {
            const project = t.raw(`projects.${projectKey}`);
            const isEven = index % 2 === 0;
            return (
              <div
                key={projectKey}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div
                  className={`relative md:col-span-7 ${!isEven ? 'md:order-last' : ''}`}
                >
                  <div className="rounded-lg overflow-hidden border border-[#233554] bg-[#0b1220]">
                    <Image
                      src="/window.svg"
                      alt={project.title}
                      width={900}
                      height={600}
                      className="w-full h-auto opacity-80"
                    />
                  </div>
                </div>

                <div className={`md:col-span-5 ${!isEven ? 'md:order-first' : ''}`}>
                  <p className="text-[#64ffda] text-sm mb-2">{t('featured')}</p>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-[#112240] p-6 rounded-lg mb-4 border border-[#233554]">
                    <p className="text-[#8892b0] mb-4">{project.description1}</p>
                    {project.description2 && (
                      <p className="text-[#8892b0]">{project.description2}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-sm text-[#8892b0] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
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

