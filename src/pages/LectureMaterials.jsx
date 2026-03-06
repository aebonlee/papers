import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { getMaterials } from '../utils/materialStorage';

const categories = [
  { key: 'all', labelKo: '전체', labelEn: 'All' },
  { key: 'structure', labelKo: '논문 구조', labelEn: 'Paper Structure' },
  { key: 'methodology', labelKo: '연구방법론', labelEn: 'Methodology' },
  { key: 'writing', labelKo: '학술적 글쓰기', labelEn: 'Academic Writing' },
  { key: 'statistics', labelKo: '통계분석', labelEn: 'Statistics' }
];

const LectureMaterials = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  useAOS();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const filter = activeCategory === 'all' ? {} : { category: activeCategory };
      const data = await getMaterials(filter);
      setMaterials(data);
      setLoading(false);
    };
    load();
  }, [activeCategory]);

  const getIcon = (type) => {
    if (type === 'video') return '🎬';
    if (type === 'doc') return '📝';
    return '📄';
  };

  const getActionLabel = (type) => {
    if (type === 'video') return t('site.lab.materials.view');
    return t('site.lab.materials.download');
  };

  return (
    <>
      <SEOHead title={t('site.lab.materials.title')} description={t('site.lab.materials.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.lab.materials.title')}</h2>
          <p>{t('site.lab.materials.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.lab.materials.desc')}</p>
          </div>

          <div className="project-filters">
            <div className="filter-group">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-btn${activeCategory === cat.key ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {lang === 'ko' ? cat.labelKo : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
              <div className="loading-spinner"></div>
            </div>
          ) : materials.length === 0 ? (
            <div className="empty-state">{t('site.lab.materials.noMaterials')}</div>
          ) : (
            <div className="material-grid">
              {materials.map((mat, i) => (
                <div className="material-card" key={mat.id} data-aos="fade-up" data-aos-delay={i * 60}>
                  <div className="material-icon">
                    {getIcon(mat.type)}
                  </div>
                  <div className="material-body">
                    <h4>{lang === 'ko' ? (mat.titleKo || mat.title) : (mat.titleEn || mat.title_en || mat.title)}</h4>
                    <p>{lang === 'ko' ? (mat.descKo || mat.description) : (mat.descEn || mat.description_en || mat.description)}</p>
                  </div>
                  <a
                    href={mat.fileUrl || mat.file_url || '#'}
                    className="btn btn-secondary material-download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getActionLabel(mat.type)}
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

export default LectureMaterials;
