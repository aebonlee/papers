import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const lectures = [
  {
    id: 'thesis-structure',
    videoId: 'dQw4w9WgXcQ',
    titleKo: '학위논문 구조 이해하기',
    titleEn: 'Understanding Thesis Structure',
    descKo: '논문의 기본 구조와 각 장의 역할을 체계적으로 알아봅니다.',
    descEn: 'Learn the basic structure of a thesis and the role of each chapter.'
  },
  {
    id: 'research-methods',
    videoId: 'dQw4w9WgXcQ',
    titleKo: '연구방법론 개요',
    titleEn: 'Research Methodology Overview',
    descKo: '양적·질적·혼합 연구방법의 핵심 개념을 설명합니다.',
    descEn: 'Explains the core concepts of quantitative, qualitative, and mixed methods.'
  },
  {
    id: 'academic-writing',
    videoId: 'dQw4w9WgXcQ',
    titleKo: '학술적 글쓰기 기법',
    titleEn: 'Academic Writing Techniques',
    descKo: '명확하고 논리적인 학술 논문 작성법을 배웁니다.',
    descEn: 'Learn how to write clear and logical academic papers.'
  },
  {
    id: 'reference-mgmt',
    videoId: 'dQw4w9WgXcQ',
    titleKo: '참고문헌 관리와 인용',
    titleEn: 'Reference Management & Citation',
    descKo: 'APA, MLA, Chicago 등 주요 인용 형식과 문헌 관리 도구를 소개합니다.',
    descEn: 'Introduction to major citation styles and reference management tools.'
  },
  {
    id: 'statistics-basics',
    videoId: 'dQw4w9WgXcQ',
    titleKo: '논문 통계분석 기초',
    titleEn: 'Statistics Basics for Thesis',
    descKo: '논문에서 자주 사용하는 통계분석 방법을 쉽게 설명합니다.',
    descEn: 'Easy explanations of frequently used statistical methods in theses.'
  },
  {
    id: 'research-ethics',
    videoId: 'dQw4w9WgXcQ',
    titleKo: '연구윤리와 표절 방지',
    titleEn: 'Research Ethics & Plagiarism Prevention',
    descKo: '연구윤리의 핵심 원칙과 표절 방지 방법을 다룹니다.',
    descEn: 'Covers the core principles of research ethics and plagiarism prevention.'
  }
];

const OnlineLectures = () => {
  const { t, lang } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(null);
  useAOS();

  return (
    <>
      <SEOHead title={t('site.lab.lectures.title')} description={t('site.lab.lectures.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.lab.lectures.title')}</h2>
          <p>{t('site.lab.lectures.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.lab.lectures.desc')}</p>
          </div>

          {activeVideo && (
            <div className="video-player-section" data-aos="fade-in">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={() => setActiveVideo(null)}>
                {lang === 'ko' ? '닫기' : 'Close'}
              </button>
            </div>
          )}

          <div className="video-grid">
            {lectures.map((lec, i) => (
              <div
                className="video-card"
                key={lec.id}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                onClick={() => setActiveVideo(lec.videoId)}
                style={{ cursor: 'pointer' }}
              >
                <div className="video-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${lec.videoId}/mqdefault.jpg`}
                    alt={lang === 'ko' ? lec.titleKo : lec.titleEn}
                  />
                  <div className="play-overlay">▶</div>
                </div>
                <div className="video-info">
                  <h4>{lang === 'ko' ? lec.titleKo : lec.titleEn}</h4>
                  <p>{lang === 'ko' ? lec.descKo : lec.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineLectures;
