import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useCountUp from '../hooks/useCountUp';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import site from '../config/site';

const FeatureCard = ({ icon, title, desc, link, delay }) => (
  <Link to={link} className="feature-card" data-aos="fade-up" data-aos-delay={delay}>
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <span className="feature-link">→</span>
  </Link>
);

const StatItem = ({ number, label, suffix = '+' }) => {
  const { count, ref } = useCountUp(number, 2000);
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();
  useAOS();

  const features = [
    { icon: '📝', title: t('site.home.featureGuide'), desc: t('site.home.featureGuideDesc'), link: '/guide', delay: 0 },
    { icon: '📚', title: t('site.home.featureFields'), desc: t('site.home.featureFieldsDesc'), link: '/fields', delay: 100 },
    { icon: '🤝', title: t('site.home.featureProjects'), desc: t('site.home.featureProjectsDesc'), link: '/projects', delay: 200 },
    { icon: '💬', title: t('site.home.featureCommunity'), desc: t('site.home.featureCommunityDesc'), link: '/community', delay: 300 }
  ];

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero */}
      <section className="papers-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t('site.home.title')}</h1>
            <p className="hero-subtitle">{t('site.home.subtitle')}</p>
            <p className="hero-desc">{t('site.home.heroDesc')}</p>
            <div className="hero-actions">
              <Link to="/guide" className="btn btn-primary-large">{t('site.home.startLearning')}</Link>
              <Link to="/projects" className="btn btn-secondary">{t('site.home.exploreProjects')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatItem number={120} label={t('site.home.statResources')} />
            <StatItem number={5} label={t('site.home.statFields')} suffix="" />
            <StatItem number={24} label={t('site.home.statProjects')} />
            <StatItem number={350} label={t('site.home.statResearchers')} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>{t('site.home.ctaTitle')}</h2>
            <p>{t('site.home.ctaDesc')}</p>
            <Link to="/register" className="btn btn-primary-large">{t('site.home.ctaButton')}</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
