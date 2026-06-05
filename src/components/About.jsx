import { useEffect, useRef } from 'react';

export function About() {
  const sectionRef = useRef(null);

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
              안정적인 서비스 구현을 중요하게 생각하는 풀스택 개발자입니다. 사용자에게 문제 없이
              전달되는 경험을 위해 꼼꼼하게 개발하고 개선합니다.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              실제 사용자에게 가치를 주는 서비스를 만들며 지속적으로 성장하고자 합니다.
              프론트엔드부터 백엔드까지 전체 스택을 이해하고, 각 계층 간의 최적 상태를 추구합니다.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              새로운 기술을 배우고 적용하는 것을 좋아하며, 협업과 코드 리뷰를 통해 더 나은 개발자가
              되기 위해 노력하고 있습니다.
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
