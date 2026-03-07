# Papers 프로젝트 개발 종합 요약서

> 작성일: 2026-03-07
> 상세 개발일지: [development-log.md](./development-log.md)

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | Papers - 대학원생 논문작성 학습 & 연구 협업 플랫폼 |
| **도메인** | https://papers.dreamitbiz.com |
| **저장소** | https://github.com/aebonlee/papers |
| **기술 스택** | React 19 + Vite 7 + Supabase + react-router-dom 7 |
| **배포** | GitHub Actions → GitHub Pages (자동 배포) |
| **기반 템플릿** | aebonlee/templete (DreamIT Biz 하위사이트 템플릿) |
| **개발 기간** | 2026-03-05 ~ 2026-03-07 (3일) |
| **총 커밋 수** | 33개 |

---

## 2. 사이트 구조

```
Papers (papers.dreamitbiz.com)
├── 홈 (/)
├── About Papers (/about)
│   ├── 제작의도 (/about/intent)
│   └── 활용방법 (/about/usage)
├── 논문작성 가이드 (/guide)
│   ├── 논문 구조 (/guide/structure)
│   ├── 연구방법론 (/guide/methodology)
│   ├── 학술적 글쓰기 (/guide/writing)
│   ├── 참고문헌 관리 (/guide/references)
│   ├── 통계분석 (/guide/statistics)
│   └── 연구윤리 (/guide/ethics)
├── 전공별 자료 (/fields)
│   ├── 인문사회 (7개 세부 전공)
│   ├── 자연과학 (5개 세부 전공)
│   ├── 공학 (5개 세부 전공)
│   ├── 의학/보건 (4개 세부 전공)
│   └── 예술/체육 (3개 세부 전공)
├── 온라인연구실 (/lab)
│   ├── 온라인강의실 (/lab/lectures)
│   ├── 실시간강의 (/lab/live)
│   ├── 논문강의자료 (/lab/materials)
│   └── 논문 멘토링 신청 (/lab/guidance)
├── 연구 프로젝트 (/projects)
│   ├── 프로젝트 목록 + 필터링
│   ├── 프로젝트 상세 (/projects/:id)
│   └── 프로젝트 생성 (/projects/create)
├── 커뮤니티 (/community)
│   ├── 게시글 목록 (5개 카테고리)
│   ├── 게시글 상세 (/community/:id)
│   └── 글쓰기/수정 (/community/write, /community/edit/:id)
└── 관리자 (/admin)
    ├── 대시보드 (/admin)
    ├── 프로젝트 관리 (/admin/projects)
    ├── 커뮤니티 관리 (/admin/community)
    ├── 학습자료 관리 (/admin/materials)
    └── 논문 멘토링 관리 (/admin/guidance)
```

---

## 3. 핵심 기능 현황

### 3.1 논문작성 가이드 (6개 페이지)

| 페이지 | 경로 | 콘텐츠 |
|--------|------|---------|
| 논문 구조 | `/guide/structure` | 서론~참고문헌 6개 섹션, 인터랙티브 2컬럼 |
| 연구방법론 | `/guide/methodology` | 양적·질적·혼합 3개 방법론 상세 |
| 학술적 글쓰기 | `/guide/writing` | 6가지 글쓰기 팁 |
| 참고문헌 관리 | `/guide/references` | APA/MLA/Chicago/Vancouver + Zotero/Mendeley |
| 통계분석 | `/guide/statistics` | 6개 통계 기법 + 소프트웨어 |
| 연구윤리 | `/guide/ethics` | 6대 원칙 |

- **공통 UX**: 인터랙티브 2컬럼 레이아웃 (좌측 네비 카드 클릭 → 우측 상세 패널)
- **이중 언어**: 한국어/영어 전체 지원

### 3.2 전공별 자료 (24개 세부 전공)

| 대분류 | 세부 전공 | 색상 |
|--------|-----------|------|
| 인문사회 (7) | 교육학, 평생교육, 사회복지학, 심리학, 경영학, 행정학, 문학/어문학 | #C8102E |
| 자연과학 (5) | 수학, 물리학, 화학, 생물학, 지구/환경과학 | #0077B6 |
| 공학 (5) | 컴퓨터공학, 전자/전기공학, 기계공학, 건축/토목, 산업공학 | #E87722 |
| 의학/보건 (4) | 의학, 간호학, 약학, 보건학 | #2E7D32 |
| 예술/체육 (3) | 미술/디자인, 음악학, 체육/스포츠과학 | #7B1FA2 |

- **콘텐츠**: 전공당 4개 섹션 × 2개 언어 = **192개 콘텐츠 블록**
- **데이터 아키텍처**: 6개 파일 분할 → `fieldDetailData.js`에서 spread merge
- **하위 호환**: 대분류 URL → 첫 번째 세부전공 자동 리다이렉트

### 3.3 온라인연구실 (4개 페이지)

| 페이지 | 기능 |
|--------|------|
| 온라인강의실 | YouTube 영상 카드 목록, iframe 임베드 재생 |
| 실시간강의 | 실시간 강의 일정 카드 (날짜, 시간, 주제, 접속링크) |
| 논문강의자료 | 카테고리 필터 + 다운로드 링크 (DB 동적 로드) |
| 논문 멘토링 신청 | AuthGuard + Supabase 저장 폼 |

### 3.4 커뮤니티 (5개 카테고리)

| 카테고리 | 아이콘 | 색상 |
|----------|--------|------|
| Q&A | ❓ | #4A90D9 |
| 논문 리뷰 | 📝 | #50C878 |
| 스터디 모집 | 👥 | #FF6B6B |
| 논문게재 알림 | 🎉 | #FFB800 |
| 게재일정안내 | 📅 | #00A0B0 |

- 로그인 사용자: 글쓰기, 본인 글 수정/삭제
- 관리자: 전체 관리 (목록 필터, 수정, 삭제)

### 3.5 관리자 대시보드

| 관리 메뉴 | 기능 |
|-----------|------|
| 대시보드 | 5개 통계 카드 (프로젝트, 모집중, 게시글, 멘토링, 학습자료) |
| 프로젝트 관리 | CRUD + 상태 필터 (모집중/진행중/완료) |
| 커뮤니티 관리 | CRUD + 카테고리 필터 |
| 학습자료 관리 | CRUD + 파일 업로드 (PDF/doc) + YouTube URL |
| 논문 멘토링 관리 | 신청 목록 + 상태 변경 (대기/검토/승인/반려) |

---

## 4. 기술 아키텍처

### 4.1 프론트엔드

| 항목 | 기술/패턴 |
|------|-----------|
| 프레임워크 | React 19 + Vite 7 |
| 라우팅 | react-router-dom 7 (lazy loading + Suspense) |
| 상태관리 | React Context (Auth, Language, Theme, Cart, Toast) |
| i18n | `translations.js` 딕셔너리 기반 (ko/en) |
| 애니메이션 | AOS (Animate On Scroll) + `useAOS` 커스텀 훅 |
| 반응형 | CSS 3단계 (1100px / 768px / 480px) |
| 인증 | Supabase Auth + `AuthGuard` / `AdminGuard` 컴포넌트 |

### 4.2 백엔드 (Supabase)

| 테이블 | 용도 |
|--------|------|
| `research_projects` | 연구 프로젝트 (status: recruiting/in_progress/completed) |
| `community_posts` | 커뮤니티 게시글 (category: qna/review/study/showcase/schedule) |
| `comments` | 댓글 (기존 테이블 재사용) |
| `thesis_guidance_applications` | 논문 멘토링 신청 (status: pending/reviewing/accepted/rejected) |
| `lecture_materials` | 학습자료 (type: pdf/doc/video) |

- **RLS**: SELECT 전체 공개, INSERT 인증 사용자, UPDATE/DELETE 작성자+관리자
- **데이터 정규화**: `normalize()` + `toSupabaseRow()` 패턴 (snake_case ↔ camelCase)

### 4.3 배포

```
코드 Push (main) → GitHub Actions → Vite Build → gh-pages 브랜치 → GitHub Pages
```

- 도메인: `papers.dreamitbiz.com` (CNAME)
- Supabase 환경변수: GitHub Secrets → 빌드 시 주입

---

## 5. 소스 파일 현황

### 5.1 파일 수

| 구분 | 파일 수 |
|------|---------|
| JSX (컴포넌트/페이지) | 61개 |
| JS (유틸/설정/데이터) | 22개 |
| CSS (스타일) | 15개 |
| **합계** | **98개** |

### 5.2 주요 디렉토리

```
src/
├── pages/              # 공개 페이지 (33개)
│   └── admin/          # 관리자 페이지 (8개)
├── components/         # 공통 컴포넌트 (9개)
│   └── layout/         # Navbar, Footer
├── contexts/           # React Context (5개)
├── hooks/              # 커스텀 훅 (2개)
├── data/               # 전공별 데이터 (7개)
├── utils/              # 유틸리티 (10개)
├── config/             # 사이트 설정 (2개)
├── styles/             # CSS (15개)
└── layouts/            # 라우트 레이아웃 (1개)
```

---

## 6. 커밋 이력 (시간순)

### Day 1: 2026-03-05 (기반 구축)

| 커밋 | 내용 |
|------|------|
| `c7a3fd0` | 본사이트 최신 인프라 반영 클린 재구축 |
| `38d9e33` | 로그인 시 last_sign_in_at 갱신 로직 추가 |
| `3574f42` | shop.css 본사이트 동기화 |

### Day 2: 2026-03-06 (핵심 기능 구현)

| 커밋 | 내용 |
|------|------|
| `d9b0235` | Papers 플랫폼 초기 구축 (14개 페이지 + 유틸리티) |
| `0fb5c7a` | 배포 워크플로 + LanguageContext 수정 |
| `8a0aaf9` | Supabase 스키마 + 관리자 페이지 구현 |
| `9cac5f1` | projects → research_projects 테이블명 변경 |
| `194db3d` | 로고를 DreamIT Biz : Papers로 변경 |
| `791b047` | 로고 구분자 변경 |
| `127e0b4` | 분야별 자료 → 전공별 자료 메뉴명 변경 |
| `c1f1d47` | GitHub Actions에 Supabase 환경변수 전달 |
| `b415a21` | Supabase CRUD 데이터 정규화 (snake_case ↔ camelCase) |
| `b2e9317` | 온라인연구실 메뉴 추가 (4개 페이지) |
| `7d2103a` | 논문지도 신청 Supabase 저장 + 관리자 페이지 + 로고 2줄 |
| `2138396` | 커뮤니티 게시판 2종 추가 (논문게재 알림 + 게재일정안내) |
| `d1a8ef8` | 학습자료 관리 CRUD + 커뮤니티 사용자 수정/삭제 + UI 수정 |
| `8282e00` | 메뉴 명칭 변경 (논문지도 → 논문 멘토링) |
| `89d0db0` | About Papers 메뉴 추가 (제작의도 + 활용방법) |
| `3065014` | 상단 네비에서 홈 메뉴 제거 |
| `1940bbe` | 논문 구조 페이지 인터랙티브 상세 패널 |
| `5cb58b6` | 논문작성 가이드 5개 페이지 인터랙티브 고도화 |
| `1e6a745` | 가이드 레이아웃 UX 개선 (좌측 네비 고정) |
| `5b4dd94` | AOS 애니메이션 제거 (클릭 시 사라짐 방지) |

### Day 3: 2026-03-07 (전공별 확장)

| 커밋 | 내용 |
|------|------|
| `28df9df` | 전공별 자료 상세 페이지 인터랙티브 2컬럼 고도화 |
| `22da1f1` | 전공별 자료 24개 세부 전공 확장 (5대분류 → 24세부전공) |

---

## 7. 빌드 정보

| 항목 | 값 |
|------|-----|
| 최종 빌드 | 2026-03-07 |
| 빌드 시간 | 3.21s |
| 총 모듈 수 | 160개 |
| 주요 번들 | fieldDetailData: 370.59 kB (gzip: 116.38 kB) |

---

## 8. 남은 작업 (TODO)

- [ ] 검색 기능 연동
- [ ] 논문 진행률 트래커 기능 검토
- [ ] 프로젝트 참여 신청 기능
- [ ] 댓글 수 자동 업데이트 트리거

---

## 9. 주요 기술 결정 기록

| 항목 | 결정 | 사유 |
|------|------|------|
| 데이터 레이어 | Supabase + 로컬 폴백 | 템플릿 패턴 준수, 데모 모드 지원 |
| 전공 데이터 분할 | 6개 파일 분리 | 파일 관리 편의성, 빌드 성능 |
| 대분류 URL 호환 | broadCategoryMap 리다이렉트 | 기존 Nav 링크 하위 호환 |
| 데이터 정규화 | normalize/toSupabaseRow | Supabase snake_case ↔ React camelCase |
| 가이드 UX | 인터랙티브 2컬럼 | 좌측 네비 + 우측 상세 패널 (일관된 UX) |
| 배포 | GitHub Actions → gh-pages | "Deploy from a branch" 설정 호환 |
| i18n | translations.js 딕셔너리 | 템플릿 기존 패턴 유지 |
| 반응형 | 3단계 (1100/768/480px) | 템플릿 기준 유지 |
