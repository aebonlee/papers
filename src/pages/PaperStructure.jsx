import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const PaperStructure = () => {
  const { t, lang } = useLanguage();
  useAOS();

  const sections = lang === 'ko'
    ? [
        { title: '서론 (Introduction)', content: '연구의 배경, 목적, 필요성을 기술합니다. 연구 문제를 명확히 제시하고, 연구의 범위와 한계를 설정합니다. 독자가 왜 이 연구가 중요한지 이해할 수 있도록 논리적으로 전개해야 합니다.' },
        { title: '이론적 배경 (Literature Review)', content: '선행연구를 체계적으로 검토하고 분석합니다. 기존 연구의 흐름, 주요 이론, 연구 간극(gap)을 파악하여 본 연구의 학술적 기여를 정당화합니다.' },
        { title: '연구방법 (Methodology)', content: '연구 설계, 대상, 도구, 절차, 분석 방법을 상세히 기술합니다. 다른 연구자가 동일한 방법으로 연구를 재현할 수 있을 정도로 구체적이어야 합니다.' },
        { title: '연구결과 (Results)', content: '수집된 데이터를 분석한 결과를 객관적으로 제시합니다. 표, 그래프, 통계치를 활용하여 결과를 명확하게 보여줍니다.' },
        { title: '논의 및 결론 (Discussion & Conclusion)', content: '연구결과의 의미를 해석하고, 선행연구와 비교 분석합니다. 연구의 시사점, 한계, 후속 연구 제언을 포함합니다.' },
        { title: '참고문헌 (References)', content: '논문에서 인용한 모든 출처를 학술 형식(APA, MLA, Chicago 등)에 맞춰 정리합니다.' }
      ]
    : [
        { title: 'Introduction', content: 'Describes the background, purpose, and significance of the research. Clearly presents the research problem and sets the scope and limitations.' },
        { title: 'Literature Review', content: 'Systematically reviews and analyzes prior research. Identifies research trends, key theories, and gaps to justify the contribution of this study.' },
        { title: 'Methodology', content: 'Details the research design, participants, instruments, procedures, and analysis methods. Must be specific enough for replication.' },
        { title: 'Results', content: 'Objectively presents the analyzed data using tables, graphs, and statistical measures.' },
        { title: 'Discussion & Conclusion', content: 'Interprets findings, compares with prior research, and discusses implications, limitations, and future research directions.' },
        { title: 'References', content: 'Lists all cited sources formatted according to academic standards (APA, MLA, Chicago, etc.).' }
      ];

  return (
    <>
      <SEOHead title={t('site.structure.title')} description={t('site.structure.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.structure.title')}</h2>
          <p>{t('site.structure.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="structure-list">
            {sections.map((sec, i) => (
              <div className="structure-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="structure-number">{i + 1}</div>
                <div className="structure-body">
                  <h3>{sec.title}</h3>
                  <p>{sec.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaperStructure;
