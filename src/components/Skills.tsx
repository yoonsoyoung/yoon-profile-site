import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
}

export function Skills(): React.ReactElement {
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

  const frontendSkills: Skill[] = [
    { name: 'HTML 5', icon: 'dot-orange' },
    { name: 'SCSS', icon: 'dot-pink' },
    { name: 'JavaScript', icon: 'dot-yellow' },
    { name: 'Vue.js', icon: 'dot-green' },
    { name: 'React', icon: 'dot-cyan' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Java', icon: 'dot-red' },
    { name: 'Spring Boot', icon: 'dot-emerald' },
    { name: 'JSP', icon: 'dot-gray' },
    { name: 'MSSQL', icon: 'dot-indigo' },
    { name: 'MySQL', icon: 'dot-blue' },
    { name: 'MyBatis', icon: 'dot-purple' },
  ];

  return (
    <section
      id="skills"
      data-section-id="skills"
      ref={sectionRef}
      className="fade-in-section relative py-24 px-6 md:px-12 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="divider"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">기술 스택</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
            <h3 className="text-accent font-mono text-xs tracking-widest uppercase mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="skill-pill px-4 py-2 bg-bg-primary border border-border-subtle rounded-full text-text-primary text-sm hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200"
                >
                  <span className={`skill-dot ${skill.icon} inline-block`}></span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
            <h3 className="text-green-500 font-mono text-xs tracking-widest uppercase mb-6">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="skill-pill px-4 py-2 bg-bg-primary border border-border-subtle rounded-full text-text-primary text-sm hover:border-red-500/60 hover:bg-red-500/10 transition-all duration-200"
                >
                  <span className={`skill-dot ${skill.icon} inline-block`}></span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
