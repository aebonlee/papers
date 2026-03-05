import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const categories = [
  { key: 'all', labelKo: '전체', labelEn: 'All' },
  { key: 'structure', labelKo: '논문 구조', labelEn: 'Paper Structure' },
  { key: 'methodology', labelKo: '연구방법론', labelEn: 'Methodology' },
  { key: 'writing', labelKo: '학술적 글쓰기', labelEn: 'Academic Writing' },
  { key: 'statistics', labelKo: '통계분석', labelEn: 'Statistics' }
];

const materials = [
  {
    id: 1,
    category: 'structure',
    titleKo: '학위논문 구조 가이드 (PDF)',
    titleEn: 'Thesis Structure Guide (PDF)',
    descKo: '학위논문의 기본 구성과 각 장별 작성 요령을 정리한 자료입니다.',
    descEn: 'A guide to the basic structure and writing tips for each chapter of a thesis.',
    type: 'pdf',
    link: '#'
  },
  {
    id: 2,
    category: 'methodology',
    titleKo: '연구방법론 비교 차트',
    titleEn: 'Research Methodology Comparison Chart',
    descKo: '양적·질적·혼합 연구방법의 특징을 한눈에 비교할 수 있는 차트입니다.',
    descEn: 'A chart comparing the characteristics of quantitative, qualitative, and mixed methods.',
    type: 'pdf',
    link: '#'
  },
  {
    id: 3,
    category: 'writing',
    titleKo: '학술 논문 작성 체크리스트',
    titleEn: 'Academic Paper Writing Checklist',
    descKo: '논문 제출 전 점검해야 할 사항들을 정리한 체크리스트입니다.',
    descEn: 'A checklist of items to review before submitting your paper.',
    type: 'pdf',
    link: '#'
  },
  {
    id: 4,
    category: 'statistics',
    titleKo: 'SPSS 기초 실습 자료',
    titleEn: 'SPSS Basic Practice Materials',
    descKo: 'SPSS를 활용한 기초 통계분석 실습 자료입니다.',
    descEn: 'Basic statistical analysis practice materials using SPSS.',
    type: 'pdf',
    link: '#'
  },
  {
    id: 5,
    category: 'structure',
    titleKo: '참고문헌 인용 형식 요약표',
    titleEn: 'Citation Style Summary Table',
    descKo: 'APA, MLA, Chicago, Vancouver 인용 형식을 비교 정리한 요약표입니다.',
    descEn: 'A summary table comparing APA, MLA, Chicago, and Vancouver citation styles.',
    type: 'pdf',
    link: '#'
  },
  {
    id: 6,
    category: 'methodology',
    titleKo: '설문지 설계 템플릿',
    titleEn: 'Survey Design Template',
    descKo: '양적 연구를 위한 설문지 설계 템플릿과 작성 가이드입니다.',
    descEn: 'A survey design template and writing guide for quantitative research.',
    type: 'doc',
    link: '#'
  }
];

const LectureMaterials = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  useAOS();

  const filtered = activeCategory === 'all'
    ? materials
    : materials.filter(m => m.category === activeCategory);

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

          {filtered.length === 0 ? (
            <div className="empty-state">{t('site.lab.materials.noMaterials')}</div>
          ) : (
            <div className="material-grid">
              {filtered.map((mat, i) => (
                <div className="material-card" key={mat.id} data-aos="fade-up" data-aos-delay={i * 60}>
                  <div className="material-icon">
                    {mat.type === 'pdf' ? '📄' : '📝'}
                  </div>
                  <div className="material-body">
                    <h4>{lang === 'ko' ? mat.titleKo : mat.titleEn}</h4>
                    <p>{lang === 'ko' ? mat.descKo : mat.descEn}</p>
                  </div>
                  <a href={mat.link} className="btn btn-secondary material-download-btn" target="_blank" rel="noopener noreferrer">
                    {t('site.lab.materials.download')}
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
