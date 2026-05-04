// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.fade-in-section');
const scrollTopBtn = document.getElementById('scroll-top-btn');

// ===== Navbar Scroll Behavior & Scroll Top Button =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Show/hide scroll-to-top button
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }

  // Update active nav link based on scroll position
  updateActiveNavLink();
});

// ===== Scroll To Top =====
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
  });
});

// ===== Active Nav Link Highlighting =====
function updateActiveNavLink() {
  const scrollPosition = window.scrollY;

  // Get all sections with their positions
  const sectionData = Array.from(sections).map((section) => {
    const id = section.id || 'hero';
    const rect = section.getBoundingClientRect();
    const offsetTop = window.scrollY + rect.top;
    return { id, offsetTop };
  });

  // Find the section currently in view
  let currentSection = null;
  for (let i = sectionData.length - 1; i >= 0; i--) {
    if (scrollPosition >= sectionData[i].offsetTop - 150) {
      currentSection = sectionData[i].id;
      break;
    }
  }

  // Update nav links
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  if (currentSection) {
    const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -10% 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

// ===== Stagger Animation for Skill Pills =====
const skillPills = document.querySelectorAll('.skill-pill');
skillPills.forEach((pill, index) => {
  pill.style.transitionDelay = `${index * 0.1}s`;
});

// ===== Initialize =====
updateActiveNavLink();
