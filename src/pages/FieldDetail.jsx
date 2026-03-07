import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const fieldKeyMap = {
  'humanities': 'humanities',
  'natural-science': 'naturalScience',
  'engineering': 'engineering',
  'medical': 'medical',
  'arts': 'arts'
};

const fieldColors = {
  humanities: '#C8102E',
  naturalScience: '#0046C8',
  engineering: '#C87200',
  medical: '#00855A',
  arts: '#8B1AC8'
};

const detailData = {
  ko: {
    humanities: [
      {
        title: '논문 구조 특성',
        content: '인문사회과학 논문의 구조적 특징과 각 장의 작성 방법을 안내합니다.',
        details: {
          purpose: '인문사회과학 논문의 구조',
          purposeDesc: '인문사회과학 논문은 이론적 논증과 문헌 분석이 핵심입니다. IMRAD 구조를 따르되, 이론적 배경 장이 매우 두텁고 질적 연구의 경우 구조가 유연할 수 있습니다.',
          elements: '구조적 특징',
          elementList: [
            '서론: 연구 문제의 사회적·학술적 맥락을 상세히 기술',
            '이론적 배경: 주요 이론·개념·선행연구를 비판적으로 검토 (논문의 30~40%)',
            '연구방법: 질적(인터뷰, 문헌분석) 또는 양적(설문조사) 방법 상세 기술',
            '결과/분석: 질적 연구는 주제 분석, 양적 연구는 통계 결과 제시',
            '논의: 결과의 이론적·실천적 시사점을 풍부하게 논의'
          ],
          tips: '작성 핵심 포인트',
          tipList: [
            '이론적 프레임워크를 명확히 설정하고 일관되게 적용',
            '선행연구 검토 시 단순 나열이 아닌 비판적 종합 수행',
            '연구자의 관점(positionality)을 명확히 밝히기 (질적 연구)',
            '인용 형식: APA 7th (사회과학), Chicago (인문학) 주로 사용'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '인문사회과학에서 주로 사용되는 질적·양적·혼합 연구방법의 특징입니다.',
        details: {
          purpose: '주요 연구방법',
          purposeDesc: '인문사회과학은 연구 주제에 따라 다양한 방법론을 선택합니다. 질적 연구가 전통적으로 강세이나, 최근 혼합 연구와 빅데이터 분석도 활발합니다.',
          elements: '분야별 주요 방법론',
          elementList: [
            '교육학: 실험연구, 사례연구, 실행연구(Action Research), 설문조사',
            '사회학: 민족지학(Ethnography), 담론분석, 네트워크 분석',
            '심리학: 실험설계, 척도개발, 종단연구, 뇌영상 연구',
            '경영학: 사례연구, 서베이, 계량분석, 게임이론',
            '문학/철학: 텍스트 분석, 해석학적 접근, 비교문학적 방법'
          ],
          tips: '방법론 선택 시 고려사항',
          tipList: [
            '연구 질문의 성격에 맞는 방법론 선택 (탐색적 vs 검증적)',
            '질적 연구의 엄밀성: 삼각검증, 참여자 확인, 감사 추적',
            '양적 연구: 표본 크기 산출, 측정도구 신뢰도·타당도 확보',
            '혼합 연구: 양적·질적 통합의 근거와 시점 명확히 기술'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '인문사회과학 분야의 대표 학술지와 인용 형식 가이드입니다.',
        details: {
          purpose: '주요 학술지',
          purposeDesc: '한국연구재단(KCI) 등재지를 중심으로 국내 학술지를 선택하고, SSCI/A&HCI 등재 국제 학술지에도 도전해보세요.',
          elements: '분야별 대표 학술지',
          elementList: [
            '교육학: 교육학연구, 한국교원교육연구, 교육공학연구',
            '사회학: 한국사회학, 경제와사회, 한국사회정책',
            '심리학: 한국심리학회지, 상담학연구, 인지과학',
            '경영학: 경영학연구, 한국마케팅저널, 인사조직연구',
            '국제: SSCI (Social Sciences Citation Index) 등재지 목표'
          ],
          tips: '인용 형식 가이드',
          tipList: [
            'APA 7th: 사회과학 전반 — 저자-연도 방식 (Kim, 2023)',
            'Chicago Notes: 인문학 — 각주 방식 (¹Kim, Book, 45.)',
            'MLA 9th: 문학·언어학 — 저자-페이지 방식 (Kim 45)',
            'Zotero/Mendeley로 참고문헌 관리 필수 — 수백 개 관리 가능'
          ]
        }
      },
      {
        title: '논문작성 실전 팁',
        content: '인문사회과학 논문의 완성도를 높이는 구체적인 작성 전략입니다.',
        details: {
          purpose: '실전 작성 전략',
          purposeDesc: '인문사회과학 논문은 논리적 설득력과 글쓰기의 질이 매우 중요합니다. 이론과 데이터를 유기적으로 연결하는 능력이 핵심 역량입니다.',
          elements: '단계별 작성 전략',
          elementList: [
            '연구 질문 구체화: "왜(why)"와 "어떻게(how)" 중심으로 설정',
            '문헌 검색: RISS, KISS, DBpia, Google Scholar, JSTOR 활용',
            '개념적 틀 구성: 핵심 변인/개념 간 관계를 도식화',
            '데이터 수집: 연구윤리(IRB) 승인 → 파일럿 → 본조사',
            '퇴고: 논리 흐름 → 내용 충실성 → 문체 → 형식 순서로'
          ],
          tips: '자주 하는 실수',
          tipList: [
            '연구 질문이 너무 광범위 — 범위를 좁혀 구체적으로 설정',
            '이론적 배경이 단순 나열 — 비판적 종합과 간극(gap) 도출 필요',
            '결과와 논의 혼동 — 결과는 객관적 보고, 논의는 해석과 시사점',
            '자기 표절 주의 — 학위논문 → 학술지 게재 시 출처 명시'
          ]
        }
      }
    ],
    naturalScience: [
      {
        title: '논문 구조 (IMRAD)',
        content: '자연과학 논문의 표준 구조인 IMRAD 형식과 각 섹션별 작성법입니다.',
        details: {
          purpose: 'IMRAD 구조란',
          purposeDesc: 'Introduction-Methods-Results-And-Discussion의 약자로, 자연과학 논문의 국제 표준 구조입니다. 엄격한 형식을 따르며, 실험의 재현 가능성이 최우선입니다.',
          elements: '각 섹션별 핵심',
          elementList: [
            'Introduction: 연구 배경, 선행연구 간극, 가설/목적을 논리적으로 전개',
            'Methods: 실험 재료·장비·조건·절차를 재현 가능하게 상세 기술',
            'Results: 데이터를 객관적으로 제시, 해석 없이 그래프/표 활용',
            'Discussion: 결과 해석, 선행연구 비교, 한계, 후속 연구 제언',
            'Abstract: 250단어 이내, 구조화 초록(목적-방법-결과-결론) 권장'
          ],
          tips: '자연과학 논문의 특징',
          tipList: [
            '간결하고 정확한 문체 — 불필요한 수식어 지양',
            '수동태 사용이 일반적: "The sample was heated to 100°C"',
            'SI 단위계 사용 필수 (kg, m, s, mol 등)',
            '그래프: 축 레이블, 단위, 오차 막대(error bar) 반드시 포함'
          ]
        }
      },
      {
        title: '실험 설계 & 데이터',
        content: '실험 설계의 원칙, 데이터 수집·분석 방법, 통계적 검증을 안내합니다.',
        details: {
          purpose: '실험 설계 원칙',
          purposeDesc: '자연과학 연구의 핵심은 재현 가능한 실험 설계입니다. 독립변인·종속변인·통제변인을 명확히 하고, 편향(bias)을 최소화해야 합니다.',
          elements: '실험 설계 체크리스트',
          elementList: [
            '대조군 설정: 실험군과 비교할 통제 조건 반드시 포함',
            '반복 실험: 최소 3회 이상 반복으로 재현성 확보 (n ≥ 3)',
            '블라인드 설계: 가능한 경우 단일/이중 블라인드 적용',
            '변인 통제: 온도, 습도, 시약 농도 등 실험 조건 표준화',
            '데이터 기록: 연구노트(lab notebook)에 날짜별 상세 기록'
          ],
          tips: '데이터 분석 & 시각화',
          tipList: [
            '통계: t-test, ANOVA, 회귀분석 — p < .05 유의수준 기준',
            '오차 표시: 표준편차(SD) 또는 표준오차(SEM) 명시',
            '그래프 도구: GraphPad Prism, Origin, R (ggplot2), Python (matplotlib)',
            '원시 데이터 보존: 실험 후 최소 5년간 보관 (기관 규정 확인)'
          ]
        }
      },
      {
        title: '주요 학술지 & 투고',
        content: '자연과학 분야 주요 학술지와 논문 투고 과정을 안내합니다.',
        details: {
          purpose: '학술지 선택 기준',
          purposeDesc: 'SCI/SCIE 등재 학술지를 목표로 하되, Impact Factor와 연구 주제의 적합성을 함께 고려합니다. Open Access 학술지도 활발히 성장하고 있습니다.',
          elements: '분야별 대표 학술지',
          elementList: [
            '종합: Nature, Science, PNAS, PLoS ONE',
            '물리학: Physical Review Letters, Journal of Applied Physics',
            '화학: Journal of the American Chemical Society, Angewandte Chemie',
            '생물학: Cell, Molecular Biology of the Cell, FASEB Journal',
            '국내: 한국물리학회지, 대한화학회지, 한국생물과학협회지'
          ],
          tips: '투고 & 피어리뷰 과정',
          tipList: [
            '투고 전 Cover Letter 작성: 연구의 참신성과 적합성 강조',
            'Peer Review 대응: Reviewer 의견에 Point-by-Point로 답변',
            '인용 형식: Vancouver (번호 방식) 또는 학술지별 Author Guidelines 확인',
            'Preprint 활용: arXiv, bioRxiv에 사전 공개로 선점 가능'
          ]
        }
      },
      {
        title: '연구윤리 & 도구',
        content: '자연과학 연구의 윤리적 고려사항과 유용한 연구 도구입니다.',
        details: {
          purpose: '연구윤리 핵심',
          purposeDesc: '데이터 무결성, 이미지 조작 금지, 저자 자격 등 자연과학 분야에서 특히 주의해야 할 연구윤리 사항입니다.',
          elements: '윤리 체크리스트',
          elementList: [
            '데이터: 원시 데이터 보존, 조작·위조·선택적 보고 금지',
            '이미지: 겔 사진, 현미경 이미지 — 밝기/대비 조절만 허용, 부분 삭제 금지',
            '동물실험: IACUC(동물실험윤리위원회) 사전 승인 필수',
            '저자: 실질적 기여자만 포함, CRediT Taxonomy로 역할 명시',
            '이해충돌: 연구비 출처, 특허 관련 이해관계 투명 공개'
          ],
          tips: '유용한 연구 도구',
          tipList: [
            '문헌 관리: Zotero, Mendeley, EndNote',
            '데이터 분석: R, Python, MATLAB, GraphPad Prism',
            '논문 작성: LaTeX (물리·수학), Overleaf (온라인 협업)',
            '그림 작성: BioRender (생물학 도식), ChemDraw (화학 구조식)'
          ]
        }
      }
    ],
    engineering: [
      {
        title: '논문 구조 & 특성',
        content: '공학 논문의 구조적 특징과 기술적 기여도(contribution) 제시 방법입니다.',
        details: {
          purpose: '공학 논문의 핵심',
          purposeDesc: '공학 논문은 기존 기술의 한계를 극복하는 새로운 방법/시스템/알고리즘을 제안하고, 실험으로 성능 우수성을 입증하는 것이 핵심입니다.',
          elements: '논문 구조',
          elementList: [
            'Introduction: 기존 기술의 한계(motivation) → 제안 방법 개요',
            'Related Work: 기존 연구를 분류·비교하여 차별점 부각',
            'Proposed Method: 제안 시스템/알고리즘의 구조와 동작 원리 상세 기술',
            'Experiments: 데이터셋, 실험 환경, 비교 대상(baseline), 평가 지표 명시',
            'Results & Discussion: 정량적 비교표 + 정성적 분석 + 한계 논의'
          ],
          tips: '기술적 기여도 제시 방법',
          tipList: [
            'Contribution을 명확히 나열: "본 논문의 기여는 다음과 같다: (1)..."',
            '기존 방법 대비 개선점을 정량적 수치로 제시',
            '시스템 구조도(Architecture Diagram)를 반드시 포함',
            'Ablation Study로 각 구성 요소의 효과를 개별 검증'
          ]
        }
      },
      {
        title: '실험 & 성능 검증',
        content: '공학 논문의 실험 설계, 벤치마크, 성능 평가 방법을 안내합니다.',
        details: {
          purpose: '실험 설계의 핵심',
          purposeDesc: '공학 논문의 실험은 제안 방법의 우수성을 객관적으로 입증해야 합니다. 공정한 비교를 위해 동일 조건에서의 벤치마크가 필수적입니다.',
          elements: '실험 구성 요소',
          elementList: [
            '데이터셋: 공개 벤치마크 데이터셋 사용 (MNIST, ImageNet, COCO 등)',
            'Baseline: 최신 SOTA(State-of-the-Art) 방법과 공정 비교',
            '평가 지표: Accuracy, Precision, Recall, F1-score, mAP, BLEU 등',
            '실험 환경: GPU/CPU 사양, 프레임워크 버전, 학습 파라미터 명시',
            'Ablation Study: 각 모듈/기법의 개별 기여도 검증'
          ],
          tips: '결과 제시 방법',
          tipList: [
            '비교표: 최우수 성능은 Bold, 2위는 Underline으로 표시',
            '학습 곡선, 수렴 그래프 등 시각적 분석 포함',
            '실행 시간(Runtime), 모델 크기 등 실용성 지표도 제시',
            '코드/모델 공개: GitHub 링크 제공으로 재현성 확보'
          ]
        }
      },
      {
        title: '주요 학술지 & 학회',
        content: '공학 분야의 대표 학술지, 국제 학회, 투고 전략을 안내합니다.',
        details: {
          purpose: '학술지 vs 학회 논문',
          purposeDesc: '공학, 특히 컴퓨터과학에서는 학회(Conference) 논문이 학술지(Journal)만큼 중요합니다. 최신 연구는 학회에서 먼저 발표되는 경우가 많습니다.',
          elements: '분야별 주요 학술지/학회',
          elementList: [
            'CS/AI: NeurIPS, ICML, CVPR, ACL, AAAI (학회) / IEEE TPAMI, JMLR (학술지)',
            '전자공학: IEEE Transactions 시리즈, ISSCC, DAC',
            '기계공학: ASME Journal 시리즈, Journal of Mechanical Design',
            '건축/토목: Automation in Construction, ASCE Journal 시리즈',
            '국내: 한국정보과학회, 대한전자공학회, 대한기계학회 논문지'
          ],
          tips: '투고 전략',
          tipList: [
            '학회 데드라인 관리: 주요 학회 마감일 연간 캘린더 작성',
            'Rebuttal 작성: Reviewer 우려를 정면으로 다루고 추가 실험 제시',
            'IEEE/ACM 형식: 2컬럼, 참고문헌 번호 방식, 템플릿 필수 사용',
            'arXiv 사전 공개: 학회 투고 전 선점 + 피드백 수집'
          ]
        }
      },
      {
        title: '연구 도구 & 팁',
        content: '공학 연구에 필수적인 개발 도구, 협업 도구, 논문 작성 팁입니다.',
        details: {
          purpose: '필수 연구 도구',
          purposeDesc: '공학 연구는 코드 구현, 실험 관리, 논문 작성에 다양한 도구를 활용합니다. 효율적인 도구 사용이 연구 생산성을 크게 높입니다.',
          elements: '카테고리별 도구',
          elementList: [
            '코드 관리: Git/GitHub, GitLab — 버전 관리 및 협업',
            '실험 관리: Weights & Biases (W&B), MLflow — 실험 추적·비교',
            '논문 작성: LaTeX + Overleaf (협업), IEEE/ACM 템플릿',
            '그림 작성: draw.io, Lucidchart (시스템 구조도), matplotlib/TikZ (그래프)',
            '문헌 관리: Zotero + BibTeX 연동, Semantic Scholar API'
          ],
          tips: '논문 작성 실전 팁',
          tipList: [
            'Figure는 본문 없이도 이해 가능하도록 Self-contained로 작성',
            'Related Work에서 기존 연구를 존중하되, 차별점을 명확히 부각',
            '페이지 제한: 학회별 규정 엄수 (보통 8~10페이지 + 참고문헌)',
            '영문 교정: Grammarly + 원어민 검토, 또는 전문 교정 서비스'
          ]
        }
      }
    ],
    medical: [
      {
        title: '연구 설계 & 보고 가이드라인',
        content: '의학 논문의 연구 설계 유형과 CONSORT/STROBE 등 보고 가이드라인입니다.',
        details: {
          purpose: '의학 연구의 유형',
          purposeDesc: '의학 연구는 근거 수준(Level of Evidence)에 따라 계층화됩니다. 무작위 대조 시험(RCT)이 최상위이며, 관찰 연구, 사례 보고 순으로 근거 수준이 낮아집니다.',
          elements: '연구 설계 유형',
          elementList: [
            'RCT (무작위 대조 시험): 최고 수준의 근거, CONSORT 가이드라인 준수',
            '코호트 연구: 장기 추적 관찰, STROBE 가이드라인',
            '환자-대조군 연구: 결과 → 원인 역추적, STROBE 준수',
            '횡단면 연구: 특정 시점의 유병률·관련 요인 분석',
            '체계적 문헌고찰/메타분석: 기존 연구 종합, PRISMA 가이드라인'
          ],
          tips: '보고 가이드라인',
          tipList: [
            'CONSORT: RCT 보고 — 흐름도(Flow Diagram) 필수 포함',
            'STROBE: 관찰 연구 보고 — 22개 체크리스트 항목 준수',
            'PRISMA: 체계적 문헌고찰 — 검색 전략·선정/배제 기준 상세 기술',
            'EQUATOR Network (equator-network.org): 모든 가이드라인 검색'
          ]
        }
      },
      {
        title: 'IRB & 연구윤리',
        content: '인간 대상 연구의 윤리적 요건, IRB 승인 과정, 동의서 작성법입니다.',
        details: {
          purpose: 'IRB 승인의 중요성',
          purposeDesc: '의학 연구에서 IRB 승인은 법적 의무사항입니다. 데이터 수집 전 반드시 승인을 받아야 하며, 소급 승인은 불가능합니다.',
          elements: 'IRB 준비 사항',
          elementList: [
            '연구계획서: 연구 목적, 방법, 대상, 위험/이익 평가 포함',
            '동의서(Informed Consent): 연구 목적, 절차, 위험, 자발적 참여 명시',
            '개인정보 보호: 비식별화, 암호화, 접근 제한 방안',
            '취약 대상자: 미성년자, 임산부, 수감자 등 추가 보호 절차',
            '연구윤리 교육: CITI, GCP(Good Clinical Practice) 이수 필수'
          ],
          tips: '논문에서의 윤리 기재',
          tipList: [
            'Methods에 IRB 승인 번호와 기관명 반드시 기재',
            '"본 연구는 ○○대학교 IRB의 승인을 받았다 (IRB-2024-001)"',
            '임상시험: ClinicalTrials.gov 또는 CRIS 등록번호 기재',
            '동물실험: IACUC 승인 번호 + ARRIVE 가이드라인 준수'
          ]
        }
      },
      {
        title: '주요 학술지 & 투고',
        content: '의학·보건 분야 주요 학술지와 투고 과정, 피어리뷰 대응법입니다.',
        details: {
          purpose: '학술지 선택',
          purposeDesc: 'SCI/SCIE 등재 의학 학술지를 목표로 하되, Impact Factor와 연구 분야의 적합성(Scope)을 함께 고려합니다.',
          elements: '주요 학술지',
          elementList: [
            '종합 의학: NEJM, The Lancet, JAMA, BMJ',
            '간호학: Journal of Advanced Nursing, Nursing Research',
            '약학: Journal of Pharmaceutical Sciences, European Journal of Pharmaceutics',
            '공중보건: BMC Public Health, Journal of Epidemiology',
            '국내: 대한의학회지, 한국간호학회지, 약학회지, 보건행정학회지'
          ],
          tips: '투고 전략',
          tipList: [
            'Cover Letter: 연구의 참신성과 해당 학술지와의 적합성 강조',
            'Vancouver 인용 형식: 번호 순서 방식 — 학술지 약어명 사용',
            'Structured Abstract: 목적/방법/결과/결론 소제목 포함 필수',
            'Reviewer 대응: 실험 추가, 통계 보완 등 건설적 수용 자세'
          ]
        }
      },
      {
        title: '통계 & 연구 도구',
        content: '의학 연구에서 자주 사용하는 통계 기법과 연구 도구를 안내합니다.',
        details: {
          purpose: '의학 통계의 특징',
          purposeDesc: '의학 연구는 생존 분석, 로지스틱 회귀, 진단 검사 정확도 등 고유한 통계 기법이 많습니다. 임상적 유의성과 통계적 유의성을 구분하는 것이 중요합니다.',
          elements: '핵심 통계 기법',
          elementList: [
            '생존 분석: Kaplan-Meier 곡선, Cox 비례위험 모형',
            '진단 검사: 민감도, 특이도, ROC 곡선, AUC',
            '로지스틱 회귀: 이분형 결과변수 (예: 생존/사망) 예측',
            '효과 크기: 오즈비(OR), 상대위험도(RR), 위험차이(RD)',
            'NNT (Number Needed to Treat): 임상적 의미 해석'
          ],
          tips: '유용한 도구',
          tipList: [
            '통계: SPSS, R, SAS, Stata — 의학 연구용 패키지 풍부',
            '메타분석: RevMan (Cochrane), Comprehensive Meta-Analysis',
            '표본 크기: G*Power — 검정력 분석으로 적정 표본 수 산출',
            '문헌 검색: PubMed, EMBASE, Cochrane Library, CINAHL'
          ]
        }
      }
    ],
    arts: [
      {
        title: '논문 구조 & 특성',
        content: '예술·체육 논문의 독특한 구조와 실기-이론 결합 방법입니다.',
        details: {
          purpose: '예술·체육 논문의 특징',
          purposeDesc: '예술·체육 분야는 실기(practice)와 이론(theory)의 결합이 핵심입니다. 작품 분석, 공연 비평, 운동역학 실험 등 다양한 접근이 가능합니다.',
          elements: '논문 유형',
          elementList: [
            '실기 기반 연구: 창작 작품/공연을 중심으로 학술적 논의 전개',
            '이론적 연구: 미학, 예술사, 체육철학 등 텍스트 기반 분석',
            '실험 연구: 운동역학, 스포츠심리, 운동생리 — 자연과학적 방법 적용',
            '조사 연구: 예술교육 효과, 스포츠 참여 동기 등 설문 기반',
            '사례 연구: 특정 예술가/운동선수/작품의 심층 분석'
          ],
          tips: '구조적 특징',
          tipList: [
            '실기 연구: 서론 → 작품 설명 → 방법론 → 작품 분석 → 논의',
            '시각 자료(사진, 악보, 동작 분석 이미지) 적극 활용',
            '저작권 주의: 작품 이미지 사용 시 허가 또는 Fair Use 확인',
            '분석 틀: 체계적 분석 프레임워크를 선행연구에서 도출'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '예술·체육 분야에서 활용하는 다양한 연구방법론을 안내합니다.',
        details: {
          purpose: '분야별 주요 방법론',
          purposeDesc: '예술·체육 분야는 질적 연구(작품 분석, 인터뷰)와 양적 연구(운동생리, 스포츠심리)가 모두 활발하게 사용됩니다.',
          elements: '방법론 분류',
          elementList: [
            '작품/공연 분석: 기호학적 분석, 형식 분석, 맥락적 분석',
            '실험 연구: 운동역학(EMG, 모션캡처), 운동생리(VO2max, 심박)',
            '설문 연구: 예술 감상 경험, 스포츠 참여 동기, 운동 효능감',
            '질적 연구: 예술가 심층 인터뷰, 현상학적 접근, 자문화기술지',
            '혼합 연구: 실기 수행 + 설문/인터뷰로 다각적 이해'
          ],
          tips: '방법론 선택 가이드',
          tipList: [
            '작품 중심 → 질적 분석 (기호학, 해석학, 비평이론)',
            '신체 능력 → 양적 실험 (운동역학, 생리학적 측정)',
            '참여자 경험 → 질적 인터뷰 또는 혼합 연구',
            '교육 효과 → 실험설계 (사전-사후 비교) 또는 설문'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '예술·체육 분야의 대표 학술지와 인용 형식 가이드입니다.',
        details: {
          purpose: '주요 학술지',
          purposeDesc: '예술·체육 분야는 세부 전공에 따라 학술지가 세분화되어 있습니다. KCI 등재지를 기본으로, SSCI/A&HCI 국제 학술지도 도전해보세요.',
          elements: '분야별 학술지',
          elementList: [
            '미술: 한국미술교육학회지, Studies in Art Education, Art Education',
            '음악: 한국음악학회지, 음악교육연구, Journal of Music Education',
            '무용: 한국무용학회지, Dance Research Journal',
            '체육: 체육과학연구, 한국스포츠심리학회지, Journal of Sports Sciences',
            '국제: A&HCI (Arts & Humanities Citation Index), SSCI 등재지'
          ],
          tips: '인용 형식',
          tipList: [
            'APA 7th: 체육·스포츠과학 분야 표준',
            'Chicago Notes: 미술사, 음악학 등 인문학적 접근 시',
            'Turabian: 예술 분야 학위논문 전용 형식',
            '시각 자료 인용: Figure 번호, 출처, 허가 여부 명시'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '예술·체육 논문의 완성도를 높이는 실전 전략과 주의사항입니다.',
        details: {
          purpose: '작성 전략',
          purposeDesc: '예술·체육 논문은 실기적 감각과 학술적 논리를 균형 있게 결합하는 것이 핵심입니다. 비전공자도 이해할 수 있는 명확한 서술이 중요합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '실기 경험의 학술화: 개인적 감상이 아닌 체계적 분석 틀 적용',
            '시각 자료 활용: 사진, 악보, 동작 분석 — 텍스트 보완',
            '용어 정의: 분야 특수 용어(예: 포디즘, 아라베스크)의 명확한 정의',
            '선행연구 맵핑: 유사 연구와의 차별점을 시각적으로 정리',
            '윤리적 고려: 피험자 초상권, 작품 저작권, 촬영 동의'
          ],
          tips: '자주 하는 실수',
          tipList: [
            '주관적 감상에 머무는 분석 → 객관적 분석 틀 적용 필요',
            '시각 자료 없이 텍스트만으로 설명 → 이미지/도표 필수',
            '실기 과정 기술 부족 → 방법론 장에서 절차를 상세히 기록',
            '소수 사례의 일반화 → 연구의 한계를 솔직히 인정'
          ]
        }
      }
    ]
  },
  en: {
    humanities: [
      {
        title: 'Paper Structure',
        content: 'Structural characteristics and writing methods for each chapter of humanities/social science papers.',
        details: {
          purpose: 'Humanities Paper Structure',
          purposeDesc: 'Humanities papers center on theoretical argumentation and literature analysis. While following IMRAD, the literature review is extensive and qualitative research may have flexible structures.',
          elements: 'Structural Features',
          elementList: [
            'Introduction: Detailed social and academic context of the research problem',
            'Literature Review: Critical review of theories, concepts, prior research (30-40% of paper)',
            'Methodology: Qualitative (interview, document analysis) or quantitative (survey) detailed description',
            'Findings/Analysis: Thematic analysis for qualitative, statistical results for quantitative',
            'Discussion: Rich discussion of theoretical and practical implications'
          ],
          tips: 'Key Writing Points',
          tipList: [
            'Establish a clear theoretical framework and apply it consistently',
            'Conduct critical synthesis, not mere listing, in literature review',
            'Clearly state researcher positionality (for qualitative research)',
            'Citation: APA 7th (social sciences), Chicago (humanities) primarily used'
          ]
        }
      },
      {
        title: 'Research Methodology',
        content: 'Key qualitative, quantitative, and mixed methods used in humanities and social sciences.',
        details: {
          purpose: 'Major Research Methods',
          purposeDesc: 'Humanities select diverse methodologies based on research topics. Qualitative research is traditionally strong, but mixed methods and big data analysis are growing.',
          elements: 'Methods by Discipline',
          elementList: [
            'Education: Experimental, case study, action research, surveys',
            'Sociology: Ethnography, discourse analysis, network analysis',
            'Psychology: Experimental design, scale development, longitudinal, neuroimaging',
            'Business: Case studies, surveys, econometrics, game theory',
            'Literature/Philosophy: Text analysis, hermeneutics, comparative literary methods'
          ],
          tips: 'Methodology Selection Tips',
          tipList: [
            'Match methodology to research question type (exploratory vs. confirmatory)',
            'Qualitative rigor: Triangulation, member checking, audit trail',
            'Quantitative: Sample size calculation, instrument reliability and validity',
            'Mixed methods: Clearly describe rationale and timing of integration'
          ]
        }
      },
      {
        title: 'Journals & Citation',
        content: 'Major journals and citation format guide for humanities and social sciences.',
        details: {
          purpose: 'Major Journals',
          purposeDesc: 'Focus on KCI-indexed domestic journals and aim for SSCI/A&HCI-indexed international journals.',
          elements: 'Journals by Discipline',
          elementList: [
            'Education: Korean Journal of Education, Teacher Education Research',
            'Sociology: Korean Sociology, Economy and Society',
            'Psychology: Korean Journal of Psychology, Counseling Studies',
            'Business: Korean Management Review, Korean Marketing Journal',
            'International: Target SSCI (Social Sciences Citation Index) journals'
          ],
          tips: 'Citation Format Guide',
          tipList: [
            'APA 7th: Social sciences standard — author-date style (Kim, 2023)',
            'Chicago Notes: Humanities — footnote style',
            'MLA 9th: Literature & linguistics — author-page style (Kim 45)',
            'Reference management with Zotero/Mendeley is essential'
          ]
        }
      },
      {
        title: 'Practical Writing Tips',
        content: 'Concrete strategies to improve the quality of humanities/social science papers.',
        details: {
          purpose: 'Practical Strategies',
          purposeDesc: 'Logical persuasiveness and writing quality are crucial in humanities papers. The ability to organically connect theory and data is a core competency.',
          elements: 'Step-by-Step Strategy',
          elementList: [
            'Research question: Focus on "why" and "how" questions',
            'Literature search: Use RISS, Google Scholar, JSTOR, ProQuest',
            'Conceptual framework: Visualize relationships between key variables/concepts',
            'Data collection: IRB approval → pilot study → main study',
            'Revision: Logic flow → content depth → style → format'
          ],
          tips: 'Common Mistakes',
          tipList: [
            'Research question too broad — narrow the scope',
            'Literature review is just listing — needs critical synthesis and gap identification',
            'Confusing results and discussion — results are objective, discussion is interpretation',
            'Self-plagiarism — cite source when publishing thesis chapters as journal articles'
          ]
        }
      }
    ],
    naturalScience: [
      {
        title: 'Paper Structure (IMRAD)',
        content: 'The standard IMRAD format for natural science papers and writing guidelines for each section.',
        details: {
          purpose: 'What Is IMRAD',
          purposeDesc: 'Introduction-Methods-Results-And-Discussion — the international standard structure for natural science papers. Strict format adherence and experimental reproducibility are paramount.',
          elements: 'Section-by-Section Guide',
          elementList: [
            'Introduction: Background, research gap, hypothesis/purpose — logical progression',
            'Methods: Materials, equipment, conditions, procedures — detailed for reproducibility',
            'Results: Objective data presentation using graphs/tables, no interpretation',
            'Discussion: Result interpretation, comparison with prior research, limitations',
            'Abstract: Under 250 words, structured (Objective-Methods-Results-Conclusion) recommended'
          ],
          tips: 'Natural Science Writing Style',
          tipList: [
            'Concise and precise writing — avoid unnecessary adjectives',
            'Passive voice is standard: "The sample was heated to 100°C"',
            'SI units required (kg, m, s, mol, etc.)',
            'Graphs: Always include axis labels, units, and error bars'
          ]
        }
      },
      {
        title: 'Experimental Design & Data',
        content: 'Experimental design principles, data collection/analysis methods, and statistical verification.',
        details: {
          purpose: 'Experimental Design Principles',
          purposeDesc: 'The core of natural science research is reproducible experimental design. Clearly define independent, dependent, and control variables while minimizing bias.',
          elements: 'Design Checklist',
          elementList: [
            'Control Group: Always include comparison conditions',
            'Replication: Minimum 3 repetitions for reproducibility (n ≥ 3)',
            'Blinding: Apply single/double blind when possible',
            'Variable Control: Standardize temperature, humidity, reagent concentrations',
            'Data Recording: Detailed daily records in lab notebooks'
          ],
          tips: 'Data Analysis & Visualization',
          tipList: [
            'Statistics: t-test, ANOVA, regression — p < .05 significance level',
            'Error reporting: Specify SD (standard deviation) or SEM (standard error)',
            'Graphing tools: GraphPad Prism, Origin, R (ggplot2), Python (matplotlib)',
            'Raw data preservation: Keep for minimum 5 years (check institutional policy)'
          ]
        }
      },
      {
        title: 'Journals & Submission',
        content: 'Major natural science journals and the paper submission process.',
        details: {
          purpose: 'Journal Selection',
          purposeDesc: 'Target SCI/SCIE-indexed journals while considering both Impact Factor and topic relevance. Open Access journals are also growing rapidly.',
          elements: 'Major Journals by Field',
          elementList: [
            'General: Nature, Science, PNAS, PLoS ONE',
            'Physics: Physical Review Letters, Journal of Applied Physics',
            'Chemistry: JACS, Angewandte Chemie',
            'Biology: Cell, Molecular Biology of the Cell, FASEB Journal',
            'Domestic: Korean physics, chemistry, and biology society journals'
          ],
          tips: 'Submission & Peer Review',
          tipList: [
            'Cover Letter: Emphasize novelty and fit with journal scope',
            'Peer Review Response: Point-by-point replies to reviewer comments',
            'Citation: Vancouver (numbered) or check journal Author Guidelines',
            'Preprints: Pre-publish on arXiv/bioRxiv for priority and feedback'
          ]
        }
      },
      {
        title: 'Ethics & Tools',
        content: 'Research ethics considerations and useful tools for natural science research.',
        details: {
          purpose: 'Research Ethics',
          purposeDesc: 'Data integrity, image manipulation prohibition, and authorship criteria are key ethical concerns in natural science research.',
          elements: 'Ethics Checklist',
          elementList: [
            'Data: Preserve raw data, no fabrication/falsification/selective reporting',
            'Images: Gel photos, microscopy — only brightness/contrast adjustments allowed',
            'Animal Research: IACUC approval required before experiments',
            'Authorship: Include only substantial contributors, use CRediT Taxonomy',
            'COI: Transparently disclose funding sources and patent interests'
          ],
          tips: 'Useful Research Tools',
          tipList: [
            'Reference Management: Zotero, Mendeley, EndNote',
            'Data Analysis: R, Python, MATLAB, GraphPad Prism',
            'Writing: LaTeX (physics/math), Overleaf (online collaboration)',
            'Figures: BioRender (biology diagrams), ChemDraw (chemical structures)'
          ]
        }
      }
    ],
    engineering: [
      {
        title: 'Paper Structure',
        content: 'Structural characteristics and how to present technical contributions in engineering papers.',
        details: {
          purpose: 'Core of Engineering Papers',
          purposeDesc: 'Engineering papers propose new methods/systems/algorithms that overcome existing limitations and prove performance superiority through experiments.',
          elements: 'Paper Structure',
          elementList: [
            'Introduction: Existing limitations (motivation) → proposed method overview',
            'Related Work: Classify and compare existing research to highlight differentiation',
            'Proposed Method: Detailed architecture and operating principles',
            'Experiments: Datasets, environment, baselines, evaluation metrics',
            'Results & Discussion: Quantitative comparison tables + qualitative analysis + limitations'
          ],
          tips: 'Presenting Technical Contributions',
          tipList: [
            'Clearly list contributions: "The contributions of this paper are: (1)..."',
            'Show quantitative improvements over existing methods',
            'Always include architecture diagrams',
            'Ablation studies to verify each component\'s individual contribution'
          ]
        }
      },
      {
        title: 'Experiments & Evaluation',
        content: 'Experimental design, benchmarks, and performance evaluation methods for engineering papers.',
        details: {
          purpose: 'Experimental Design',
          purposeDesc: 'Engineering experiments must objectively demonstrate the proposed method\'s superiority. Fair benchmarking under identical conditions is essential.',
          elements: 'Experiment Components',
          elementList: [
            'Datasets: Use public benchmarks (MNIST, ImageNet, COCO, etc.)',
            'Baselines: Fair comparison with latest SOTA methods',
            'Metrics: Accuracy, Precision, Recall, F1, mAP, BLEU, etc.',
            'Environment: GPU/CPU specs, framework versions, hyperparameters',
            'Ablation Study: Verify individual contribution of each module'
          ],
          tips: 'Results Presentation',
          tipList: [
            'Comparison tables: Best results in Bold, second best Underlined',
            'Include learning curves, convergence graphs for visual analysis',
            'Report runtime, model size for practical applicability',
            'Code/model sharing: Provide GitHub links for reproducibility'
          ]
        }
      },
      {
        title: 'Journals & Conferences',
        content: 'Major engineering journals, international conferences, and submission strategies.',
        details: {
          purpose: 'Journals vs Conferences',
          purposeDesc: 'In engineering, especially CS, conference papers are as important as journal papers. Latest research is often presented at conferences first.',
          elements: 'Major Venues by Field',
          elementList: [
            'CS/AI: NeurIPS, ICML, CVPR, ACL (conf.) / IEEE TPAMI, JMLR (journal)',
            'EE: IEEE Transactions series, ISSCC, DAC',
            'ME: ASME Journals, Journal of Mechanical Design',
            'Civil/Architecture: Automation in Construction, ASCE Journals',
            'Domestic: Korean information science, electronics, mechanical engineering societies'
          ],
          tips: 'Submission Strategy',
          tipList: [
            'Deadline management: Create annual calendar of major conference deadlines',
            'Rebuttal writing: Address reviewer concerns head-on with additional experiments',
            'IEEE/ACM format: 2-column, numbered references, mandatory templates',
            'arXiv preprints: Priority establishment + community feedback before submission'
          ]
        }
      },
      {
        title: 'Tools & Tips',
        content: 'Essential development tools, collaboration tools, and paper writing tips for engineering research.',
        details: {
          purpose: 'Essential Research Tools',
          purposeDesc: 'Engineering research utilizes various tools for implementation, experiment management, and paper writing. Efficient tool usage significantly boosts research productivity.',
          elements: 'Tools by Category',
          elementList: [
            'Code Management: Git/GitHub, GitLab — version control and collaboration',
            'Experiment Tracking: Weights & Biases, MLflow — tracking and comparison',
            'Paper Writing: LaTeX + Overleaf, IEEE/ACM templates',
            'Figures: draw.io, Lucidchart (architectures), matplotlib/TikZ (graphs)',
            'References: Zotero + BibTeX integration, Semantic Scholar API'
          ],
          tips: 'Practical Writing Tips',
          tipList: [
            'Figures should be self-contained — understandable without reading text',
            'Respect existing work in Related Work while clearly highlighting differences',
            'Page limits: Strictly follow conference rules (typically 8-10 pages + references)',
            'English proofreading: Grammarly + native review or professional editing service'
          ]
        }
      }
    ],
    medical: [
      {
        title: 'Study Design & Guidelines',
        content: 'Medical research design types and CONSORT/STROBE reporting guidelines.',
        details: {
          purpose: 'Types of Medical Research',
          purposeDesc: 'Medical research is hierarchized by Level of Evidence. RCTs rank highest, followed by observational studies and case reports.',
          elements: 'Study Design Types',
          elementList: [
            'RCT (Randomized Controlled Trial): Highest evidence level, follow CONSORT',
            'Cohort Study: Long-term follow-up observation, STROBE guideline',
            'Case-Control Study: Outcome → cause tracing, follow STROBE',
            'Cross-sectional Study: Prevalence and associated factors at a specific time point',
            'Systematic Review/Meta-analysis: Synthesizing existing research, PRISMA guideline'
          ],
          tips: 'Reporting Guidelines',
          tipList: [
            'CONSORT: RCT reporting — Flow Diagram is mandatory',
            'STROBE: Observational studies — 22 checklist items to follow',
            'PRISMA: Systematic reviews — detailed search strategy and inclusion/exclusion criteria',
            'EQUATOR Network (equator-network.org): Search all reporting guidelines'
          ]
        }
      },
      {
        title: 'IRB & Research Ethics',
        content: 'Ethical requirements for human subject research, IRB approval process, and consent forms.',
        details: {
          purpose: 'Importance of IRB Approval',
          purposeDesc: 'IRB approval is a legal requirement in medical research. Approval must be obtained before data collection — retroactive approval is not possible.',
          elements: 'IRB Preparation',
          elementList: [
            'Research Protocol: Include purpose, methods, subjects, risk/benefit assessment',
            'Informed Consent: State research purpose, procedures, risks, voluntary participation',
            'Privacy Protection: De-identification, encryption, access restriction measures',
            'Vulnerable Populations: Additional protections for minors, pregnant women, prisoners',
            'Ethics Training: CITI, GCP (Good Clinical Practice) completion required'
          ],
          tips: 'Ethics Documentation in Papers',
          tipList: [
            'State IRB approval number and institution in Methods section',
            '"This study was approved by ○○ University IRB (IRB-2024-001)"',
            'Clinical trials: Include ClinicalTrials.gov or CRIS registration number',
            'Animal studies: IACUC approval number + ARRIVE guideline compliance'
          ]
        }
      },
      {
        title: 'Journals & Submission',
        content: 'Major medical/health journals, submission process, and peer review response.',
        details: {
          purpose: 'Journal Selection',
          purposeDesc: 'Target SCI/SCIE-indexed medical journals while considering both Impact Factor and scope relevance.',
          elements: 'Major Journals',
          elementList: [
            'General Medicine: NEJM, The Lancet, JAMA, BMJ',
            'Nursing: Journal of Advanced Nursing, Nursing Research',
            'Pharmacy: Journal of Pharmaceutical Sciences, European J. Pharmaceutics',
            'Public Health: BMC Public Health, Journal of Epidemiology',
            'Domestic: Korean medical, nursing, pharmacy, and health administration journals'
          ],
          tips: 'Submission Strategy',
          tipList: [
            'Cover Letter: Emphasize novelty and journal fit',
            'Vancouver citation: Numbered style — use journal abbreviations',
            'Structured Abstract: Must include Purpose/Methods/Results/Conclusion subheadings',
            'Reviewer response: Constructive acceptance with additional experiments/statistics'
          ]
        }
      },
      {
        title: 'Statistics & Tools',
        content: 'Common statistical methods and research tools used in medical research.',
        details: {
          purpose: 'Medical Statistics',
          purposeDesc: 'Medical research uses unique statistical methods like survival analysis, logistic regression, and diagnostic test accuracy. Distinguishing clinical from statistical significance is crucial.',
          elements: 'Key Statistical Methods',
          elementList: [
            'Survival Analysis: Kaplan-Meier curves, Cox proportional hazards model',
            'Diagnostic Tests: Sensitivity, specificity, ROC curves, AUC',
            'Logistic Regression: Binary outcome prediction (e.g., survival/death)',
            'Effect Sizes: Odds Ratio (OR), Relative Risk (RR), Risk Difference (RD)',
            'NNT (Number Needed to Treat): Clinical significance interpretation'
          ],
          tips: 'Useful Tools',
          tipList: [
            'Statistics: SPSS, R, SAS, Stata — rich medical research packages',
            'Meta-analysis: RevMan (Cochrane), Comprehensive Meta-Analysis',
            'Sample Size: G*Power — power analysis for appropriate sample calculation',
            'Literature Search: PubMed, EMBASE, Cochrane Library, CINAHL'
          ]
        }
      }
    ],
    arts: [
      {
        title: 'Paper Structure',
        content: 'Unique structure of arts/sports papers and practice-theory integration methods.',
        details: {
          purpose: 'Arts & Sports Paper Characteristics',
          purposeDesc: 'The core of arts/sports papers is combining practice and theory. Various approaches are possible including artwork analysis, performance criticism, and biomechanics experiments.',
          elements: 'Paper Types',
          elementList: [
            'Practice-based Research: Academic discussion centered on creative works/performances',
            'Theoretical Research: Text-based analysis of aesthetics, art history, sports philosophy',
            'Experimental Research: Biomechanics, sport psychology — scientific methods applied',
            'Survey Research: Arts education effects, sports participation motivation',
            'Case Study: In-depth analysis of specific artists/athletes/works'
          ],
          tips: 'Structural Features',
          tipList: [
            'Practice research: Intro → Work description → Methodology → Analysis → Discussion',
            'Actively use visual materials (photos, scores, motion analysis images)',
            'Copyright caution: Confirm permission or Fair Use for artwork images',
            'Analysis framework: Derive systematic frameworks from prior research'
          ]
        }
      },
      {
        title: 'Research Methodology',
        content: 'Various research methodologies used in arts and sports fields.',
        details: {
          purpose: 'Major Methodologies by Field',
          purposeDesc: 'Both qualitative research (artwork analysis, interviews) and quantitative research (exercise physiology, sport psychology) are actively used in arts/sports fields.',
          elements: 'Methodology Classification',
          elementList: [
            'Artwork/Performance Analysis: Semiotic, formal, contextual analysis',
            'Experimental: Biomechanics (EMG, motion capture), physiology (VO2max, heart rate)',
            'Survey: Art appreciation experience, sports participation motivation, exercise efficacy',
            'Qualitative: Artist interviews, phenomenological approach, autoethnography',
            'Mixed Methods: Practice performance + surveys/interviews for multifaceted understanding'
          ],
          tips: 'Methodology Selection Guide',
          tipList: [
            'Work-centered → Qualitative analysis (semiotics, hermeneutics, critical theory)',
            'Physical ability → Quantitative experiments (biomechanics, physiological measurement)',
            'Participant experience → Qualitative interviews or mixed methods',
            'Educational effects → Experimental design (pre-post comparison) or surveys'
          ]
        }
      },
      {
        title: 'Journals & Citation',
        content: 'Major arts/sports journals and citation format guide.',
        details: {
          purpose: 'Major Journals',
          purposeDesc: 'Arts/sports journals are subdivided by specialization. Start with KCI-indexed journals and aim for SSCI/A&HCI international journals.',
          elements: 'Journals by Discipline',
          elementList: [
            'Visual Arts: Studies in Art Education, Art Education, International Journal of Art & Design Education',
            'Music: Journal of Music Education, Music Education Research',
            'Dance: Dance Research Journal, Research in Dance Education',
            'Sports: Journal of Sports Sciences, International Journal of Sport Psychology',
            'International: A&HCI and SSCI-indexed journals'
          ],
          tips: 'Citation Formats',
          tipList: [
            'APA 7th: Standard for sports/exercise science fields',
            'Chicago Notes: For art history, musicology — humanities approach',
            'Turabian: Thesis-specific format for arts fields',
            'Visual material citation: Include figure numbers, sources, permission status'
          ]
        }
      },
      {
        title: 'Practical Writing Tips',
        content: 'Practical strategies and precautions for improving arts/sports paper quality.',
        details: {
          purpose: 'Writing Strategies',
          purposeDesc: 'The key to arts/sports papers is balancing practical sensibility with academic logic. Clear description that non-specialists can understand is important.',
          elements: 'Key Writing Strategies',
          elementList: [
            'Academicizing Practice: Apply systematic analytical frameworks, not personal impressions',
            'Visual Materials: Photos, scores, motion analysis — complement text',
            'Term Definitions: Clearly define field-specific terms (e.g., Fordism, Arabesque)',
            'Research Mapping: Visually organize differentiation from similar studies',
            'Ethical Considerations: Subject portrait rights, work copyright, filming consent'
          ],
          tips: 'Common Mistakes',
          tipList: [
            'Analysis stays at subjective impressions → Apply objective analytical frameworks',
            'Text-only explanations without visuals → Images/diagrams are essential',
            'Insufficient practice process description → Detail procedures in methodology',
            'Generalizing from few cases → Honestly acknowledge research limitations'
          ]
        }
      }
    ]
  }
};

const FieldDetail = () => {
  const { fieldId } = useParams();
  const { t, lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  useAOS();

  const fieldKey = fieldKeyMap[fieldId];

  if (!fieldKey) {
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

  const sections = (detailData[lang] || detailData.en)[fieldKey];
  const active = sections[activeIdx];
  const color = fieldColors[fieldKey];

  return (
    <>
      <SEOHead
        title={t(`site.fields.${fieldKey}.fullName`)}
        description={sections[0].details.purposeDesc}
      />

      <section className="page-header">
        <div className="container">
          <h2>{t(`site.fields.${fieldKey}.fullName`)}</h2>
          <p>{t(`site.fields.${fieldKey}.desc`)}</p>
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
