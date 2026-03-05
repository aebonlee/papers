import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const guideSteps = [
  { path: '/guide/structure', icon: '🏗️', stepNum: 1 },
  { path: '/guide/methodology', icon: '🔬', stepNum: 2 },
  { path: '/guide/writing', icon: '✍️', stepNum: 3 },
  { path: '/guide/reference', icon: '📖', stepNum: 4 },
  { path: '/guide/statistics', icon: '📊', stepNum: 5 },
  { path: '/guide/ethics', icon: '⚖️', stepNum: 6 }
];

const navKeys = ['paperStructure', 'methodology', 'academicWriting', 'reference', 'statistics', 'ethics'];

const WritingGuide = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title={t('site.guide.title')} description={t('site.guide.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.guide.title')}</h2>
          <p>{t('site.guide.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.guide.desc')}</p>
          </div>
          <h3 className="section-title" style={{ fontSize: '28px', marginBottom: '48px' }}>
            {t('site.guide.stepByStep')}
          </h3>
          <div className="guide-steps-grid">
            {guideSteps.map((step, i) => (
              <Link to={step.path} className="guide-step-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="guide-step-number">{t('site.guide.step')} {step.stepNum}</div>
                <div className="guide-step-icon">{step.icon}</div>
                <h3>{t(`site.nav.${navKeys[i]}`)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WritingGuide;
