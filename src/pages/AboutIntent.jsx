import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const AboutIntent = () => {
  const { t, lang } = useLanguage();
  useAOS();

  const sections = lang === 'ko' ? t('site.about.intentSections') : [
    { title: 'Lack of Systematic Resources', content: 'Knowledge needed for thesis writing is scattered across many sources, making it hard to study systematically. Papers provides a step-by-step learning roadmap from paper structure to research ethics.' },
    { title: 'Limited Communication Among Researchers', content: 'There are few spaces where graduate students with similar concerns can help each other. Through Papers\' community and research project features, collaboration and feedback among researchers is possible.' },
    { title: 'Need for Field-Specific Information', content: 'Thesis writing methods differ across humanities, sciences, engineering, medical, and arts fields. Papers provides specialized guides and references for each discipline.' },
    { title: 'Expanding Online Learning', content: 'To enable learning regardless of time and place, we operate an online research lab with lectures, live seminars, downloadable materials, and thesis mentoring applications.' }
  ];

  return (
    <>
      <SEOHead title={t('site.about.intentTitle')} description={t('site.about.intentSubtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.about.intentTitle')}</h2>
          <p>{t('site.about.intentSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.about.intentDesc')}</p>
          </div>

          <div className="content-sections" style={{ marginTop: '40px' }}>
            {Array.isArray(sections) && sections.map((section, i) => (
              <div
                key={i}
                className="content-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '12px',
                  padding: '32px',
                  marginBottom: '20px',
                  border: '1px solid var(--border-light)',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-blue)' }}>
                  {section.title}
                </h3>
                <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutIntent;
