import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const detailData = {
  ko: [
    {
      title: '표절 금지',
      content: '타인의 아이디어, 표현, 데이터를 출처 표시 없이 사용하는 것은 학술적 부정행위입니다.',
      details: {
        purpose: '표절이란 무엇인가',
        purposeDesc: '표절(plagiarism)은 타인의 지적 산출물을 자신의 것처럼 사용하는 행위입니다. 의도적이든 비의도적이든 출처를 밝히지 않으면 표절로 간주되며, 학위 취소까지 이를 수 있는 심각한 위반입니다.',
        elements: '표절의 유형',
        elementList: [
          '직접 표절: 타인의 문장을 그대로 복사하여 인용 표시 없이 사용',
          '패러프레이징 표절: 단어만 바꾸고 문장 구조를 그대로 사용하며 출처 미표시',
          '자기 표절: 자신의 이전 저작물을 새 논문에 출처 없이 재사용',
          '아이디어 표절: 타인의 독창적 아이디어나 연구 설계를 출처 없이 사용',
          '모자이크 표절: 여러 출처의 문구를 조합하여 마치 원문인 것처럼 작성'
        ],
        tips: '표절 예방 방법',
        tipList: [
          '패러프레이징 시 문장 구조와 단어 모두 재구성하고 반드시 출처 표시',
          'Turnitin, Copyleaks 등 표절 검사 도구를 제출 전 반드시 활용',
          '메모 단계에서부터 출처 정보를 함께 기록하는 습관',
          '직접 인용은 인용부호(" ")와 페이지 번호를 반드시 표기'
        ]
      }
    },
    {
      title: '데이터 조작/위조 금지',
      content: '연구 데이터를 의도적으로 변경하거나, 존재하지 않는 데이터를 만들어내는 행위는 가장 심각한 연구 부정행위입니다.',
      details: {
        purpose: '위조·변조의 정의',
        purposeDesc: '위조(fabrication)는 존재하지 않는 데이터를 만들어내는 것이고, 변조(falsification)는 실제 데이터를 의도적으로 수정·삭제하여 결과를 왜곡하는 것입니다. FFP(Fabrication, Falsification, Plagiarism)는 연구 부정행위의 3대 유형입니다.',
        elements: '구체적 사례',
        elementList: [
          '데이터 위조: 실험을 수행하지 않고 결과 데이터를 만들어냄',
          '데이터 변조: 가설에 맞지 않는 데이터를 삭제하거나 수치를 조작',
          '이미지 조작: 실험 이미지(겔 사진, 현미경 이미지 등)를 의도적으로 편집',
          '결과 선택적 보고: 유의미한 결과만 보고하고 유의미하지 않은 결과 은폐',
          'p-hacking: 유의미한 p-value가 나올 때까지 분석 방법을 반복 변경'
        ],
        tips: '데이터 무결성 확보 방법',
        tipList: [
          '원시 데이터(raw data)를 보존하고, 분석 과정을 투명하게 기록',
          '연구 노트(lab notebook)를 체계적으로 작성하고 날짜 기록',
          '사전등록(pre-registration): 연구 시작 전 가설과 분석 계획을 공개 등록',
          '데이터 공유: 가능한 경우 원시 데이터를 공개 저장소에 공개'
        ]
      }
    },
    {
      title: '중복 게재 금지',
      content: '동일하거나 유사한 내용을 여러 학술지에 동시 또는 순차적으로 게재하는 것은 허용되지 않습니다.',
      details: {
        purpose: '중복 게재의 문제점',
        purposeDesc: '중복 게재는 학술 커뮤니티의 자원을 낭비하고, 연구 성과를 부풀리며, 메타분석 등에서 결과를 왜곡시킬 수 있습니다. 대부분의 학술지는 독점 게재 정책을 시행합니다.',
        elements: '중복 게재의 유형',
        elementList: [
          '동시 투고: 같은 원고를 두 개 이상의 학술지에 동시에 투고',
          '자기 중복: 이전 출판물의 내용을 새 논문에 상당 부분 재사용',
          '살라미 슬라이싱: 하나의 연구를 인위적으로 여러 편으로 나누어 게재',
          '번역 중복: 다른 언어로 번역하여 별도 게재 (허용되는 경우도 있음)',
          '학위논문 → 학술지: 일반적으로 허용되지만, 학술지 정책 확인 필요'
        ],
        tips: '올바른 출판 관행',
        tipList: [
          '투고 시 해당 학술지의 독점 게재 정책을 반드시 확인',
          '이전 출판물과 겹치는 내용이 있으면 투고 시 편집자에게 고지',
          '학위논문 일부를 학술지에 게재할 때는 출처를 명시',
          '살라미 슬라이싱 대신, 충분한 데이터로 하나의 완성된 논문 작성'
        ]
      }
    },
    {
      title: '저자 자격 준수',
      content: '연구에 실질적으로 기여한 사람만 저자로 포함해야 합니다. 명예 저자, 유령 저자는 연구윤리 위반입니다.',
      details: {
        purpose: '저자 자격의 기준',
        purposeDesc: 'ICMJE(국제의학학술지편집인위원회)의 저자 기준에 따르면, 연구의 구상/설계/데이터 수집·분석에 실질적으로 기여하고, 원고 작성/수정에 참여하며, 최종본을 승인한 사람만 저자 자격이 있습니다.',
        elements: '저자 관련 윤리 위반 유형',
        elementList: [
          '명예 저자(Gift Authorship): 실질적 기여 없이 직위·인맥으로 포함',
          '유령 저자(Ghost Authorship): 실질적 기여자를 저자에서 제외',
          '교신저자 남용: 연구 책임이 아닌 사람을 교신저자로 표시',
          '저자 순서 분쟁: 기여도와 맞지 않는 저자 순서 배정',
          '강제 저자: 지도교수가 기여 없이 저자 포함을 강요'
        ],
        tips: '바람직한 저자 관리',
        tipList: [
          '연구 초기에 저자 자격 기준과 순서를 명확히 합의',
          'CRediT(Contributor Roles Taxonomy): 14개 역할로 각 저자의 기여 명시',
          '감사의 글(Acknowledgments): 저자 기준에 미달하는 기여자는 여기에 명시',
          '분쟁 발생 시 소속 기관의 연구윤리 위원회에 조정 요청'
        ]
      }
    },
    {
      title: 'IRB 승인',
      content: '인간 대상 연구는 반드시 기관생명윤리위원회(IRB)의 사전 승인을 받아야 합니다.',
      details: {
        purpose: 'IRB의 역할과 필요성',
        purposeDesc: 'IRB(Institutional Review Board)는 인간 대상 연구에서 연구 참여자의 권리, 안전, 복지를 보호하기 위한 심의 기구입니다. 한국에서는 「생명윤리 및 안전에 관한 법률」에 의해 법적 의무사항입니다.',
        elements: 'IRB 심의 과정',
        elementList: [
          '심의 면제: 공개된 정보 활용, 기존 데이터 2차 분석 등 위험이 없는 연구',
          '신속심의: 최소 위험 연구 (예: 설문조사, 인터뷰)',
          '정규심의: 취약한 대상(미성년자, 환자 등) 또는 위험이 있는 연구',
          '제출 서류: 연구계획서, 동의서, 설문지, 연구자 윤리교육 이수증',
          '변경심의: 승인된 연구 계획을 변경할 경우 재심의 필요'
        ],
        tips: '연구자가 알아야 할 사항',
        tipList: [
          '데이터 수집 전에 IRB 승인을 받아야 함 (소급 승인 불가)',
          '연구 참여자에게 충분한 설명 후 자발적 동의(informed consent) 확보',
          '참여자의 개인정보 보호 및 익명성/비밀보장 방안 마련',
          'CITI 등 연구윤리 온라인 교육을 먼저 이수해야 IRB 신청 가능'
        ]
      }
    },
    {
      title: '이해충돌 공개',
      content: '연구 결과에 영향을 미칠 수 있는 재정적, 개인적 이해관계를 투명하게 공개해야 합니다.',
      details: {
        purpose: '이해충돌(COI)이란',
        purposeDesc: '이해충돌(Conflict of Interest)은 연구자의 전문적 판단에 영향을 미칠 수 있는 재정적·개인적 이해관계를 말합니다. 이해충돌 자체가 잘못이 아니라, 이를 은폐하는 것이 윤리 위반입니다.',
        elements: '이해충돌의 유형',
        elementList: [
          '재정적 COI: 연구비 지원 기관, 주식 보유, 컨설팅 수입, 특허권',
          '학술적 COI: 경쟁 연구자 논문 심사, 본인 이론 검증 연구',
          '개인적 COI: 가족·지인이 관련된 연구, 개인적 신념과 연구 주제',
          '기관적 COI: 소속 기관이 연구 결과에 이해관계를 가지는 경우',
          '비재정적 COI: 정치적 성향, 종교적 신념, 전문적 경쟁 관계'
        ],
        tips: '올바른 공개 방법',
        tipList: [
          '논문 투고 시 이해충돌 진술서(COI disclosure form) 제출',
          '논문 내 "이해충돌 진술(Conflict of Interest Statement)" 섹션에 명시',
          '"이해충돌 없음"인 경우에도 반드시 "The authors declare no conflict of interest" 기재',
          '연구비 출처는 감사의 글(Acknowledgments/Funding)에 반드시 명시'
        ]
      }
    }
  ],
  en: [
    {
      title: 'No Plagiarism',
      content: 'Using others\' ideas, expressions, or data without proper attribution is academic misconduct.',
      details: {
        purpose: 'What Is Plagiarism',
        purposeDesc: 'Plagiarism is using another person\'s intellectual output as if it were your own. Whether intentional or unintentional, failure to attribute sources is considered plagiarism and can result in degree revocation.',
        elements: 'Types of Plagiarism',
        elementList: [
          'Direct Plagiarism: Copying sentences verbatim without quotation marks or citation',
          'Paraphrasing Plagiarism: Changing words but keeping sentence structure without attribution',
          'Self-Plagiarism: Reusing one\'s own previous work in a new paper without citation',
          'Idea Plagiarism: Using someone\'s original ideas or research design without credit',
          'Mosaic Plagiarism: Combining phrases from multiple sources to appear original'
        ],
        tips: 'How to Prevent Plagiarism',
        tipList: [
          'When paraphrasing, restructure both words and sentence structure, and always cite',
          'Always use plagiarism detection tools (Turnitin, Copyleaks) before submission',
          'Develop a habit of recording source information from the note-taking stage',
          'Direct quotes must include quotation marks (" ") and page numbers'
        ]
      }
    },
    {
      title: 'No Data Fabrication/Falsification',
      content: 'Intentionally altering or creating non-existent data is the most severe form of research misconduct.',
      details: {
        purpose: 'Definitions of Fabrication & Falsification',
        purposeDesc: 'Fabrication is creating data that doesn\'t exist. Falsification is intentionally modifying or deleting real data to distort results. FFP (Fabrication, Falsification, Plagiarism) are the three major types of research misconduct.',
        elements: 'Specific Examples',
        elementList: [
          'Data Fabrication: Creating result data without conducting the experiment',
          'Data Falsification: Deleting data that contradicts hypotheses or manipulating values',
          'Image Manipulation: Intentionally editing experimental images (gel photos, microscope images)',
          'Selective Reporting: Reporting only significant results while concealing non-significant ones',
          'p-hacking: Repeatedly changing analysis methods until a significant p-value is obtained'
        ],
        tips: 'Ensuring Data Integrity',
        tipList: [
          'Preserve raw data and transparently document the analysis process',
          'Systematically maintain lab notebooks with dates recorded',
          'Pre-registration: Publicly register hypotheses and analysis plans before starting research',
          'Data sharing: When possible, publish raw data in open repositories'
        ]
      }
    },
    {
      title: 'No Duplicate Publication',
      content: 'Publishing identical or similar content in multiple journals simultaneously or sequentially is not permitted.',
      details: {
        purpose: 'Problems with Duplicate Publication',
        purposeDesc: 'Duplicate publication wastes academic community resources, inflates research output, and can distort results in meta-analyses. Most journals enforce exclusive publication policies.',
        elements: 'Types of Duplicate Publication',
        elementList: [
          'Simultaneous Submission: Submitting the same manuscript to two or more journals at once',
          'Self-Duplication: Substantially reusing content from previous publications in a new paper',
          'Salami Slicing: Artificially splitting one study into multiple publications',
          'Translation Duplication: Publishing separately in another language (sometimes permitted)',
          'Thesis → Journal: Generally allowed, but check journal policies first'
        ],
        tips: 'Proper Publication Practices',
        tipList: [
          'Always check the journal\'s exclusive publication policy before submission',
          'Disclose any overlap with previous publications to the editor when submitting',
          'When publishing parts of a thesis in journals, clearly state the source',
          'Instead of salami slicing, write one complete paper with sufficient data'
        ]
      }
    },
    {
      title: 'Proper Authorship',
      content: 'Only those who made substantial contributions should be listed as authors.',
      details: {
        purpose: 'Authorship Criteria',
        purposeDesc: 'According to ICMJE criteria, authorship requires substantial contribution to conception/design/data collection/analysis, participation in drafting/revising the manuscript, and approval of the final version.',
        elements: 'Types of Authorship Ethics Violations',
        elementList: [
          'Gift Authorship: Including someone without substantial contribution based on position or connections',
          'Ghost Authorship: Excluding someone who made substantial contributions',
          'Corresponding Author Abuse: Designating someone without research responsibility',
          'Author Order Disputes: Assigning author order inconsistent with contributions',
          'Coerced Authorship: An advisor forcing inclusion without contribution'
        ],
        tips: 'Best Practices for Authorship',
        tipList: [
          'Clearly agree on authorship criteria and order early in the research',
          'CRediT (Contributor Roles Taxonomy): Specify each author\'s contribution across 14 roles',
          'Acknowledgments: Recognize contributors who don\'t meet authorship criteria here',
          'In case of disputes, request mediation from the institutional research ethics committee'
        ]
      }
    },
    {
      title: 'IRB Approval',
      content: 'Human subject research must receive prior approval from the Institutional Review Board (IRB).',
      details: {
        purpose: 'Role and Necessity of IRB',
        purposeDesc: 'The IRB is a review body that protects the rights, safety, and welfare of research participants in human subject research. It is legally required in most countries.',
        elements: 'IRB Review Process',
        elementList: [
          'Exempt Review: Research using publicly available information or secondary data analysis with no risk',
          'Expedited Review: Minimal risk research (e.g., surveys, interviews)',
          'Full Board Review: Research involving vulnerable populations (minors, patients) or significant risk',
          'Required Documents: Research protocol, consent forms, questionnaires, ethics training certificates',
          'Amendment Review: Re-review required when modifying an approved research plan'
        ],
        tips: 'What Researchers Need to Know',
        tipList: [
          'IRB approval must be obtained BEFORE data collection (retroactive approval not possible)',
          'Obtain voluntary informed consent after providing sufficient explanation to participants',
          'Establish measures for protecting participants\' personal information and ensuring anonymity',
          'Complete research ethics online training (e.g., CITI) before applying to IRB'
        ]
      }
    },
    {
      title: 'Conflict of Interest Disclosure',
      content: 'Financial or personal interests that could influence research outcomes must be transparently disclosed.',
      details: {
        purpose: 'What Is Conflict of Interest (COI)',
        purposeDesc: 'COI refers to financial or personal interests that could influence a researcher\'s professional judgment. Having a COI is not wrong in itself — concealing it is the ethical violation.',
        elements: 'Types of COI',
        elementList: [
          'Financial COI: Funding sources, stock ownership, consulting income, patent rights',
          'Academic COI: Reviewing competing researcher\'s papers, studying one\'s own theory',
          'Personal COI: Research involving family/acquaintances, personal beliefs related to research topic',
          'Institutional COI: Institution has a stake in research outcomes',
          'Non-financial COI: Political leanings, religious beliefs, professional rivalries'
        ],
        tips: 'Proper Disclosure Methods',
        tipList: [
          'Submit a COI disclosure form when submitting a manuscript',
          'Include a "Conflict of Interest Statement" section in the paper',
          'Even with no COI, always write: "The authors declare no conflict of interest"',
          'Research funding sources must be stated in Acknowledgments/Funding section'
        ]
      }
    }
  ]
};

const ResearchEthics = () => {
  const { t, lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  useAOS();

  const sections = detailData[lang] || detailData.en;
  const active = sections[activeIdx];

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
          <div className="structure-layout">
            <div className="structure-nav">
              {sections.map((sec, i) => (
                <div
                  className={`structure-nav-card${activeIdx === i ? ' active' : ''}`}
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <div className="structure-number">{i + 1}</div>
                  <div className="structure-body">
                    <h3>{sec.title}</h3>
                    <p>{sec.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="structure-detail" data-aos="fade-left">
              <div className="structure-detail-inner">
                <div className="structure-detail-header">
                  <span className="structure-detail-num">{activeIdx + 1}</span>
                  <h3>{active.title}</h3>
                </div>

                <div className="structure-detail-section">
                  <h4>{active.details.purpose}</h4>
                  <p>{active.details.purposeDesc}</p>
                </div>

                <div className="structure-detail-section">
                  <h4>{active.details.elements}</h4>
                  <ul>
                    {active.details.elementList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="structure-detail-section">
                  <h4>{active.details.tips}</h4>
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

export default ResearchEthics;
