export interface CareerItem {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  tech?: string[];
}

export const careerResumeLink = 'https://yoonsoyoung-portfolio.notion.site/30a1b0aaa48a80038bcff5836bb7ff8e?pvs=74';

export const careers: CareerItem[] = [
  {
    id: '01',
    period: '2022.03 ~ 2024.08',
    company: '(주)퍼브',
    role: '솔루션개발팀 프로(사원)',
    description: '백엔드 개발, 프론트엔드 개발, 교육 플랫폼 개발 및 유지보수',
    tech: ['Java', 'Spring Boot', 'JSP', 'Javascript', 'MSSQL', 'Mybatis'],
  },
];
