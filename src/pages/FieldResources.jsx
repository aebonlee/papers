import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const fields = [
  { key: 'humanities', icon: '📖', path: '/fields/humanities', color: '#C8102E' },
  { key: 'naturalScience', icon: '🔬', path: '/fields/natural-science', color: '#0046C8' },
  { key: 'engineering', icon: '⚙️', path: '/fields/engineering', color: '#C87200' },
  { key: 'medical', icon: '🏥', path: '/fields/medical', color: '#00855A' },
  { key: 'arts', icon: '🎨', path: '/fields/arts', color: '#8B1AC8' }
];

const FieldResources = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title={t('site.fields.title')} description={t('site.fields.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.fields.title')}</h2>
          <p>{t('site.fields.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="field-intro">{t('site.fields.desc')}</p>
          <div className="fields-grid">
            {fields.map((field, i) => (
              <Link to={field.path} className="field-card" key={field.key} data-aos="fade-up" data-aos-delay={i * 100} style={{ '--field-color': field.color }}>
                <div className="field-icon">{field.icon}</div>
                <h3>{t(`site.fields.${field.key}.name`)}</h3>
                <p>{t(`site.fields.${field.key}.desc`)}</p>
                <span className="field-link">{t('common.learnMore')} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FieldResources;
