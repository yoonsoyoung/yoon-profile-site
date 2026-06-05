import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { projects, isDetailProject } from '../data/projects';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function ProjectDetailPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = useMemo(() => {
    const found = projects.find((p) => p.id === id);
    return found && isDetailProject(found) ? found : null;
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            돌아가기
          </button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="text-text-muted font-mono text-sm">#{project.id}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
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
              <h2 className="text-3xl font-bold text-text-primary mb-4">서비스 소개</h2>
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
      </main>

      <Footer />
    </div>
  );
}
