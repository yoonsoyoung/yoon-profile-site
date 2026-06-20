import React, { useState, useEffect, useRef } from 'react';
import { educations, qualifications } from '../data/education';

const EDU_LIMIT = 3;
const QUAL_LIMIT = 4;

export function Education(): React.ReactElement {
  const [showAllEducations, setShowAllEducations] = useState(false);
  const [showAllQualifications, setShowAllQualifications] = useState(false);

  const sortedEducations = [...educations].sort((a, b) => parseInt(b.id) - parseInt(a.id));
  const visibleEducations = showAllEducations ? sortedEducations : sortedEducations.slice(0, EDU_LIMIT);
  const visibleQualifications = showAllQualifications ? qualifications : qualifications.slice(0, QUAL_LIMIT);

  const hasMoreEducations = educations.length > EDU_LIMIT;
  const hasMoreQualifications = qualifications.length > QUAL_LIMIT;
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
      id="education"
      data-section-id="education"
      ref={sectionRef}
      className="fade-in-section relative py-24 px-6 md:px-12 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="divider"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">교육 및 자격</h2>
          <p className="text-text-secondary text-base md:text-lg">
            지속적인 학습과 개발을 통해 성장해온 기록입니다.
          </p>
        </div>

        {educations.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-8">교육 및 수상</h3>
            <div className="timeline">
              {visibleEducations.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-content">
                    <div className="timeline-period">{item.period}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <div className="timeline-subtitle">{item.organization}</div>
                    {item.description && (
                      <p className="timeline-description">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {hasMoreEducations && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllEducations(!showAllEducations)}
                  className="btn btn-secondary flex items-center gap-2 text-sm"
                >
                  {showAllEducations ? '접기' : `더보기 (${educations.length - EDU_LIMIT}개)`}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${showAllEducations ? 'rotate-180' : ''}`}
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
        )}

        {qualifications.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 pt-8 border-t border-border-subtle">
              자격증 및 어학
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleQualifications.map((item) => (
                <div
                  key={item.id}
                  className="bg-bg-card border border-border-subtle rounded-lg p-6 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-text-primary text-lg">{item.name}</h4>
                    <span className="text-xs font-mono text-text-muted">{item.date}</span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-2">{item.issuer}</p>
                  {item.score && <p className="text-sm text-text-secondary">점수: {item.score}</p>}
                </div>
              ))}
            </div>

            {hasMoreQualifications && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllQualifications(!showAllQualifications)}
                  className="btn btn-secondary flex items-center gap-2 text-sm"
                >
                  {showAllQualifications ? '접기' : `더보기 (${qualifications.length - QUAL_LIMIT}개)`}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${showAllQualifications ? 'rotate-180' : ''}`}
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
        )}
      </div>
    </section>
  );
}
