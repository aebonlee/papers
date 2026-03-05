import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const principlesData = {
  ko: [
    { title: '표절 금지', content: '타인의 아이디어, 표현, 데이터를 출처 표시 없이 사용하는 것은 학술적 부정행위입니다.' },
    { title: '데이터 조작/위조 금지', content: '연구 데이터를 의도적으로 변경하거나, 존재하지 않는 데이터를 만들어내는 행위는 가장 심각한 연구 부정행위입니다.' },
    { title: '중복 게재 금지', content: '동일하거나 유사한 내용을 여러 학술지에 동시 또는 순차적으로 게재하는 것은 허용되지 않습니다.' },
    { title: '저자 자격 준수', content: '연구에 실질적으로 기여한 사람만 저자로 포함해야 합니다. 명예 저자, 유령 저자는 연구윤리 위반입니다.' },
    { title: 'IRB 승인', content: '인간 대상 연구는 반드시 기관생명윤리위원회(IRB)의 사전 승인을 받아야 합니다.' },
    { title: '이해충돌 공개', content: '연구 결과에 영향을 미칠 수 있는 재정적, 개인적 이해관계를 투명하게 공개해야 합니다.' }
  ],
  en: [
    { title: 'No Plagiarism', content: 'Using others\' ideas, expressions, or data without proper attribution is academic misconduct.' },
    { title: 'No Data Fabrication/Falsification', content: 'Intentionally altering or creating non-existent data is the most severe form of research misconduct.' },
    { title: 'No Duplicate Publication', content: 'Publishing identical or similar content in multiple journals simultaneously or sequentially is not permitted.' },
    { title: 'Proper Authorship', content: 'Only those who made substantial contributions should be listed as authors.' },
    { title: 'IRB Approval', content: 'Human subject research must receive prior approval from the Institutional Review Board (IRB).' },
    { title: 'Conflict of Interest Disclosure', content: 'Financial or personal interests that could influence research outcomes must be transparently disclosed.' }
  ]
};

const ResearchEthics = () => {
  const { t, lang } = useLanguage();
  useAOS();
  const principles = principlesData[lang] || principlesData.ko;

  return (
    <>
      <SEOHead title={t('site.ethics.title')} description={t('site.ethics.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.ethics.title')}</h2>
          <p>{t('site.ethics.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ethics-grid">
            {principles.map((principle, i) => (
              <div className="ethics-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="ethics-number">{i + 1}</div>
                <div className="ethics-body">
                  <h3>{principle.title}</h3>
                  <p>{principle.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchEthics;
