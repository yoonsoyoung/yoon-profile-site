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
    tech: [
      'Java',
      'Spring Boot',
      'Vue.js',
      'JPA',
      'MariaDB',
      'Django',  // 팀원이 백엔드에서 사용
      'Node.js', // 팀원이 백엔드에서 사용
      'Python',  // 데이터 수집/처리
      'REST API'  // 핵심 아키텍처 패턴
    ],
    image: 'https://user-images.githubusercontent.com/32251962/136781069-97a7afb7-082f-4a5c-b438-ca6670a56c64.png',
    hasDetailPage: true,
    period: '2021.08 ~ 2021.10',
    team: '5인 팀 프로젝트 (마이페이지 + 배포)',
    infoLink: 'https://github.com/yoonsoyoung/Send.U.Scent-Bigdata_based_recommend',
    overview: `빅데이터(31,987개 향수 데이터) 기반 개인 맞춤 향수 추천 서비스.
사용자의 향 취향을 12가지 질문으로 파악한 선호 향 및 향수 추천과 사용자 평점 가중치 및 성향을 반영한 코사인 유사도 알고리즘으로 향수 10개를 추천합니다.`,
    architecture: `프론트엔드(Vue.js 3) ↔ REST API(Spring Boot/Django/Node.js) ↔ MariaDB 다층 구조로 설계되었습니다.

[데이터 파이프라인] Python 기반으로 Kaggle 데이터셋을 수집하여 Pandas로 정제 및 가공
[추천 엔진] 코사인 유사도 알고리즘 기반의 아이템-기반 필터링 구현
[서버 아키텍처] MVC 패턴 + JPA ORM + 동적 쿼리(QueryDSL) 활용으로 유연한 필터링 구현
[배포] AWS EC2 + Nginx 조합으로 프로덕션 배포`,
    architectureImage: 'https://user-images.githubusercontent.com/32251962/136782460-c312580a-bf77-4ab0-96a1-3d06845a50d1.png',
    architectureAlt: '아키텍처 이미지',
    achievements: [
      '마이페이지 메뉴를 전담하여 보유 향수, 관심 향수, 리뷰 관리를 개발하고 사용자 향수 데이터를 효율적으로 관리할 수 있는 UX 구성',
      'JPA 및 queryDSL을 활용하여 사용자 조건 기반 향수/리뷰 조회 기능의 동적 쿼리 처리 구현',
      'Swagger 기반 API 문서화를 적용하여 프론트엔드-백엔드 간 협업 효율 향상',
      '리뷰/별점 관리 컴포넌트를 독립적으로 설계하여 마이페이지 뿐 아니라 향수 상세 페이지의 ‘한줄평’ 영역에서도 재사용하도록 구현',
      '이전 프로젝트(CAMEO)의 CBTI 테스트 구조를 응용하여 사용자 성향 기반 향수 추천 테스트 기능 기획 및 추천 흐름 구현에 기여',
      'Vue3 기반 컴포넌트 구조를 설계하고 Vuex 상태 관리를 적용하여 사용자 데이터 전역 상태 관리 구조 구현',
      '공통 SCSS 설정을 통해 폰트, 컬러, 사이즈를 변수화하여 UI 스타일 일관성과 유지보수성 향상',
      'Jenkins, AWS EC2, Nginx 기반 CI/CD 및 HTTPS 배포 환경을 구축하여 GitLab 메인 브랜치 반영 시 자동 배포 환경 구성',
      'Figma 기반 디자인 시스템을 정의하고 Vue 컴포넌트 단위 UI 구조로 구현하여 팀원 간 UI 협업 효율 향상'
    ],
  },
  {
    id: '02',
    title: '알림스케줄링 기능 개발',
    description: '조건 기반 학습 독려 문자/메일 자동 발송 기능을 제공합니다.',
    tech: ['Java', 'Spring Boot', 'Spring Batch', 'MSSQL', 'SMS/Email API'],
    image: 'https://images.unsplash.com/photo-1620287341401-e2945a4b9daa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hasDetailPage: true,
    period: '2022.05 ~ 2022.07',
    team: '개인 프로젝트',
    infoLink: '',
    overview: `조건 기반 학습 독려 문자/메일 자동 발송 서비스.
약 40개의 발송 기준에 따라 학습자의 즉시 이벤트(클릭, 상태 변화)와 정해진 시점의 배치 발송으로 맞춤 문자/메일을 발송합니다.`,
    architecture: `이벤트 기반 실시간 발송 + 스케줄 기반 배치 발송의 이원 구조로 설계되었습니다.

[실시간 발송 (Event-Driven)]
학습자의 클릭, 상태 변화 등 이벤트 발생 시 즉시 발송하며 공통 발송 메서드로 조건 검증 및 맞춤 메시지 생성

[배치 발송 (Batch-Scheduled)]
Spring Batch 기반으로 정해진 시점에 대상 사용자를 일괄 조회 및 발송

[메시지 생성]
Builder 패턴으로 필수/선택 파라미터 구분, 템플릿 분리 + 치환문자 방식으로 유지보수성 및 확장성 향상

[저장소] MSSQL 기반 학습자 수강 데이터, 발송 이력, 조건 설정 관리`,
    architectureImage: './img/[project]알림스케줄링 아키텍처.png',
    architectureAlt: '알림스케줄링 아키텍처 다이어그램',
    achievements: [
      '운영팀의 수기 문자/메일 발송 프로세스 반복 문제를 해결하기 위해 자동 발송 시스템 설계 및 개발',
      'Spring Batch 기반 배치 발송 구조를 분리하여 대량 발송 처리 안정성과 유지보수성 향상',
      '학습 진행 상태, 수강 일정 등 약 40여 개 조건 기반 발송 로직을 공통화하여 중복 코드 최소화',
      '문자/메일 발송 객체 생성 시 Builder 패턴을 적용하여 필수 파라미터와 선택 파라미터를 명확히 분리하고 객체 생성 과정의 휴먼 에러 및 누락 가능성 감소',
      '템플릿 치환 기반 메시지 구조를 설계하여 고객사별 문자/메일 포맷 확장 가능 구조 구현',
      '발송 실패 및 예외 상황에 대한 로그 처리와 상태 관리 기능을 추가하여 운영 대응 효율 개선',
      'MSSQL 기반 대상 사용자 조회 쿼리를 작성하고 발송 대상 데이터 처리 로직 구현',
      '전체 고객사 대상으로 기능 적용 및 운영 자동화 지원',
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
