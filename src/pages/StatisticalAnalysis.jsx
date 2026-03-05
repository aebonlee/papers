import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const methodsData = {
  ko: [
    { name: '기술통계', desc: '평균, 표준편차, 빈도, 백분율 등 데이터의 기본 특성을 요약합니다.', when: '데이터의 전반적인 특성을 파악할 때' },
    { name: 't-검정 (t-test)', desc: '두 집단 간 평균 차이의 통계적 유의성을 검정합니다.', when: '실험군과 대조군의 평균 비교 시' },
    { name: '분산분석 (ANOVA)', desc: '세 집단 이상의 평균 차이를 동시에 비교합니다.', when: '3개 이상 집단의 평균 비교 시' },
    { name: '상관분석', desc: '두 변인 간의 관련성 정도와 방향을 파악합니다.', when: '변인 간 관계의 강도와 방향 파악 시' },
    { name: '회귀분석', desc: '독립변인이 종속변인에 미치는 영향을 분석합니다.', when: '변인 간 인과관계 또는 예측 모형 구축 시' },
    { name: '카이제곱 검정', desc: '범주형 변인 간의 독립성 또는 적합도를 검정합니다.', when: '범주형 데이터의 관련성 분석 시' }
  ],
  en: [
    { name: 'Descriptive Statistics', desc: 'Summarizes basic data characteristics including mean, standard deviation, frequency, and percentage.', when: 'When grasping overall data characteristics' },
    { name: 't-test', desc: 'Tests statistical significance of mean differences between two groups.', when: 'When comparing means of experimental and control groups' },
    { name: 'ANOVA', desc: 'Compares mean differences across three or more groups simultaneously.', when: 'When comparing means across 3+ groups' },
    { name: 'Correlation Analysis', desc: 'Determines the strength and direction of relationships between two variables.', when: 'When assessing variable relationships' },
    { name: 'Regression Analysis', desc: 'Analyzes the effect of independent variables on dependent variables.', when: 'When building causal or predictive models' },
    { name: 'Chi-square Test', desc: 'Tests independence or goodness of fit for categorical variables.', when: 'When analyzing categorical data relationships' }
  ]
};

const toolsData = {
  ko: [
    { name: 'SPSS', desc: '사회과학 분야에서 가장 널리 사용되는 통계 소프트웨어' },
    { name: 'R / RStudio', desc: '무료 오픈소스 통계 프로그래밍 환경' },
    { name: 'Python', desc: '데이터 분석과 머신러닝에 강력한 프로그래밍 언어 (pandas, scipy)' },
    { name: 'AMOS / LISREL', desc: '구조방정식 모형(SEM) 분석에 특화된 도구' }
  ],
  en: [
    { name: 'SPSS', desc: 'Most widely used statistical software in social sciences' },
    { name: 'R / RStudio', desc: 'Free open-source statistical programming environment' },
    { name: 'Python', desc: 'Powerful programming language for data analysis and ML (pandas, scipy)' },
    { name: 'AMOS / LISREL', desc: 'Specialized tools for Structural Equation Modeling (SEM)' }
  ]
};

const StatisticalAnalysis = () => {
  const { t, lang } = useLanguage();
  useAOS();
  const methods = methodsData[lang] || methodsData.ko;
  const tools = toolsData[lang] || toolsData.ko;

  return (
    <>
      <SEOHead title={t('site.statistics.title')} description={t('site.statistics.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.statistics.title')}</h2>
          <p>{t('site.statistics.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="subsection-title">{lang === 'ko' ? '주요 통계분석 방법' : 'Key Statistical Methods'}</h3>
          <div className="stats-methods-grid">
            {methods.map((method, i) => (
              <div className="stats-method-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <h4>{method.name}</h4>
                <p>{method.desc}</p>
                <div className="method-when">
                  <strong>{lang === 'ko' ? '활용 시기' : 'When to use'}:</strong> {method.when}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <h3 className="subsection-title">{lang === 'ko' ? '통계 소프트웨어' : 'Statistical Software'}</h3>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <div className="tool-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <h4>{tool.name}</h4>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticalAnalysis;
