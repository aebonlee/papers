import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const AboutUsage = () => {
  const { t, lang } = useLanguage();
  useAOS();

  const sections = lang === 'ko' ? t('site.about.usageSections') : [
    { title: 'Step 1: Build Foundations with Writing Guides', content: 'Study six areas step by step: paper structure, methodology, academic writing, reference management, statistics, and research ethics. Even first-time thesis writers can easily follow along.' },
    { title: 'Step 2: Deep Dive with Field Resources', content: 'Check thesis writing tips, major journals, and citation formats specific to your field — humanities, sciences, engineering, medical/health, or arts/sports.' },
    { title: 'Step 3: Use the Online Research Lab', content: 'Review key concepts with YouTube lectures, join live seminars, and download lecture materials. You can also apply for 1:1 thesis mentoring from experts.' },
    { title: 'Step 4: Connect in the Community', content: 'Ask questions in the Q&A board, request paper reviews, recruit study groups, and share publication news with fellow researchers.' },
    { title: 'Step 5: Join Research Projects', content: 'Participate in research projects of interest to collaborate with fellow researchers, co-write papers, and exchange feedback.' }
  ];

  return (
    <>
      <SEOHead title={t('site.about.usageTitle')} description={t('site.about.usageSubtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.about.usageTitle')}</h2>
          <p>{t('site.about.usageSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.about.usageDesc')}</p>
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
                  position: 'relative',
                  paddingLeft: '40px',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '32px',
                  top: '32px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--primary-blue)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                  flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <div style={{ marginLeft: '36px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                    {section.title}
                  </h3>
                  <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsage;
