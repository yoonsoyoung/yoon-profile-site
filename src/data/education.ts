export interface EducationItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  // bootcamp: 부트캠프, training: 직무교육, award: 수상 내역, degree: 학위/학력
  type: 'bootcamp' | 'training' | 'award' | 'degree';
  description?: string;
}

export interface QualificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  score?: string;
  // cert: 자격증, language: 어학 점수
  type: 'cert' | 'language';
}

export const educations: EducationItem[] = [
  {
    id: '01',
    period: '2015.03 ~ 2020.02',
    title: '조선대학교',
    organization: '컴퓨터공학과',
    type: 'degree',
    description: '졸업',
  },
  {
    id: '02', 
    period: '2019.06 ~ 2019.08',
    title: '머신러닝기반 Java응용 SW 개발자 과정 이수',
    organization: '스마트미디어인재개발원',
    type: 'training',
    description: '파이썬, Java 교육을 바탕으로 머신러닝 지도학습을 익히고, 웹 서비스에 접목하는 실습 위주 교육',
  },
  {
    id: '03', 
    period: '2019.08',
    title: '🏆빅데이터 융합 분석 최종 프로젝트 우수상',
    organization: '스마트미디어인재개발원',
    type: 'award',
    description: '머신러닝 기반 Java응용 SW개발자 과정 - 빅데이터 융합 분석 최종 프로젝트(휴가지 방문자 수 예측 서비스) 우수상 수상',
  },
  {
    id: '04', 
    period: '2021.01 ~ 2021.11',
    title: '삼성 청년 SW 아카데미(SSAFY) 이수',
    organization: '삼성전자',
    type: 'bootcamp',
    description: '1학기 집중 코딩 및 알고리즘 교육, 2학기 심화 프로젝트 수행',
  },
  {
    id: '05', 
    period: '2021.10',
    title: '🏆특화 프로젝트(Send.U.Scent) 우수상',
    organization: '삼성 청년 SW 아카데미(SSAFY)',
    type: 'award',
    description: '[2학기] 특화 프로젝트 광주 2반 3등',
  },
  {
    id: '06', 
    period: '2021.11',
    title: '🏆자율 프로젝트(1Dayverse) 우수상',
    organization: '삼성 청년 SW 아카데미(SSAFY)',
    type: 'award',
    description: '[2학기] 자율 프로젝트 광주 2반 2등',
  },
];

export const qualifications: QualificationItem[] = [
  {
    id: '01',
    name: '정보처리기사',
    issuer: '한국산업인력공단',
    date: '2019.08.16',
    type: 'cert',
  },
  {
    id: '02',
    name: '컴퓨터활용능력 1급',
    issuer: '고용노동부',
    date: '2020.10.09',
    type: 'cert',
  },
  {
    id: '03',
    name: '웹디자인기능사',
    issuer: '한국산업인력공단',
    date: '2021.07.09',
    type: 'cert',
  },
  {
    id: '04',
    name: 'SQLD(개발자)',
    issuer: '한국데이터산업진흥원',
    date: '2024.09.20',
    type: 'cert',
  },
  {
    id: '05',
    name: 'ADsP',
    issuer: '한국데이터산업진흥원',
    date: '2026.06.05',
    type: 'cert',
  },
  {
    id: '06',
    name: 'OPic IL',
    issuer: 'ACTFL',
    date: '2025.10.22',
    type: 'language',
  },
];
