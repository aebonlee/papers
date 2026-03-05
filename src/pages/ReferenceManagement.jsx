import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const stylesData = {
  ko: [
    { name: 'APA 7th Edition', desc: '사회과학 분야에서 가장 널리 사용되는 인용 형식입니다.', example: 'Kim, S. H. (2023). Research methodology. Seoul: Academic Press.' },
    { name: 'MLA 9th Edition', desc: '인문학 분야에서 주로 사용되는 인용 형식입니다.', example: 'Kim, Soo Hyun. Research Methodology. Academic Press, 2023.' },
    { name: 'Chicago/Turabian', desc: '역사학, 경영학 등에서 사용되며 각주/미주 방식과 저자-날짜 방식이 있습니다.', example: 'Kim, Soo Hyun. Research Methodology. Seoul: Academic Press, 2023.' },
    { name: 'Vancouver', desc: '의학, 자연과학 분야에서 번호 순서 방식으로 사용됩니다.', example: '1. Kim SH. Research methodology. Seoul: Academic Press; 2023.' }
  ],
  en: [
    { name: 'APA 7th Edition', desc: 'The most widely used citation style in social sciences.', example: 'Kim, S. H. (2023). Research methodology. Seoul: Academic Press.' },
    { name: 'MLA 9th Edition', desc: 'Primarily used in humanities fields.', example: 'Kim, Soo Hyun. Research Methodology. Academic Press, 2023.' },
    { name: 'Chicago/Turabian', desc: 'Used in history, business, etc. Has notes-bibliography and author-date systems.', example: 'Kim, Soo Hyun. Research Methodology. Seoul: Academic Press, 2023.' },
    { name: 'Vancouver', desc: 'Used in medical and natural sciences with numbered citation order.', example: '1. Kim SH. Research methodology. Seoul: Academic Press; 2023.' }
  ]
};

const toolsData = {
  ko: [
    { name: 'Zotero', desc: '무료 오픈소스 문헌 관리 도구. 브라우저 확장으로 논문 저장이 편리합니다.', badge: '무료' },
    { name: 'Mendeley', desc: 'Elsevier에서 제공하는 무료 문헌 관리 도구. PDF 관리와 소셜 네트워킹 기능을 제공합니다.', badge: '무료' },
    { name: 'EndNote', desc: '가장 오래되고 강력한 유료 문헌 관리 도구. 대학 기관에서 라이선스를 제공하는 경우가 많습니다.', badge: '유료' }
  ],
  en: [
    { name: 'Zotero', desc: 'Free open-source reference manager. Browser extension makes saving papers easy.', badge: 'Free' },
    { name: 'Mendeley', desc: 'Free reference manager by Elsevier. Offers PDF management and social networking.', badge: 'Free' },
    { name: 'EndNote', desc: 'The oldest and most powerful paid reference manager. Many universities provide licenses.', badge: 'Paid' }
  ]
};

const ReferenceManagement = () => {
  const { t, lang } = useLanguage();
  useAOS();
  const styles = stylesData[lang] || stylesData.ko;
  const tools = toolsData[lang] || toolsData.ko;

  return (
    <>
      <SEOHead title={t('site.reference.title')} description={t('site.reference.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.reference.title')}</h2>
          <p>{t('site.reference.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="subsection-title">{lang === 'ko' ? '주요 인용 형식' : 'Major Citation Styles'}</h3>
          <div className="citation-grid">
            {styles.map((style, i) => (
              <div className="citation-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <h4>{style.name}</h4>
                <p>{style.desc}</p>
                <div className="citation-example">
                  <code>{style.example}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <h3 className="subsection-title">{lang === 'ko' ? '문헌 관리 도구' : 'Reference Management Tools'}</h3>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <div className="tool-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="tool-header">
                  <h4>{tool.name}</h4>
                  <span className={`tool-badge ${tool.badge === '무료' || tool.badge === 'Free' ? 'free' : 'paid'}`}>
                    {tool.badge}
                  </span>
                </div>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferenceManagement;
