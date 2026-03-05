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

### 다음 단계 (TODO)
- [x] Supabase 테이블 스키마 설정 (research_projects, community_posts + 기존 comments 재사용)
- [x] Supabase 연결 설정 (.env + SQL 실행 완료)
- [x] 프로젝트 생성 기능 구현
- [x] 커뮤니티 글쓰기 기능 구현
- [x] 관리자 대시보드 (프로젝트/커뮤니티 관리)
- [ ] 검색 기능 연동
- [ ] 학습 자료 PDF/영상 업로드 기능
- [ ] 논문 진행률 트래커 기능 검토
- [ ] 프로젝트 참여 신청 기능
- [ ] 댓글 수 자동 업데이트 트리거
