import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const schedules = [
  {
    id: 1,
    dateKo: '2026년 3월 15일 (토)',
    dateEn: 'Sat, Mar 15, 2026',
    time: '14:00 - 16:00',
    topicKo: '학위논문 주제 선정과 연구계획서 작성',
    topicEn: 'Thesis Topic Selection & Research Proposal Writing',
    instructorKo: '김연구 교수',
    instructorEn: 'Prof. Kim',
    link: '#'
  },
  {
    id: 2,
    dateKo: '2026년 3월 22일 (토)',
    dateEn: 'Sat, Mar 22, 2026',
    time: '10:00 - 12:00',
    topicKo: '질적 연구방법론 심화 세미나',
    topicEn: 'Advanced Qualitative Research Methods Seminar',
    instructorKo: '이학문 박사',
    instructorEn: 'Dr. Lee',
    link: '#'
  },
  {
    id: 3,
    dateKo: '2026년 4월 5일 (토)',
    dateEn: 'Sat, Apr 5, 2026',
    time: '14:00 - 16:00',
    topicKo: 'SPSS를 활용한 논문 통계분석 실습',
    topicEn: 'Thesis Statistical Analysis with SPSS (Hands-on)',
    instructorKo: '박통계 교수',
    instructorEn: 'Prof. Park',
    link: '#'
  },
  {
    id: 4,
    dateKo: '2026년 4월 19일 (토)',
    dateEn: 'Sat, Apr 19, 2026',
    time: '10:00 - 12:00',
    topicKo: '논문 심사 준비와 발표 기법',
    topicEn: 'Thesis Defense Preparation & Presentation Skills',
    instructorKo: '최발표 교수',
    instructorEn: 'Prof. Choi',
    link: '#'
  }
];

const LiveLectures = () => {
  const { t, lang } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title={t('site.lab.live.title')} description={t('site.lab.live.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.lab.live.title')}</h2>
          <p>{t('site.lab.live.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.lab.live.desc')}</p>
          </div>

          <h3 className="subsection-title">{t('site.lab.live.upcoming')}</h3>

          {schedules.length === 0 ? (
            <div className="empty-state">{t('site.lab.live.noSchedule')}</div>
          ) : (
            <div className="schedule-list">
              {schedules.map((s, i) => (
                <div className="schedule-card" key={s.id} data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="schedule-date-badge">
                    {lang === 'ko' ? s.dateKo : s.dateEn}
                  </div>
                  <div className="schedule-body">
                    <h4>{lang === 'ko' ? s.topicKo : s.topicEn}</h4>
                    <div className="schedule-meta">
                      <span>🕐 {s.time}</span>
                      <span>👤 {lang === 'ko' ? s.instructorKo : s.instructorEn}</span>
                    </div>
                  </div>
                  <a href={s.link} className="btn btn-primary schedule-join-btn" target="_blank" rel="noopener noreferrer">
                    {t('site.lab.live.joinLive')}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LiveLectures;
