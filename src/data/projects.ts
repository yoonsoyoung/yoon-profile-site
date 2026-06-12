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
  infoLink: string;
  overview: string;
  architecture: string;
  architectureImage: string;
  architectureAlt: string;
  achievements: string[];
}

export type Project = ProjectCard | ProjectDetail;

export function isDetailProject(project: Project): project is ProjectDetail {
  return project.hasDetailPage;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Send.U.Scent',
    description: '빅데이터 기반 개인별 향수 추천 웹 서비스입니다.',
    tech: ['Spring Boot', 'Vue.js', 'JPA', 'MariaDB'],
    image: 'https://user-images.githubusercontent.com/32251962/136781069-97a7afb7-082f-4a5c-b438-ca6670a56c64.png',
    hasDetailPage: true,
    period: '2021.08 ~ 2021.10',
    team: '5인 팀 프로젝트',
    infoLink: '',
    overview: '사용자 경험을 중심으로 설계한 풀스택 웹 애플리케이션입니다. 프론트엔드부터 백엔드까지 전체 스택을 직접 구현하여 사용자에게 문제 없이 전달되는 경험을 제공합니다.',
    architecture: 'Spring Boot 기반의 REST API 서버와 Vue.js로 구성된 프론트엔드, 데이터베이스는 MySQL을 사용합니다. MVC 패턴을 따르며 JPA를 통한 데이터 접근 계층을 구현했습니다.',
    architectureImage: 'https://user-images.githubusercontent.com/32251962/136782460-c312580a-bf77-4ab0-96a1-3d06845a50d1.png',
    architectureAlt: '아키텍처 이미지',
    achievements: [
      'Vue.js 컴포넌트 구조화로 개발 생산성 40% 향상',
      'Spring Boot 성능 최적화로 API 응답시간 300ms → 50ms 단축',
      'MySQL 인덱싱 전략으로 복잡 쿼리 성능 50% 개선',
      '팀원과의 협업을 통해 코드 리뷰 및 개선 사항 반영',
    ],
  },
  {
    id: '02',
    title: '알림스케줄링 기능 개발',
    description: '조건 기반 학습 독려 문자/메일 자동 발송 기능을 제공합니다.',
    tech: ['Java', 'Spring Boot', 'Spring Batch', 'MSSQL'],
    image: 'https://images.unsplash.com/photo-1620287341401-e2945a4b9daa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hasDetailPage: true,
    period: '2022.05 ~ 2022.07',
    team: '개인 프로젝트',
    infoLink: '',
    overview: '확장 가능하고 효율적인 REST API 서버를 Spring Boot로 구현했습니다. 데이터베이스 설계부터 배포까지 전체 과정을 거쳐 프로덕션 레디 상태의 API를 구축했습니다.',
    architecture: 'Spring Boot 3.x 기반의 마이크로서비스 아키텍처로 설계되었습니다. JPA를 통한 ORM, Spring Security를 이용한 인증/인가, JWT 토큰 기반의 보안 구현이 포함되어 있습니다.',
    architectureImage: 'https://user-images.githubusercontent.com/32251962/136782460-c312580a-bf77-4ab0-96a1-3d06845a50d1.png',
    architectureAlt: '아키텍처 이미지',
    achievements: [
      'JWT 기반 토큰 인증 시스템 구현',
      'Swagger UI를 이용한 API 문서 자동화',
      'H2 데이터베이스를 활용한 테스트 환경 구성',
      '마이크로서비스 패턴을 적용한 확장 가능한 아키텍처 설계',
    ],
  },
  {
    id: '03',
    title: '1Dayverse',
    description: '메타버스 환경의 원데이 클래스 강의를 제공하는 웹 서비스 입니다.',
    tech: ['Unity', 'Vue.js', 'MySQL', 'WebRTC'],
    image: 'https://github.com/yoonsoyoung/1Dayverse/blob/main/exec/%EC%8B%9C%EC%97%B0%20%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4/%ED%99%88%ED%99%94%EB%A9%B41.PNG?raw=true',
    hasDetailPage: true,
    period: '2021.10 ~ 2021.11',
    team: '5인 팀프로젝트',
    infoLink: 'https://github.com/yoonsoyoung/1Dayverse',
    overview: 'React와 TypeScript를 활용하여 개발한 인터랙티브한 포트폴리오 사이트입니다. 모던한 UI 디자인과 부드러운 애니메이션으로 사용자에게 긍정적인 경험을 전달합니다.',
    architecture: 'React 19 + TypeScript 기반의 SPA(Single Page Application)입니다. Vite를 빌드 도구로 사용하며, Tailwind CSS를 통한 스타일링과 React Router를 이용한 클라이언트 라우팅을 구현했습니다.',
    architectureImage: 'https://user-images.githubusercontent.com/32251962/142543897-bcc09e55-98fb-4479-8933-36b6c5fb72c9.png',
    architectureAlt: '아키텍처 이미지',
    achievements: [
      'TypeScript를 통한 타입 안정성 확보 (strict mode)',
      'Tailwind CSS를 활용한 반응형 디자인 구현',
      'React Hooks를 활용한 함수형 컴포넌트 구조',
      'GitHub Pages를 통한 자동 배포 파이프라인 구성',
    ],
  },
];
