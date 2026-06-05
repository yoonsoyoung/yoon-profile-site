import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects, isDetailProject } from '../data/projects';

export function Projects(): React.ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      data-section-id="projects"
      ref={sectionRef}
      className="fade-in-section relative py-24 px-6 md:px-12 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="divider"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">프로젝트</h2>
          <p className="text-text-secondary text-base md:text-lg">
            준비 중인 프로젝트들을 곧 공개할 예정입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card group relative overflow-hidden rounded-2xl border border-border-subtle cursor-pointer"
              style={{ height: '320px' }}
            >
              <div className="project-accent-bar" style={{ zIndex: 20 }}></div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-400 group-hover:opacity-0 pointer-events-none">
                <div className="absolute top-6 left-6">
                  <span className="text-white/60 font-mono text-xs">#{project.id}</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-bg-card/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-6 gap-3">
                <div className="flex items-start justify-between">
                  <span className="text-text-muted font-mono text-xs">#{project.id}</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
                <h3 className="text-text-primary font-semibold text-lg">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2 border-t border-border-subtle">
                  {isDetailProject(project) ? (
                    <Link
                      to={`/projects/${project.id}`}
                      className="link-icon text-accent hover:text-accent-hover"
                    >
                      상세보기
                    </Link>
                  ) : (
                    <>
                      <span className="link-icon disabled">GitHub</span>
                      <span className="link-icon disabled">Live</span>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
