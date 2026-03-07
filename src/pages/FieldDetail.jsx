import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { categories, subFieldColors, detailData } from '../data/fieldDetailData';

// 대분류 ID → 첫 번째 세부전공 리다이렉트 맵
const broadCategoryMap = {};
categories.forEach((cat) => {
  broadCategoryMap[cat.key] = cat.fields[0]?.id;
  // 하이픈 형태도 지원 (natural-science → naturalScience)
  const hyphenKey = cat.key.replace(/([A-Z])/g, '-$1').toLowerCase();
  if (hyphenKey !== cat.key) broadCategoryMap[hyphenKey] = cat.fields[0]?.id;
});

// 카테고리에서 서브필드 정보를 찾는 헬퍼
const findField = (fieldId) => {
  for (const cat of categories) {
    const field = cat.fields.find((f) => f.id === fieldId);
    if (field) return { field, category: cat };
  }
  return null;
};

const FieldDetail = () => {
  const { fieldId } = useParams();
  const { lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  useAOS();

  // 대분류 ID로 접근 시 첫 번째 세부전공으로 리다이렉트
  if (broadCategoryMap[fieldId]) {
    return <Navigate to={`/fields/${broadCategoryMap[fieldId]}`} replace />;
  }

  const found = findField(fieldId);

  if (!found) {
    return (
      <section className="section">
        <div className="container text-center">
          <h2>404</h2>
          <p>{lang === 'ko' ? '해당 분야를 찾을 수 없습니다.' : 'Field not found.'}</p>
          <Link to="/fields" className="btn btn-primary" style={{ marginTop: '20px' }}>
            {lang === 'ko' ? '전공별 자료로 돌아가기' : 'Back to Fields'}
          </Link>
        </div>
      </section>
    );
  }

  const { field, category } = found;
  const color = subFieldColors[fieldId] || category.color;
  const sections = (detailData[lang] || detailData.en)?.[fieldId];

  // 데이터가 아직 없는 경우 fallback
  if (!sections) {
    return (
      <section className="section">
        <div className="container text-center">
          <h2>{field.icon} {field.name[lang] || field.name.en}</h2>
          <p style={{ marginTop: '16px' }}>
            {lang === 'ko' ? '해당 분야의 상세 자료를 준비 중입니다.' : 'Detailed resources for this field are being prepared.'}
          </p>
          <Link to="/fields" className="btn btn-primary" style={{ marginTop: '20px' }}>
            {lang === 'ko' ? '← 전공별 자료' : '← Back to Fields'}
          </Link>
        </div>
      </section>
    );
  }

  const active = sections[activeIdx];
  const fieldName = field.name[lang] || field.name.en;

  return (
    <>
      <SEOHead
        title={fieldName}
        description={sections[0]?.details?.purposeDesc || field.desc[lang] || field.desc.en}
      />

      <section className="page-header">
        <div className="container">
          <h2>{field.icon} {fieldName}</h2>
          <p>{field.desc[lang] || field.desc.en}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="structure-layout">
            <div className="structure-nav">
              {sections.map((sec, i) => (
                <div
                  className={`structure-nav-card${activeIdx === i ? ' active' : ''}`}
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  style={activeIdx === i ? { borderColor: color } : {}}
                >
                  <div className="structure-number" style={{ background: color }}>{i + 1}</div>
                  <div className="structure-body">
                    <h3>{sec.title}</h3>
                    <p>{sec.content}</p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '12px' }}>
                <Link to="/fields" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                  {lang === 'ko' ? '← 전공별 자료' : '← Back to Fields'}
                </Link>
              </div>
            </div>

            <div className="structure-detail">
              <div className="structure-detail-inner">
                <div className="structure-detail-header" style={{ borderBottomColor: color }}>
                  <span className="structure-detail-num" style={{ background: color }}>{activeIdx + 1}</span>
                  <h3>{active.title}</h3>
                </div>

                <div className="structure-detail-section">
                  <h4 style={{ color }}>{active.details.purpose}</h4>
                  <p>{active.details.purposeDesc}</p>
                </div>

                <div className="structure-detail-section">
                  <h4 style={{ color }}>{active.details.elements}</h4>
                  <ul>
                    {active.details.elementList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="structure-detail-section">
                  <h4 style={{ color }}>{active.details.tips}</h4>
                  <ul className="structure-tips">
                    {active.details.tipList.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FieldDetail;
