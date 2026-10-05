'use client';

import { Reveal } from '@/components/Reveal';
import type { Project } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/40">
        <div className="aspect-video overflow-hidden bg-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <span className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
              {project.category}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-primary transition-colors hover:underline"
              >
                <ExternalLink size={14} /> Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-primary transition-colors hover:underline"
              >
                <Github size={14} /> Codice
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
