import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ProjectDetail } from '../data/projects';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps): React.ReactElement | null {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-bg-secondary border border-border-subtle rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            aria-label="닫기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 md:p-12">
            {/* Project Header */}
            <div className="mb-12">
              <div className="mb-6">
                <span className="text-text-muted font-mono text-sm">#{project.id}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="mb-12 rounded-2xl overflow-hidden border border-border-subtle">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Project Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
                <h3 className="text-accent font-mono text-xs tracking-widest uppercase mb-2">일정</h3>
                <p className="text-text-primary text-lg font-semibold">{project.period}</p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
                <h3 className="text-accent font-mono text-xs tracking-widest uppercase mb-2">참여 인원</h3>
                <p className="text-text-primary text-lg font-semibold">{project.team}</p>
              </div>
            </div>

            {/* Service Overview */}
            <div className="mb-12">
              <div className="mb-8">
                <div className="divider"></div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-text-primary">서비스 소개</h2>
                  {project.infoLink && (
                    <a
                      href={project.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label="상세 정보 새 창에서 보기"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 mb-8">
                <h3 className="text-accent font-mono text-xs tracking-widest uppercase mb-4">개요</h3>
                <p className="text-text-secondary text-base leading-relaxed whitespace-pre-wrap">
                  {project.overview}
                </p>
              </div>

              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
                <h3 className="text-accent font-mono text-xs tracking-widest uppercase mb-4">아키텍처</h3>
                <p className="text-text-secondary text-base leading-relaxed whitespace-pre-wrap">
                  {project.architecture}
                </p>
                <br className="hidden md:block" />
                <img
                src={project.architectureImage}
                alt={project.architectureAlt}
                className="w-full h-90 object-cover"
              />
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="mb-8">
                <div className="divider"></div>
                <h2 className="text-3xl font-bold text-text-primary mb-4">성과 및 문제 해결</h2>
              </div>

              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
                <ul className="space-y-4">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-bg-primary font-semibold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-text-secondary text-base leading-relaxed pt-1">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
