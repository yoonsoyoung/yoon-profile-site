# 라이트모드 추가 및 다크/라이트 테마 토글 구현

## Context

현재 프로필 사이트는 다크모드로만 고정되어 있음. 사용자 취향에 따라 라이트/다크 모드를 전환할 수 있는 토글 버튼을 추가해야 함.

주요 기술 이슈: CSS 변수(`style.css`)와 Tailwind 커스텀 컬러(`index.html` Tailwind config)가 함께 쓰이는데, Tailwind가 현재 hex 하드코딩으로 정의되어 있어 CSS 변수 교체만으로는 Tailwind 클래스 부분이 반응하지 않음.

## 구현 전략

### 핵심 해결책: Tailwind config를 CSS 변수 참조로 교체

`index.html`의 Tailwind config에서 hex 값을 CSS 변수 참조로 변경:
```js
// Before
'bg-primary': '#0a0a0f',
// After  
'bg-primary': 'var(--bg-primary)',
```
이렇게 하면 `.bg-bg-primary { background-color: var(--bg-primary); }` 로 생성되어, CSS 변수가 바뀌면 Tailwind 클래스도 자동 반응.

### 테마 전환 방식

`<html>` 태그에 `data-theme` 속성 토글:
- 다크 기본값: `data-theme="dark"` (또는 없음)  
- 라이트 전환: `data-theme="light"`

---

## 수정 파일

### 1. `style.css`

**a) `:root`에 `--nav-scrolled-bg` 변수 추가 (nav.scrolled 하드코딩 해결)**

```css
:root {
  /* 기존 변수들... */
  --nav-scrolled-bg: rgba(10, 10, 15, 0.9);
}
```

**b) `[data-theme="light"]` 블록 추가** (`:root` 바로 아래)

```css
[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --bg-card: #ffffff;
  --accent: #4f46e5;
  --accent-hover: #6366f1;
  --accent-secondary: #059669;
  --accent-tertiary: #7c3aed;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --border-subtle: #e2e8f0;
  --nav-scrolled-bg: rgba(248, 250, 252, 0.92);
}
```

**c) `nav.scrolled` 배경 변수화**

```css
/* Before */
nav.scrolled {
  background-color: rgba(10, 10, 15, 0.9);
/* After */
nav.scrolled {
  background-color: var(--nav-scrolled-bg);
```

**d) 테마 전환 부드러운 트랜지션 추가** (body에)

```css
body {
  /* 기존 속성들... */
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

**e) 테마 토글 버튼 스타일 추가**

```css
.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  background-color: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
  background-color: rgba(99, 102, 241, 0.08);
}
/* 아이콘 전환 */
.theme-toggle .icon-sun { display: none; }
.theme-toggle .icon-moon { display: block; }
[data-theme="light"] .theme-toggle .icon-sun { display: block; }
[data-theme="light"] .theme-toggle .icon-moon { display: none; }
```

**f) 라이트 모드 project-card hover 그림자 보정**

```css
[data-theme="light"] .project-card:hover {
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
}
[data-theme="light"] .contact-card:hover {
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.12);
}
```

### 2. `index.html`

**a) `<html>` 태그에 `data-theme="dark"` 추가**

```html
<html lang="ko" class="scroll-smooth" data-theme="dark">
```

**b) Tailwind config 색상 값을 CSS 변수 참조로 교체** (28~42줄)

```js
colors: {
  'bg-primary': 'var(--bg-primary)',
  'bg-secondary': 'var(--bg-secondary)',
  'bg-card': 'var(--bg-card)',
  accent: 'var(--accent)',
  'accent-hover': 'var(--accent-hover)',
  'text-primary': 'var(--text-primary)',
  'text-secondary': 'var(--text-secondary)',
  'text-muted': 'var(--text-muted)',
  'border-subtle': 'var(--border-subtle)',
},
```

**c) 테마 토글 버튼 추가** (네비게이션 데스크탑 메뉴 + 햄버거 버튼 사이)

```html
<!-- Theme Toggle Button -->
<button id="theme-toggle" class="theme-toggle" aria-label="테마 전환">
  <!-- 달 아이콘 (다크모드일 때 표시) -->
  <svg class="icon-moon w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
  <!-- 해 아이콘 (라이트모드일 때 표시) -->
  <svg class="icon-sun w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
  </svg>
</button>
```

### 3. `script.js`

**테마 토글 로직 추가** (파일 앞부분 DOM 요소 + 파일 끝에 초기화)

```js
// DOM에 추가
const themeToggle = document.getElementById('theme-toggle');

// 테마 토글 함수
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});

// 초기화: localStorage 저장값 또는 시스템 설정 기반
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  setTheme('light');
}
```

---

## 검증 방법

1. `script.js`에서 `npx serve .` 또는 `live-server`로 로컬 서버 실행
2. 네비게이션 바에 토글 버튼 표시 확인
3. 버튼 클릭 시 배경/텍스트 색상 부드럽게 전환되는지 확인
4. 새로고침 후 선택한 테마가 유지되는지 확인 (localStorage)
5. 다크→라이트→다크 반복 전환 시 모든 섹션(Hero, About, Skills, Projects, Contact) 색상 정상 확인
6. 모바일 뷰 햄버거 메뉴에서도 토글 버튼 접근 가능한지 확인
