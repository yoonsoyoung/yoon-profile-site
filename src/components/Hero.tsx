import React from 'react';

export function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      data-section-id="hero"
      className="relative min-h-screen bg-bg-primary flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="grid-background"></div>
      <div className="hero-glow"></div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="hero-eyebrow text-accent text-sm md:text-base mb-4 md:mb-6 font-medium">
              안녕하세요, 저는
            </div>

            <h1 className="hero-name text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              윤소영
            </h1>

            <h2 className="hero-role gradient-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-8">
              풀스택 개발자
            </h2>

            <p className="hero-tagline text-text-secondary text-base md:text-lg max-w-2xl mb-8 md:mb-12 leading-relaxed">
              안정적인 서비스 구현을 중요하게 생각합니다.
              <br className="hidden md:block" />
              사용자에게 문제 없이 전달되는 경험을 위해 꼼꼼하게 개발하고 개선합니다.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 justify-center md:justify-start">
              <a href="mailto:soyoung_it@naver.com" className="btn btn-primary">
                이메일 보내기
              </a>
              <a
                href="https://github.com/yoonsoyoung"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub 보기
              </a>
            </div>

            <div className="hero-socials flex gap-6 justify-center md:justify-start">
              <a
                href="mailto:soyoung_it@naver.com"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="이메일"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://github.com/yoonsoyoung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-socials flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20">
                <img
                  src="/myprofile.png"
                  alt="윤소영 아바타"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-110 animate-pulse pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <svg
          className="w-6 h-6 text-accent mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
