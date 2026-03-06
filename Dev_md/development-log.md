# Papers - 개발일지

## 프로젝트 개요

**프로젝트명:** Papers - 대학원생 논문작성 학습 & 연구 협업 플랫폼
**저장소:** https://github.com/aebonlee/papers
**도메인:** papers.dreamitbiz.com
**기술 스택:** React 19 + Vite 7 + Supabase + react-router-dom 7
**기반 템플릿:** aebonlee/templete (DreamIT Biz 하위사이트 템플릿)

---

## 2026-03-06 | 초기 구축 완료

### 작업 내용

#### 1. 사이트 기획
- 대학원생의 논문작성 학습을 돕는 체계적인 가이드 플랫폼
- 분야별 맞춤 자료 제공 (인문사회, 자연과학, 공학, 의학/보건, 예술/체육)
- 연구자 간 협업 프로젝트 기능
- 커뮤니티 (Q&A, 논문 리뷰, 스터디 모집)

#### 2. 사이트 구조 설계 및 구현

**네비게이션 구조:**
```
홈
├── 논문작성 가이드
│   ├── 논문 구조
│   ├── 연구방법론
│   ├── 학술적 글쓰기
│   ├── 참고문헌 관리
│   ├── 통계분석
│   └── 연구윤리
├── 분야별 자료
│   ├── 인문사회
│   ├── 자연과학
│   ├── 공학
│   ├── 의학/보건
│   └── 예술/체육
├── 연구 프로젝트
└── 커뮤니티
```

#### 3. 생성/수정된 파일 목록

**설정 파일:**
- `src/config/site.js` - 사이트 브랜딩, 네비게이션 메뉴, 푸터 링크 설정
- `src/utils/translations.js` - 한국어/영어 번역 키 전체 재작성
- `index.html` - 타이틀, 메타 정보 변경
- `CNAME`, `public/CNAME` - 도메인 설정 (papers.dreamitbiz.com)
- `public/favicon.svg` - 'P' 로고 파비콘

**페이지 컴포넌트 (신규):**
- `src/pages/Home.jsx` - 히어로 + 기능 카드 + 통계 + CTA 섹션
- `src/pages/WritingGuide.jsx` - 6단계 학습 로드맵 개요
- `src/pages/PaperStructure.jsx` - 논문 구조 6개 섹션 상세
- `src/pages/ResearchMethodology.jsx` - 양적/질적/혼합 연구방법론
- `src/pages/AcademicWriting.jsx` - 학술적 글쓰기 6가지 팁
- `src/pages/ReferenceManagement.jsx` - 인용 형식 4종 + 관리 도구 3종
- `src/pages/StatisticalAnalysis.jsx` - 통계분석 6개 방법 + 소프트웨어 4종
- `src/pages/ResearchEthics.jsx` - 연구윤리 6대 원칙
- `src/pages/FieldResources.jsx` - 5개 분야 카드 목록
- `src/pages/FieldDetail.jsx` - 분야별 상세 (개요, 학술지, 팁)
- `src/pages/Projects.jsx` - 프로젝트 목록 + 필터링
- `src/pages/ProjectDetail.jsx` - 프로젝트 상세 + 토론
- `src/pages/Community.jsx` - 커뮤니티 게시글 목록 + 카테고리 필터
- `src/pages/CommunityDetail.jsx` - 게시글 상세 + 댓글

**유틸리티 (신규):**
- `src/utils/projectStorage.js` - 프로젝트 CRUD (Supabase 또는 샘플 데이터)
- `src/utils/communityStorage.js` - 커뮤니티 CRUD (Supabase 또는 샘플 데이터)

**라우팅:**
- `src/layouts/PublicLayout.jsx` - 모든 신규 페이지 라우트 등록

**스타일:**
- `src/styles/site.css` - 전체 사이트 전용 스타일 (히어로, 카드, 그리드, 필터, 반응형)

#### 4. 주요 기술 결정

| 항목 | 결정 | 사유 |
|------|------|------|
| 데이터 레이어 | Supabase + 로컬 폴백 | 템플릿 패턴 준수, 데모 모드 지원 |
| 애니메이션 | `data-aos` 속성 + `useAOS` 훅 | 템플릿 기존 구현 활용 |
| i18n | `translations.js` 딕셔너리 | 템플릿 기존 패턴 |
| 반응형 | 1100/768/480px 3단계 | 템플릿 기준 유지 |
| 카운트업 | `useCountUp` 훅 | 홈 통계 섹션 시각 효과 |

#### 5. 빌드 결과
- Vite 빌드 성공 (1.96s)
- 총 128개 모듈 변환
- dist/ 출력 완료

---

## 2026-03-06 | 배포 수정 & 버그 픽스

### 이슈
- GitHub Pages에서 사이트 콘텐츠가 표시되지 않음 (빈 페이지)

### 원인 분석
1. **배포 워크플로 문제**: `actions/deploy-pages@v4`는 GitHub Pages 소스가 "GitHub Actions"로 설정되어야 동작. 현재 "Deploy from a branch"로 설정되어 소스 `index.html`이 직접 서빙되고 빌드된 JS 번들이 없음
2. **LanguageContext `lang` 미제공**: 컨텍스트가 `language`만 제공하는데, 컴포넌트들이 `{ t, lang }`으로 구조분해. `lang`이 `undefined`가 되어 한국어/영어 분기가 올바르게 작동하지 않음

### 수정 사항
1. `.github/workflows/deploy.yml` — `peaceiris/actions-gh-pages@v4`로 변경하여 `gh-pages` 브랜치에 빌드 결과를 배포. "Deploy from a branch" 설정과 호환
2. `src/contexts/LanguageContext.jsx` — `lang: language` 별칭 추가

### GitHub Pages 설정 필요
- **Settings → Pages → Source**: `gh-pages` 브랜치의 `/ (root)` 선택

---

---

## 2026-03-06 | Supabase 스키마 & 관리자 페이지 구현

### 구현 계획 요약

연구 프로젝트와 커뮤니티 기능이 로컬 샘플 데이터로만 동작하던 상태에서, Supabase DB 기반 실제 CRUD 운영과 관리자 대시보드를 추가 구현.

### 작업 내용

#### 1. Supabase SQL 스키마 (`supabase/schema.sql`)
- **research_projects** 테이블: id(uuid), title, description, field, status(recruiting/in_progress/completed), leader_id(FK→auth.users), leader_name, leader_email, members, max_members, deadline, created_at
  - 기존 AHP용 `projects` 테이블과 충돌 방지를 위해 `research_projects`로 명명
- **community_posts** 테이블: id(uuid), title, content, category(qna/review/study), author_id(FK→auth.users), author_name, author_email, views, replies, created_at
- **comments** 테이블: 기존 테이블 재사용
- **RLS 정책**: SELECT 누구나, INSERT 인증 사용자, UPDATE/DELETE 작성자 또는 관리자
- **인덱스**: field, status, category

#### Supabase 연결 완료
- `.env` 설정: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- SQL 스키마 실행 완료 (research_projects, community_posts 테이블 생성 + RLS + 인덱스)
- API 연결 확인 완료

#### 2. Storage 유틸 확장
- `src/utils/projectStorage.js` — `updateProject()`, `deleteProject()`, `getProjectsCount()` 추가
- `src/utils/communityStorage.js` — `updatePost()`, `deletePost()`, `getPostsCount()` 추가
- 모든 함수 Supabase 우선 + 로컬 폴백 패턴 유지

#### 3. AdminGuard 컴포넌트 (`src/components/AdminGuard.jsx`)
- `AuthGuard` 패턴 복사 + `isAdmin` 체크 추가
- 비로그인 → `/login`, 비관리자 → `/` 리다이렉트

#### 4. AdminSidebar 컴포넌트 (`src/components/AdminSidebar.jsx`)
- 좌측 사이드바: 대시보드, 프로젝트 관리, 커뮤니티 관리 링크
- 현재 경로 active 표시, 사이트 복귀 링크

#### 5. Admin CSS (`src/styles/admin.css`)
- `.admin-layout` (flex: sidebar + content)
- `.admin-sidebar`, `.admin-content`, `.admin-stats-grid`, `.admin-stat-card`
- `.admin-table`, `.admin-actions`, `.admin-form`
- `.admin-filters`, `.admin-status-badge`
- 반응형: 768px에서 sidebar → 상단 탭 전환

#### 6. 관리자 페이지 (5개)
| 페이지 | 경로 | 기능 |
|--------|------|------|
| `AdminDashboard.jsx` | `/admin` | 통계 카드 + 최근 프로젝트/게시글 테이블 |
| `AdminProjects.jsx` | `/admin/projects` | 프로젝트 전체 목록 + 상태 필터 + 삭제 |
| `AdminProjectForm.jsx` | `/admin/projects/new`, `/admin/projects/edit/:id` | 프로젝트 생성/수정 폼 |
| `AdminCommunity.jsx` | `/admin/community` | 게시글 전체 목록 + 카테고리 필터 + 삭제 |
| `AdminCommunityForm.jsx` | `/admin/community/new`, `/admin/community/edit/:id` | 게시글 생성/수정 폼 |

#### 7. 사용자 작성 페이지 (2개)
| 페이지 | 경로 | 기능 |
|--------|------|------|
| `ProjectCreate.jsx` | `/projects/create` | AuthGuard + 프로젝트 생성 폼 |
| `CommunityWrite.jsx` | `/community/write` | AuthGuard + 게시글 작성 폼 |

#### 8. 기존 페이지 수정
- **`Projects.jsx`** — 로그인 시 "프로젝트 만들기" 버튼 추가 (→ `/projects/create`)
- **`Community.jsx`** — 로그인 시 "글쓰기" 버튼 추가 (→ `/community/write`)
- **`Navbar.jsx`** — 관리자 링크를 외부 URL에서 내부 `<Link to="/admin">`으로 변경
- **`PublicLayout.jsx`** — 관리자 + 사용자 작성 라우트 9개 추가

#### 9. i18n 추가 (`src/utils/translations.js`)
- `site.admin.*` 키 추가 (ko/en 모두)
- dashboard, projects, community, totalProjects, recruitingProjects, totalPosts, create, edit, delete, confirmDelete, save, cancel, field, status, title, description, category, author, date, actions, noData, viewAll, projectForm, communityForm, createProject, writePost

### 생성/수정 파일 요약

| 구분 | 파일 |
|------|------|
| 신규 | `supabase/schema.sql` |
| 신규 | `src/components/AdminGuard.jsx` |
| 신규 | `src/components/AdminSidebar.jsx` |
| 신규 | `src/styles/admin.css` |
| 신규 | `src/pages/admin/AdminDashboard.jsx` |
| 신규 | `src/pages/admin/AdminProjects.jsx` |
| 신규 | `src/pages/admin/AdminProjectForm.jsx` |
| 신규 | `src/pages/admin/AdminCommunity.jsx` |
| 신규 | `src/pages/admin/AdminCommunityForm.jsx` |
| 신규 | `src/pages/ProjectCreate.jsx` |
| 신규 | `src/pages/CommunityWrite.jsx` |
| 수정 | `src/utils/projectStorage.js` — update/delete/count 추가 |
| 수정 | `src/utils/communityStorage.js` — update/delete/count 추가 |
| 수정 | `src/layouts/PublicLayout.jsx` — 라우트 9개 추가 |
| 수정 | `src/components/layout/Navbar.jsx` — 관리자 내부 링크 |
| 수정 | `src/pages/Projects.jsx` — 생성 버튼 추가 |
| 수정 | `src/pages/Community.jsx` — 글쓰기 버튼 추가 |
| 수정 | `src/utils/translations.js` — admin 번역 키 추가 |

### 빌드 결과
- Vite 빌드 성공 (1.94s)
- 총 138개 모듈 변환
- dist/ 출력 완료

---

---

## 2026-03-06 | UI 개선 — 로고 변경 & 메뉴명 수정

### 작업 내용

#### 1. 로고 변경
- **변경 전:** `Papers` (Pa + pers)
- **변경 후:** `DreamIT Biz - Papers` (Dream + IT + Biz + - + Papers)
- `src/config/site.js`의 `brand.parts` 수정
- Navbar와 Footer 모두 동일 설정 참조하므로 자동 반영

#### 2. 메뉴명 수정
- **변경 전:** "분야별 자료"
- **변경 후:** "전공별 자료"
- `src/utils/translations.js` — 네비게이션, 홈 카드, 페이지 타이틀 한국어 키 변경
- `src/pages/FieldDetail.jsx` — "전공별 자료로 돌아가기" 텍스트 변경

### 수정 파일
| 파일 | 변경 내용 |
|------|-----------|
| `src/config/site.js` | brand.parts → DreamIT Biz - Papers |
| `src/utils/translations.js` | 분야별 자료 → 전공별 자료 (3곳) |
| `src/pages/FieldDetail.jsx` | 돌아가기 링크 텍스트 변경 (2곳) |

---

## 2026-03-06 | Supabase CRUD 데이터 정규화

### 이슈
- Supabase 연결 후 CRUD가 작동하지 않음
- 프로젝트/커뮤니티 목록 및 상세 페이지에서 런타임 에러 발생

### 원인 분석
Supabase DB와 React 컴포넌트 간 데이터 형식 불일치 (양방향):

**읽기 방향 (Supabase → 컴포넌트):**
| Supabase 반환 (snake_case flat) | 컴포넌트 기대 (camelCase nested) |
|------|------|
| `leader_name`, `leader_email` | `leader.name`, `leader.email` |
| `max_members` | `maxMembers` |
| `created_at` (ISO timestamp) | `createdAt` (YYYY-MM-DD) |
| `author_name`, `author_email` | `author.name`, `author.email` |

**쓰기 방향 (컴포넌트 → Supabase):**
- `createProject()`가 `leader: { name, email }` (nested object)를 Supabase에 전송 → 존재하지 않는 컬럼으로 INSERT 에러
- `maxMembers`와 `max_members`를 동시에 전송 → 불필요한 컬럼 에러

### 수정 사항

#### `src/utils/projectStorage.js`
- `normalizeProject(row)` 함수 추가: Supabase snake_case → camelCase+nested 변환
  - `leader_name`/`leader_email` → `leader: { name, email }`
  - `max_members` → `maxMembers`
  - `created_at` → `createdAt` (날짜 부분만 추출)
- `toSupabaseRow(data)` 함수 추가: 컴포넌트 데이터 → Supabase 유효 컬럼만 추출
  - nested `leader` 객체, `maxMembers` 등 제거
  - `leader_name`, `leader_email`, `max_members` 등 유효 컬럼으로 매핑
- `getProjects()`, `getProjectById()`: 반환 시 `normalizeProject` 적용
- `createProject()`: `toSupabaseRow`로 변환 후 INSERT
- `updateProject()`: 유효한 컬럼만 명시적으로 매핑 후 UPDATE

#### `src/utils/communityStorage.js`
- `normalizePost(row)` 함수 추가: `author_name`/`author_email` → `author: { name, email }`, `created_at` → `createdAt`
- `toSupabaseRow(data)` 함수 추가: 유효 컬럼만 추출
- `getPosts()`, `getPostById()`: 반환 시 `normalizePost` 적용
- `createPost()`: `toSupabaseRow`로 변환 후 INSERT
- `updatePost()`: 유효한 컬럼만 매핑 후 UPDATE

### 수정 파일
| 파일 | 변경 내용 |
|------|-----------|
| `src/utils/projectStorage.js` | normalizeProject + toSupabaseRow 추가, 모든 CRUD 함수에 적용 |
| `src/utils/communityStorage.js` | normalizePost + toSupabaseRow 추가, 모든 CRUD 함수에 적용 |

### 빌드 결과
- Vite 빌드 성공 (3.09s)
- 총 138개 모듈 변환
- dist/ 출력 완료

---

## 2026-03-06 | 온라인연구실 메뉴 추가

### 작업 내용

상단 네비게이션에 "온라인연구실" 메뉴를 새로 추가. 기존 "논문작성 가이드"(`/guide` + dropdown) 패턴을 그대로 따라 구현.

#### 1. 메뉴 등록
- `src/config/site.js` — `menuItems` 배열에 `/lab` 메뉴 + 4개 하위 드롭다운 추가
- `footerLinks`에도 온라인연구실 바로가기 추가

#### 2. 번역 키 추가
- `src/utils/translations.js` — 한국어/영어 모두 추가
  - `site.nav.researchLab`, `onlineLectures`, `liveLectures`, `lectureMaterials`, `thesisGuidance`
  - `site.lab.*` 페이지별 title, subtitle, desc 및 폼/UI 관련 키 전체

#### 3. 페이지 생성 (5개)
| 페이지 | 경로 | 설명 |
|--------|------|------|
| `ResearchLab.jsx` | `/lab` | 랜딩 — 4개 하위 카드 그리드 (WritingGuide 패턴) |
| `OnlineLectures.jsx` | `/lab/lectures` | 유튜브 영상 카드 목록 (썸네일+제목, iframe embed) |
| `LiveLectures.jsx` | `/lab/live` | 실시간 강의 일정 카드 (날짜, 시간, 주제, 접속링크) |
| `LectureMaterials.jsx` | `/lab/materials` | 논문 강의 자료 목록 (카테고리 필터, 다운로드 링크) |
| `ThesisGuidance.jsx` | `/lab/guidance` | 논문지도 신청 폼 (AuthGuard, 이름/전공/주제/희망일정) |

#### 4. 라우트 등록
- `src/layouts/PublicLayout.jsx` — lazy import 5개 + Route 5개 추가
- `/lab/guidance`는 `AuthGuard`로 보호

#### 5. CSS 추가
- `src/styles/site.css` — 새로운 스타일 클래스 추가:
  - `.video-grid`, `.video-card`, `.video-thumbnail`, `.play-overlay`, `.video-wrapper` — 유튜브 영상 그리드 (3열)
  - `.schedule-list`, `.schedule-card`, `.schedule-date-badge` — 실시간 강의 일정
  - `.material-grid`, `.material-card` — 자료 카드 (2열)
  - `.guidance-form`, `.form-group` — 논문지도 신청 폼
  - 반응형: 768px → 2열/1열, 480px → 1열

### 생성/수정 파일 요약
| 구분 | 파일 |
|------|------|
| 신규 | `src/pages/ResearchLab.jsx` |
| 신규 | `src/pages/OnlineLectures.jsx` |
| 신규 | `src/pages/LiveLectures.jsx` |
| 신규 | `src/pages/LectureMaterials.jsx` |
| 신규 | `src/pages/ThesisGuidance.jsx` |
| 수정 | `src/config/site.js` — menuItems + footerLinks |
| 수정 | `src/utils/translations.js` — nav + lab 번역 키 |
| 수정 | `src/layouts/PublicLayout.jsx` — 라우트 5개 추가 |
| 수정 | `src/styles/site.css` — 영상/일정/자료/폼 스타일 추가 |

### 빌드 결과
- Vite 빌드 성공 (3.27s)
- 총 143개 모듈 변환
- dist/ 출력 완료

---

## 2026-03-06 | 논문지도 신청 Supabase 저장 & 관리자 페이지 구현

### 작업 내용

기존 `/lab/guidance` 논문지도 신청 폼이 `setTimeout` 시뮬레이션만 수행하던 것을 실제 Supabase에 저장하도록 변경하고, 관리자가 신청 목록을 조회·상태 변경·삭제할 수 있는 어드민 페이지를 추가.

#### 1. Supabase SQL 스키마 (`supabase/schema.sql`)
- **thesis_guidance_applications** 테이블 추가
  - id(uuid), name, major, topic, schedule, message, status(pending/reviewing/accepted/rejected), applicant_id(FK→auth.users), applicant_email, created_at
- **RLS 정책 4개**: SELECT 누구나, INSERT 인증 사용자, UPDATE/DELETE 신청자 또는 관리자
- **인덱스**: `idx_thesis_guidance_applications_status`

#### 2. Storage 유틸 생성 (`src/utils/thesisGuidanceStorage.js`)
- `communityStorage.js` 패턴 복제
- `normalizeApplication(row)` — snake_case → camelCase
- `toSupabaseRow(data)` — 유효 컬럼만 추출
- `sampleApplications[]` — Supabase 미연결 시 폴백 데이터 3건
- CRUD 함수: `getApplications(filter)`, `getApplicationById(id)`, `createApplication(data)`, `updateApplication(id, updates)`, `deleteApplication(id)`, `getApplicationsCount()`

#### 3. ThesisGuidance.jsx 수정
- `setTimeout` 시뮬레이션 제거
- `createApplication()` 호출로 실제 Supabase 저장
- `useAuth` 연동으로 `applicant_id`, `applicant_email` 자동 첨부

#### 4. 관리자 페이지 생성 (2개)
| 페이지 | 경로 | 기능 |
|--------|------|------|
| `AdminThesisGuidance.jsx` | `/admin/guidance` | 신청 목록 + 상태 필터(전체/대기중/검토중/승인/반려) + 삭제 |
| `AdminThesisGuidanceForm.jsx` | `/admin/guidance/edit/:id` | 신청 상세 보기(읽기 전용) + 상태 변경(드롭다운) |

#### 5. 기존 파일 수정
- **`AdminSidebar.jsx`** — 논문지도 관리 메뉴 + pen/edit SVG 아이콘 추가
- **`AdminDashboard.jsx`** — 4번째 stat 카드(논문지도 신청 수) 추가, `getApplicationsCount()` import
- **`PublicLayout.jsx`** — lazy import 2개 + AdminGuard 라우트 2개 추가
- **`translations.js`** — `site.admin.guidance`, `totalGuidance`, `guidanceStatus`(pending/reviewing/accepted/rejected) 키 추가 (ko/en)

### 생성/수정 파일 요약
| 구분 | 파일 |
|------|------|
| 신규 | `src/utils/thesisGuidanceStorage.js` |
| 신규 | `src/pages/admin/AdminThesisGuidance.jsx` |
| 신규 | `src/pages/admin/AdminThesisGuidanceForm.jsx` |
| 수정 | `supabase/schema.sql` — thesis_guidance_applications 테이블 + RLS + 인덱스 |
| 수정 | `src/pages/ThesisGuidance.jsx` — setTimeout → createApplication() |
| 수정 | `src/components/AdminSidebar.jsx` — 논문지도 관리 메뉴 추가 |
| 수정 | `src/pages/admin/AdminDashboard.jsx` — 4번째 stat 카드 |
| 수정 | `src/layouts/PublicLayout.jsx` — 라우트 2개 추가 |
| 수정 | `src/utils/translations.js` — guidance admin 번역 키 |

### 빌드 결과
- Vite 빌드 성공 (3.36s)
- 총 146개 모듈 변환

---

## 2026-03-06 | 로고 2줄 리디자인 (Papers + DreamIT Biz)

### 작업 내용

상단 로고를 기존 1줄(`DreamIT Biz - Papers`)에서 2줄 구조로 변경.
- 1줄: **Papers** (26px, bold, primary-blue)
- 2줄: **DreamIT Biz** (11px, 일반, secondary color)
- nav-height(80px) 내에서 수직 정렬

#### 변경 사항
- **`src/config/site.js`** — `brand.parts[]` 배열 → `brand.main: 'Papers'` + `brand.sub: 'DreamIT Biz'` 구조로 변경
- **`src/components/layout/Navbar.jsx`** — `<h1>` + `<span>` 2줄 렌더링
- **`src/components/layout/Footer.jsx`** — 동일하게 2줄 구조 적용
- **`src/styles/navbar.css`** — `.brand-main` (26px, font-weight 800) + `.brand-sub` (11px, font-weight 500) 스타일, flex-direction column
- **`src/styles/responsive.css`** — 모바일 대응 (22px / 10px)

### 수정 파일
| 파일 | 변경 내용 |
|------|-----------|
| `src/config/site.js` | brand 구조 변경 (parts → main/sub) |
| `src/components/layout/Navbar.jsx` | 2줄 로고 렌더링 |
| `src/components/layout/Footer.jsx` | 2줄 로고 렌더링 |
| `src/styles/navbar.css` | brand-main / brand-sub 스타일 |
| `src/styles/responsive.css` | 모바일 로고 사이즈 |

### 빌드 결과
- Vite 빌드 성공 (4.57s)
- 총 146개 모듈 변환

---

## 2026-03-06 | 커뮤니티 게시판 2종 추가 (논문게재 자랑 + 게재일정안내)

### 작업 내용

기존 커뮤니티 3개 카테고리(Q&A, 논문 리뷰, 스터디 모집)에 **논문게재 자랑하기**(showcase)와 **논문게재일정안내**(schedule) 2개 카테고리를 추가하여 총 5개 카테고리로 확장.

별도 테이블이나 페이지 없이 기존 `community_posts` 테이블의 category CHECK 제약을 확장하는 방식으로 구현.

#### 1. DB 스키마 변경
- `supabase/schema.sql` — category CHECK 제약에 `'showcase'`, `'schedule'` 추가
- Supabase 실행용 SQL: `ALTER TABLE` → DROP/ADD CONSTRAINT

#### 2. 번역 키 추가
- `translations.js` — `site.community.showcase` / `site.community.schedule` (ko/en)

#### 3. 프론트엔드 수정
- **Community.jsx** — `categoryIcons`에 🎉/📅, `categoryColors`에 #FFB800/#00A0B0, 필터 버튼 2개 추가, catKey 매핑 간소화
- **CommunityDetail.jsx** — `categoryColors` 2색 추가, catKey 매핑 간소화(`post.category` 직접 사용)
- **CommunityWrite.jsx** — 카테고리 드롭다운에 2개 옵션 추가
- **AdminCommunity.jsx** — 필터 배열에 2개 추가, `categoryLabel()` 함수에 2개 분기 추가
- **AdminCommunityForm.jsx** — 카테고리 드롭다운에 2개 옵션 추가

#### 4. 샘플 데이터
- `communityStorage.js` — showcase(KCI 등재지 게재 자랑), schedule(상반기 학술지 투고 마감일) 샘플 각 1건 추가

### 수정 파일 요약
| 파일 | 변경 내용 |
|------|-----------|
| `supabase/schema.sql` | category CHECK 제약에 showcase, schedule 추가 |
| `src/utils/translations.js` | showcase, schedule 번역 키 (ko/en) |
| `src/pages/Community.jsx` | 아이콘, 색상, 필터 버튼 추가, catKey 간소화 |
| `src/pages/CommunityDetail.jsx` | 색상 추가, catKey 간소화 |
| `src/pages/CommunityWrite.jsx` | 카테고리 드롭다운 2개 추가 |
| `src/pages/admin/AdminCommunity.jsx` | 필터 + categoryLabel 추가 |
| `src/pages/admin/AdminCommunityForm.jsx` | 카테고리 드롭다운 2개 추가 |
| `src/utils/communityStorage.js` | 샘플 데이터 2건 추가 |

### 빌드 결과
- Vite 빌드 성공 (2.55s)
- 총 146개 모듈 변환

---

## 2026-03-06 | 학습자료 관리 CRUD + 커뮤니티 사용자 수정/삭제 + UI 수정

### 개요
1. **학습자료 관리 기능** — Admin CRUD + 공개 페이지 동적화
2. **커뮤니티 사용자 CRUD** — 로그인 사용자 본인 글 수정/삭제, 관리자 전체 관리
3. **UI 수정** — 주문 이력 타이틀 흰색 적용, "논문게재 자랑" → "논문게재 알림" 명칭 변경

### 1. 학습자료 관리 (Admin CRUD + 동적 페이지)

#### DB 스키마
- `lecture_materials` 테이블 추가 (category, type, file_url 등)
- RLS: 전체 SELECT, 관리자만 INSERT/UPDATE/DELETE
- 인덱스: `idx_lecture_materials_category`

#### 신규 파일 (4개)
| 파일 | 설명 |
|------|------|
| `src/components/FileUpload.jsx` | 범용 파일 업로드 컴포넌트 (드래그앤드롭, 20MB 제한) |
| `src/utils/materialStorage.js` | CRUD 함수 + 6개 샘플 데이터 |
| `src/pages/admin/AdminMaterials.jsx` | 관리자 자료 목록 (카테고리 필터 + 테이블) |
| `src/pages/admin/AdminMaterialForm.jsx` | 자료 생성/수정 폼 (파일 업로드 / YouTube URL) |

#### 수정 파일 (7개)
| 파일 | 변경 |
|------|------|
| `supabase/schema.sql` | lecture_materials 테이블 + RLS + 인덱스 |
| `src/utils/storage.js` | `uploadFile()` 범용 업로드 함수 추가 |
| `src/components/AdminSidebar.jsx` | 학습자료 관리 메뉴 + 문서 아이콘 |
| `src/layouts/PublicLayout.jsx` | AdminMaterials/AdminMaterialForm lazy import + 라우트 3개 |
| `src/pages/admin/AdminDashboard.jsx` | 학습자료 stat 카드 추가 |
| `src/pages/LectureMaterials.jsx` | 하드코딩 → getMaterials() 동적 로드 + video 아이콘 분기 |
| `src/utils/translations.js` | materials, totalMaterials 번역 키 추가 |

### 2. 커뮤니티 사용자 CRUD

- `CommunityDetail.jsx` — 본인 글 또는 관리자일 때 수정/삭제 버튼 표시
- `CommunityWrite.jsx` — 글쓰기 + 수정 모드 통합 (`/community/edit/:postId`)
- `PublicLayout.jsx` — `/community/edit/:postId` 라우트 추가 (AuthGuard)

### 3. UI 수정
- `OrderHistory.jsx` — page-header 내 `h1` → `h2` 변경 (흰색 텍스트 적용)
- "논문게재 자랑" → "논문게재 알림" 명칭 변경 (translations, AdminCommunity, AdminCommunityForm, CommunityWrite)

### 빌드 결과
- Vite 빌드 성공 (3.36s)
- 총 151개 모듈 변환

---

## 2026-03-06 | 가이드 레이아웃 UX 개선 — 양쪽 패널 고정 독립 스크롤

### 개요
인터랙티브 2컬럼 레이아웃에서 좌측 항목을 클릭하면 좌측 네비가 스크롤되어 사라지는 문제 수정. 양쪽 패널 모두 뷰포트 내에 고정되어 독립적으로 스크롤되도록 변경.

### 변경 내용 (`src/styles/site.css`)
- `.structure-layout`: `height: calc(100vh - 160px)` 고정 높이 설정
- `.structure-nav`: `overflow-y: auto` 독립 스크롤, 좌측 너비 380px 고정
- `.structure-detail`: `position: sticky` 제거 → `overflow-y: auto` 독립 스크롤
- 양쪽 패널에 4px 슬림 스크롤바 스타일 추가 (`::-webkit-scrollbar`)
- 반응형(768px 이하): 고정 높이 해제, 1컬럼 스택 유지

### 빌드 결과
- Vite 빌드 성공 (3.71s)

---

## 2026-03-06 | 논문작성 가이드 전체 페이지 인터랙티브 고도화

### 개요
논문작성 가이드 하위 5개 페이지를 인터랙티브 2컬럼 레이아웃(좌측 네비 + 우측 상세 패널)으로 고도화. 이전에 완료한 PaperStructure와 동일한 UX 패턴 적용.

### 고도화된 페이지 (5개)

| 페이지 | 파일 | 항목 수 | 상세 내용 |
|--------|------|---------|-----------|
| 연구방법론 | `ResearchMethodology.jsx` | 3개 | 양적·질적·혼합 연구 — 각 연구 설계, 엄밀성 확보, 수행 고려사항 |
| 학술적 글쓰기 | `AcademicWriting.jsx` | 6개 | 객관적 어조, 단락 구성, 논리적 전개, 인용, 학술 용어, 퇴고 |
| 참고문헌 관리 | `ReferenceManagement.jsx` | 6개 | APA/MLA/Chicago/Vancouver 인용 형식 + Zotero/Mendeley·EndNote 도구 |
| 통계분석 | `StatisticalAnalysis.jsx` | 6개 | 기술통계, t-검정, ANOVA, 상관분석, 회귀분석, 카이제곱 검정 |
| 연구윤리 | `ResearchEthics.jsx` | 6개 | 표절, 데이터 조작, 중복 게재, 저자 자격, IRB 승인, 이해충돌 |

### 공통 변경 사항
- `useState`로 선택된 섹션 인덱스 관리
- 좌측: `.structure-nav-card` 클릭 시 `.active` 상태 전환
- 우측: `.structure-detail` sticky 패널에 목적·구성요소·작성팁 3섹션 표시
- 한국어/영어 전체 상세 데이터 내장
- PaperStructure에서 추가한 CSS 클래스 재사용 (추가 CSS 불필요)

### 수정 파일 (5개)
| 파일 | 변경 |
|------|------|
| `src/pages/ResearchMethodology.jsx` | 3개 연구방법 인터랙티브 상세 패널 |
| `src/pages/AcademicWriting.jsx` | 6개 글쓰기 팁 인터랙티브 상세 패널 |
| `src/pages/ReferenceManagement.jsx` | 4개 인용형식 + 2개 도구 인터랙티브 상세 패널 |
| `src/pages/StatisticalAnalysis.jsx` | 6개 통계 기법 인터랙티브 상세 패널 |
| `src/pages/ResearchEthics.jsx` | 6개 연구윤리 원칙 인터랙티브 상세 패널 |

### 빌드 결과
- Vite 빌드 성공 (3.11s)
- 각 페이지 번들 크기: 10~17 kB (gzip: 4~7 kB)

---

## 2026-03-06 | 논문 구조 페이지 인터랙티브 상세 패널

### 개요
`/guide/structure` (논문 구조) 페이지를 2컬럼 인터랙티브 레이아웃으로 리디자인

### 변경 내용

#### PaperStructure.jsx — 전면 리디자인
- **좌측 패널**: 6개 섹션 카드 (서론, 이론적 배경, 연구방법, 연구결과, 논의 및 결론, 참고문헌)
  - 클릭 시 활성 상태(`active`) 전환, 우측 상세 패널 업데이트
- **우측 패널** (`sticky`): 선택된 섹션의 상세 정보 표시
  - 섹션 목적 설명
  - 핵심 구성 요소 목록
  - 작성 팁 목록
- 한국어/영어 전체 상세 데이터 내장 (각 6개 섹션 × 3개 하위 항목)

#### site.css — 구조 스타일 전면 교체
- `.structure-layout`: CSS Grid 2컬럼 (1fr 1fr)
- `.structure-nav-card`: 클릭 가능한 카드 + `.active` 스타일
- `.structure-detail`: sticky 포지셔닝 우측 패널
- `.structure-detail-section`: h4 제목 + ul 리스트 (파란점/녹색 팁 마커)
- 반응형: 768px 이하에서 1컬럼 스택

### 수정 파일
| 파일 | 변경 |
|------|------|
| `src/pages/PaperStructure.jsx` | 전면 리디자인 — 2컬럼 + 클릭 상세 패널 |
| `src/styles/site.css` | structure 관련 CSS 전면 교체 + 반응형 |

### 빌드 결과
- Vite 빌드 성공 (3.13s)
- PaperStructure 번들: 14.77 kB (gzip: 5.85 kB)

---

## 2026-03-06 | About Papers 메뉴 + 메뉴 명칭 변경

### 개요
1. **About Papers 메뉴 신규 추가** — 홈과 논문작성 가이드 사이에 드롭다운 메뉴 배치
2. **메뉴 명칭 변경** — "논문지도 신청" → "논문 멘토링 신청", "논문게재 자랑" → "논문게재 알림"

### 1. About Papers (신규)

#### 네비게이션 구조
홈 → **About Papers** → 논문작성 가이드 → 전공별 자료 → ...

#### 신규 페이지 (3개)
| 파일 | 경로 | 설명 |
|------|------|------|
| `AboutPapers.jsx` | `/about` | 랜딩 페이지 (제작의도·활용방법 카드) |
| `AboutIntent.jsx` | `/about/intent` | 제작의도 (4개 섹션: 학습자료 부재, 소통 한계, 전공별 필요, 온라인 학습) |
| `AboutUsage.jsx` | `/about/usage` | 활용방법 (5단계: 기초→심화→연구실→커뮤니티→프로젝트) |

#### 수정 파일
| 파일 | 변경 |
|------|------|
| `src/config/site.js` | menuItems에 About Papers 드롭다운 추가 |
| `src/layouts/PublicLayout.jsx` | lazy import 3개 + 라우트 3개 |
| `src/utils/translations.js` | about 네비 키 3개 + about 섹션 번역 (ko/en) |

### 2. 메뉴 명칭 변경

| 변경 전 | 변경 후 | 영향 파일 |
|---------|---------|-----------|
| 논문지도 신청 | 논문 멘토링 신청 | translations.js, AdminSidebar, AdminDashboard, AdminThesisGuidance, AdminThesisGuidanceForm |
| 논문게재 자랑 | 논문게재 알림 | translations.js, AdminCommunity, AdminCommunityForm, CommunityWrite |

### 빌드 결과
- Vite 빌드 성공 (3.19s)
- 총 154개 모듈 변환

---

### 다음 단계 (TODO)
- [x] Supabase 테이블 스키마 설정 (research_projects, community_posts + 기존 comments 재사용)
- [x] Supabase 연결 설정 (.env + SQL 실행 완료)
- [x] 프로젝트 생성 기능 구현
- [x] 커뮤니티 글쓰기 기능 구현
- [x] 관리자 대시보드 (프로젝트/커뮤니티 관리)
- [x] Supabase CRUD 데이터 정규화 (snake_case ↔ camelCase 변환)
- [x] 논문지도 신청 Supabase 저장 + 관리자 페이지
- [x] 로고 2줄 리디자인
- [x] 커뮤니티 게시판 2종 추가 (논문게재 알림 + 게재일정안내)
- [x] 학습자료 관리 Admin CRUD + 공개 페이지 동적화
- [x] 커뮤니티 사용자 수정/삭제 기능
- [x] About Papers 메뉴 추가 (제작의도 + 활용방법)
- [x] 메뉴 명칭 변경 (논문 멘토링, 논문게재 알림)
- [ ] 검색 기능 연동
- [ ] 논문 진행률 트래커 기능 검토
- [ ] 프로젝트 참여 신청 기능
- [ ] 댓글 수 자동 업데이트 트리거
