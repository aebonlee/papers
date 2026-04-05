import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const AboutPapers = () => {
  const { t, lang } = useLanguage();
  useAOS();

  const cards = [
    {
      path: '/about/intent',
      icon: '💡',
      titleKo: '제작의도',
      titleEn: 'Our Purpose',
      descKo: 'Papers 플랫폼이 만들어진 배경과 목적을 소개합니다.',
      descEn: 'Learn about the background and purpose behind Papers.',
    },
    {
      path: '/about/usage',
      icon: '📖',
      titleKo: '활용방법',
      titleEn: 'How to Use',
      descKo: 'Papers의 다양한 기능을 효과적으로 활용하는 방법을 안내합니다.',
      descEn: 'A guide to effectively using the various features of Papers.',
    },
  ];

  return (
    <>
      <SEOHead title={t('site.about.title')} description={t('site.about.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.about.title')}</h2>
          <p>{t('site.about.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.about.desc')}</p>
          </div>

          <div className="guide-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {cards.map((card, i) => (
              <Link
                to={card.path}
                key={card.path}
                className="guide-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                style={{ textDecoration: 'none' }}
              >
                <div className="guide-card-icon" style={{ fontSize: '48px', marginBottom: '16px' }}>{card.icon}</div>
                <h3>{lang === 'ko' ? card.titleKo : card.titleEn}</h3>
                <p>{lang === 'ko' ? card.descKo : card.descEn}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPapers;
