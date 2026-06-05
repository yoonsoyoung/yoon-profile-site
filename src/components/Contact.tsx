import React, { useEffect, useRef } from 'react';

export function Contact(): React.ReactElement {
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
      id="contact"
      data-section-id="contact"
      ref={sectionRef}
      className="fade-in-section relative py-24 px-6 md:px-12 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="divider"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">연락하기</h2>
          <p className="text-text-secondary text-base md:text-lg">
            협업이나 문의 사항이 있으시면 언제든지 연락해 주세요.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a href="mailto:soyoung_it@naver.com" className="contact-card group">
            <svg
              className="w-8 h-8 text-accent mx-auto mb-3 group-hover:text-accent-hover transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div className="font-semibold text-text-primary mb-1">이메일</div>
            <div className="text-text-secondary text-sm">soyoung_it@naver.com</div>
          </a>

          <a
            href="https://github.com/yoonsoyoung"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group"
          >
            <svg
              className="w-8 h-8 text-accent mx-auto mb-3 group-hover:text-accent-hover transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <div className="font-semibold text-text-primary mb-1">GitHub</div>
            <div className="text-text-secondary text-sm">github.com/yoonsoyoung</div>
          </a>
        </div>

        <div className="text-center">
          <a href="mailto:soyoung_it@naver.com" className="btn btn-primary">
            이메일 보내기
          </a>
        </div>
      </div>
    </section>
  );
}
