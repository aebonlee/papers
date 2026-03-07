import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { categories } from '../data/fieldDetailData';

const FieldResources = () => {
  const { t, lang } = useLanguage();
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

          {categories.map((cat) => (
            <div className="field-category-section" key={cat.key}>
              <div className="field-category-header" style={{ borderLeftColor: cat.color }}>
                <span className="field-category-icon">{cat.icon}</span>
                <h3 style={{ color: cat.color }}>{cat.name[lang] || cat.name.en}</h3>
              </div>
              <div className="fields-grid fields-grid-sub">
                {cat.fields.map((field, i) => (
                  <Link
                    to={`/fields/${field.id}`}
                    className="field-card field-card-sub"
                    key={field.id}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    style={{ '--field-color': cat.color }}
                  >
                    <div className="field-icon-sub">{field.icon}</div>
                    <div className="field-card-body">
                      <h4>{field.name[lang] || field.name.en}</h4>
                      <p>{field.desc[lang] || field.desc.en}</p>
                    </div>
                    <span className="field-link">{lang === 'ko' ? '자세히 →' : 'Details →'}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FieldResources;
