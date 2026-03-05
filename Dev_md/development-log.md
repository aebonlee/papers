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

### 다음 단계 (TODO)
- [ ] Supabase 테이블 스키마 설정 (projects, community_posts)
- [ ] 프로젝트 생성/참여 기능 구현
- [ ] 커뮤니티 글쓰기 기능 구현
- [ ] 관리자 대시보드 (학습 자료 관리)
- [ ] 검색 기능 연동
- [ ] 학습 자료 PDF/영상 업로드 기능
- [ ] 논문 진행률 트래커 기능 검토
