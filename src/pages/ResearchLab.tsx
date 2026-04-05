import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const labItems = [
  { path: '/lab/lectures', icon: '🎬', labelKey: 'onlineLectures' },
  { path: '/lab/live', icon: '📡', labelKey: 'liveLectures' },
  { path: '/lab/materials', icon: '📚', labelKey: 'lectureMaterials' },
  { path: '/lab/guidance', icon: '🎓', labelKey: 'thesisGuidance' }
];

const ResearchLab = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title={t('site.lab.title')} description={t('site.lab.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.lab.title')}</h2>
          <p>{t('site.lab.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.lab.desc')}</p>
          </div>
          <div className="guide-steps-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {labItems.map((item, i) => (
              <Link to={item.path} className="guide-step-card" key={item.path} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="guide-step-icon">{item.icon}</div>
                <h3>{t(`site.nav.${item.labelKey}`)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchLab;
