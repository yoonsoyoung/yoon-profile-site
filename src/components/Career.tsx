import React, { useState, useEffect, useRef } from 'react';
import { careers, careerResumeLink } from '../data/career';

const CAREER_LIMIT = 2;

export function Career(): React.ReactElement {
  const [showAllCareers, setShowAllCareers] = useState(false);
  const sortedCareers = [...careers].sort((a, b) => parseInt(b.id) - parseInt(a.id));
  const visibleCareers = showAllCareers ? sortedCareers : sortedCareers.slice(0, CAREER_LIMIT);
  const hasMoreCareers = careers.length > CAREER_LIMIT;
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
      id="career"
      data-section-id="career"
      ref={sectionRef}
      className="fade-in-section relative py-24 px-6 md:px-12 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="divider"></div>
          <div className="flex items-end gap-3 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">경력</h2>
            {careerResumeLink && (
              <a
                href={careerResumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-icon text-sm"
                title="경력 기술서 보기"
              >
                경력 기술서
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
          <p className="text-text-secondary text-base md:text-lg">
            다양한 기술과 경험을 쌓아온 커리어입니다.
          </p>
        </div>

        <div className="timeline">
          {visibleCareers.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.role}</h3>
                <div className="timeline-subtitle">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
                {item.tech && item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border-subtle">
                    {item.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMoreCareers && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAllCareers(!showAllCareers)}
              className="btn btn-secondary flex items-center gap-2 text-sm"
            >
              {showAllCareers ? '접기' : `더보기 (${careers.length - CAREER_LIMIT}개)`}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAllCareers ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
