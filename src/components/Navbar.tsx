import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

interface NavLink {
  label: string;
  href: string;
}

export function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
      updateActiveNavLink();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateActiveNavLink = (): void => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('[data-section-id]');

    let currentSection = 'hero';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      if (scrollPosition >= offsetTop - 150) {
        currentSection = section.getAttribute('data-section-id') || 'hero';
      }
    });

    setActiveSection(currentSection);
  };

  const handleNavLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { label: '소개', href: '#about' },
    { label: '기술', href: '#skills' },
    { label: '프로젝트', href: '#projects' },
    { label: '연락처', href: '#contact' },
  ];

  return (
    <nav id="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'scrolled' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-text-primary hover:text-accent transition-colors"
        >
          SOYOUNG.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link ${
                activeSection === href.slice(1) ? 'active' : ''
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="테마 전환"
          >
            <svg className="icon-moon w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg className="icon-sun w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <path
                d="M12 1v6M12 17v6M23 12h-6M7 12H1M20.485 3.515l-4.243 4.243M7.758 16.242l-4.243 4.243M20.485 20.485l-4.243-4.243M7.758 7.757L3.515 3.514"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hamburger"
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-link block py-2 ${
                  activeSection === href.slice(1) ? 'active' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
