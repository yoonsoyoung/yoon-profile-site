export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  hasDetailPage: boolean;
}

export interface ProjectDetail extends ProjectCard {
  period: string;
  team: string;
  overview: string;
  architecture: string;
  achievements: string[];
}

export type Project = ProjectCard | ProjectDetail;

export function isDetailProject(project: Project): project is ProjectDetail {
  return project.hasDetailPage;
}

export const projects: Project[] = [
  {
    id: '01',
    title: '풀스택 웹 애플리케이션',
    description: '사용자 경험을 중심으로 설계한 풀스택 웹 애플리케이션입니다. 프론트엔드와 백엔드를 함께 구현합니다.',
    tech: ['Spring Boot', 'Vue.js', 'MySQL'],
    image: 'https://picsum.photos/seed/fullstack/800/500',
    hasDetailPage: true,
    period: '2025.01 ~ 2025.03',
    team: '3인 팀 프로젝트',
    overview: '사용자 경험을 중심으로 설계한 풀스택 웹 애플리케이션입니다. 프론트엔드부터 백엔드까지 전체 스택을 직접 구현하여 사용자에게 문제 없이 전달되는 경험을 제공합니다.',
    architecture: 'Spring Boot 기반의 REST API 서버와 Vue.js로 구성된 프론트엔드, 데이터베이스는 MySQL을 사용합니다. MVC 패턴을 따르며 JPA를 통한 데이터 접근 계층을 구현했습니다.',
    achievements: [
      'Vue.js 컴포넌트 구조화로 개발 생산성 40% 향상',
      'Spring Boot 성능 최적화로 API 응답시간 300ms → 50ms 단축',
      'MySQL 인덱싱 전략으로 복잡 쿼리 성능 50% 개선',
      '팀원과의 협업을 통해 코드 리뷰 및 개선 사항 반영',
    ],
  },
  {
    id: '02',
    title: 'REST API 서버',
    description: '확장 가능하고 효율적인 REST API 서버 구현. 데이터베이스 설계부터 배포까지 전체 과정을 포함합니다.',
    tech: ['Java', 'Spring Boot', 'JPA'],
    image: 'https://picsum.photos/seed/restapi/800/500',
    hasDetailPage: true,
    period: '2024.10 ~ 2024.12',
    team: '개인 프로젝트',
    overview: '확장 가능하고 효율적인 REST API 서버를 Spring Boot로 구현했습니다. 데이터베이스 설계부터 배포까지 전체 과정을 거쳐 프로덕션 레디 상태의 API를 구축했습니다.',
    architecture: 'Spring Boot 3.x 기반의 마이크로서비스 아키텍처로 설계되었습니다. JPA를 통한 ORM, Spring Security를 이용한 인증/인가, JWT 토큰 기반의 보안 구현이 포함되어 있습니다.',
    achievements: [
      'JWT 기반 토큰 인증 시스템 구현',
      'Swagger UI를 이용한 API 문서 자동화',
      'H2 데이터베이스를 활용한 테스트 환경 구성',
      '마이크로서비스 패턴을 적용한 확장 가능한 아키텍처 설계',
    ],
  },
  {
    id: '03',
    title: '프론트엔드 포트폴리오',
    description: 'React로 구현한 인터랙티브한 포트폴리오 사이트. 모던한 UI와 부드러운 애니메이션을 제공합니다.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: 'https://picsum.photos/seed/frontend/800/500',
    hasDetailPage: true,
    period: '2025.05 ~ 현재',
    team: '개인 프로젝트',
    overview: 'React와 TypeScript를 활용하여 개발한 인터랙티브한 포트폴리오 사이트입니다. 모던한 UI 디자인과 부드러운 애니메이션으로 사용자에게 긍정적인 경험을 전달합니다.',
    architecture: 'React 19 + TypeScript 기반의 SPA(Single Page Application)입니다. Vite를 빌드 도구로 사용하며, Tailwind CSS를 통한 스타일링과 React Router를 이용한 클라이언트 라우팅을 구현했습니다.',
    achievements: [
      'TypeScript를 통한 타입 안정성 확보 (strict mode)',
      'Tailwind CSS를 활용한 반응형 디자인 구현',
      'React Hooks를 활용한 함수형 컴포넌트 구조',
      'GitHub Pages를 통한 자동 배포 파이프라인 구성',
    ],
  },
];
