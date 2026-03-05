# Papers - 대학원생 논문작성 학습 & 연구 협업 플랫폼

대학원생의 성공적인 논문작성을 위한 체계적인 학습 가이드와 연구자 간 협업 플랫폼입니다.

## 주요 기능

- **논문작성 가이드** - 논문 구조, 연구방법론, 학술적 글쓰기, 참고문헌 관리, 통계분석, 연구윤리
- **분야별 자료** - 인문사회, 자연과학, 공학, 의학/보건, 예술/체육
- **연구 프로젝트** - 연구자 간 협업 프로젝트 생성 및 참여
- **커뮤니티** - Q&A, 논문 리뷰, 스터디 모집

## 기술 스택

| 기술 | 버전 |
|------|------|
| React | 19.2.0 |
| Vite | 7.3.1 |
| react-router-dom | 7.13.0 |
| Supabase | 2.96.0 |

## 시작하기

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env

# 개발 서버 시작
npm run dev
```

## 빌드 & 배포

```bash
npm run build    # 프로덕션 빌드 (dist/)
npm run preview  # 빌드 미리보기
```

GitHub Pages를 통해 자동 배포됩니다. (`.github/workflows/deploy.yml`)

## 기반 템플릿

[DreamIT Biz 하위사이트 템플릿](https://github.com/aebonlee/templete) 기반으로 제작되었습니다.
