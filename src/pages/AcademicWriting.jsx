import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const tips = {
  ko: [
    { title: '객관적 어조 유지', content: '학술 논문은 1인칭 사용을 최소화하고, 객관적이고 중립적인 어조로 작성합니다.', icon: '🎯' },
    { title: '단락 구성의 원칙', content: '하나의 단락에는 하나의 주제만 다룹니다. 주제문으로 시작하여 뒷받침 문장, 결론 문장으로 구성합니다.', icon: '📋' },
    { title: '논리적 전개', content: '주장-근거-예시의 구조로 논증합니다. 접속어와 전환어를 적절히 사용하여 논리적 흐름을 유지합니다.', icon: '🔗' },
    { title: '인용과 패러프레이징', content: '직접 인용은 인용부호로 표시하고, 패러프레이징은 자신의 언어로 재구성하되 반드시 출처를 밝힙니다.', icon: '📝' },
    { title: '학술 용어 사용', content: '전공 분야의 학술 용어를 정확하게 사용하고, 처음 사용하는 용어는 정의를 먼저 제시합니다.', icon: '🔤' },
    { title: '퇴고와 교정', content: '초고 작성 후 반드시 여러 차례 퇴고합니다. 문법, 맞춤법, 논리적 일관성을 점검합니다.', icon: '✅' }
  ],
  en: [
    { title: 'Maintain Objective Tone', content: 'Minimize first-person usage and write in an objective, neutral tone.', icon: '🎯' },
    { title: 'Paragraph Structure', content: 'Each paragraph should address one topic. Start with a topic sentence, followed by supporting and concluding sentences.', icon: '📋' },
    { title: 'Logical Flow', content: 'Use claim-evidence-example structure with appropriate transitions between sentences and paragraphs.', icon: '🔗' },
    { title: 'Citation & Paraphrasing', content: 'Direct quotes use quotation marks. Paraphrasing rephrases in your own words but must cite the source.', icon: '📝' },
    { title: 'Academic Terminology', content: 'Use field-specific terms accurately. Define terms on first use and maintain consistency.', icon: '🔤' },
    { title: 'Revision & Proofreading', content: 'Revise multiple times after the first draft. Check grammar, spelling, and logical consistency.', icon: '✅' }
  ]
};

const AcademicWriting = () => {
  const { t, lang } = useLanguage();
  useAOS();
  const data = tips[lang] || tips.ko;

  return (
    <>
      <SEOHead title={t('site.writing.title')} description={t('site.writing.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.writing.title')}</h2>
          <p>{t('site.writing.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="writing-tips-grid">
            {data.map((tip, i) => (
              <div className="writing-tip-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="tip-icon">{tip.icon}</div>
                <div className="tip-body">
                  <h3>{tip.title}</h3>
                  <p>{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicWriting;
