import React, { useEffect, useRef } from 'react';

export function About(): React.ReactElement {
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
      id="about"
      data-section-id="about"
      ref={sectionRef}
      className="fade-in-section relative py-24 px-6 md:px-12 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="divider"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              저는 개발의 본질을 '사용자 관점에서 문제를 해결하는 것'이라 봅니다. 기능을 구현하는 데서 그치지 않고, 관리자와 사용자가 실제로 무엇을 필요로 하는지 고민하며 개발합니다.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
               2년 넘게 LMS 솔루션을 개발하면서 Java, Spring Boot, JSP 기반의 안정적이고 확장성 있는 백엔드 설계를 경험했습니다. 부트캠프와 온라인 강의로 Vue.js, React 등 프론트엔드 기술을 익히며, 더 넓은 관점에서 사용자 중심의 서비스를 만드는 법을 배우고 있습니다.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              협업하고 소통하며 팀과 함께 성장하고, 더 많은 도메인 경험과 기술 역량을 쌓아 사용자 중심의 서비스를 만드는 개발자가 되고자 합니다.
            </p>
          </div>

          <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-6 h-fit">
            <div>
              <div className="text-accent font-mono text-xs tracking-widest uppercase mb-2">About</div>
              <h3 className="text-text-primary text-lg font-semibold">개발자로서의 여정</h3>
            </div>

            <div className="space-y-4">
              <div className="pb-4 border-b border-border-subtle">
                <div className="text-accent font-mono text-xs mb-1">Focus</div>
                <p className="text-text-secondary text-sm">안정적이고 사용자 중심의 서비스</p>
              </div>
              <div className="pb-4 border-b border-border-subtle">
                <div className="text-accent font-mono text-xs mb-1">Approach</div>
                <p className="text-text-secondary text-sm">꼼꼼한 개발과 지속적인 개선</p>
              </div>
              <div>
                <div className="text-accent font-mono text-xs mb-1">Goal</div>
                <p className="text-text-secondary text-sm">실제 가치를 전달하며 성장하기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
