// ============================================================
// fieldData_science_eng_ko.js
// 자연과학 및 공학 분야별 한국어 상세 데이터
// ============================================================

// ──────────────────────────────────────────────
//  1. 수학 (math)
// ──────────────────────────────────────────────
const math = [
  {
    title: '논문 구조 특성',
    content: '수학 논문은 정의-정리-증명(Definition-Theorem-Proof)의 엄밀한 논리 체계를 따르며, 순수수학과 응용수학에 따라 서술 방식이 달라진다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '수학 논문은 서론에서 연구 동기와 기존 결과를 간결하게 정리한 뒤, 본문에서 새로운 정의를 도입하고 정리(Theorem)를 제시한 후 이를 엄밀히 증명하는 구조를 따른다. 순수수학은 공리적 접근과 추상화를 중시하고, 응용수학은 모델링 결과의 수치적 검증을 함께 제시한다. 보조 정리(Lemma)와 따름정리(Corollary)를 체계적으로 배치하여 논증의 흐름을 명확히 하는 것이 핵심이다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 연구 배경, 기존 결과 요약, 주요 결과 미리 기술',
        '예비 지식(Preliminaries) - 사용할 정의, 기호, 기본 정리 정리',
        '주요 결과(Main Results) - 정리 및 증명을 논리적 순서로 배치',
        '응용 및 예시(Applications / Examples) - 주요 결과의 적용 사례 제시',
        '결론 및 미해결 문제(Concluding Remarks) - 후속 연구 방향과 열린 문제 기술',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '정리 번호를 일관되게 부여하고 상호 참조를 정확히 달 것',
        '증명 종료 표시(QED 기호 등)를 반드시 사용하여 증명 범위를 명확히 할 것',
        '기호 표기를 논문 첫머리에 통일하여 독자의 혼동을 방지할 것',
        '반례(Counterexample)를 활용하여 조건의 필요성을 입증할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '수학 연구는 공리적 방법, 구성적 증명, 수치 시뮬레이션 등 분야별로 다양한 방법론을 사용하며, LaTeX 조판이 사실상 필수이다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '순수수학에서는 직접 증명, 귀류법, 수학적 귀납법, 대각선 논법 등 논리적 증명 기법이 핵심이다. 응용수학에서는 편미분방정식의 수치 해법, 최적화 알고리즘의 수렴성 분석, 확률론적 모델링 등을 통해 이론을 검증한다. LaTeX과 AMS 패키지를 이용한 조판은 수식의 정확한 표현을 위해 필수적이며, Mathematica, MATLAB, SageMath 등을 보조 도구로 활용한다.',
      elements: '주요 연구 방법',
      elementList: [
        '공리적 방법(Axiomatic Method) - 공리로부터 정리를 연역적으로 도출',
        '구성적 증명(Constructive Proof) - 대상의 존재를 명시적으로 구성하여 증명',
        '수치 해석(Numerical Analysis) - 근사 알고리즘의 오차 한계와 수렴 속도 분석',
        '범주론적 접근(Categorical Approach) - 수학적 구조 간의 관계를 함자로 기술',
        '컴퓨터 대수 시스템(CAS) 활용 - 기호 연산을 통한 가설 검증 및 탐색',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        'LaTeX의 amsthm 환경을 활용하여 정의, 정리, 증명을 체계적으로 구분할 것',
        '수치 실험 결과를 제시할 때는 수렴 차수(order of convergence)를 명시할 것',
        '증명에서 사용하는 기법의 출처(참고문헌)를 정확히 밝힐 것',
        '알고리즘을 제시할 경우 의사코드(pseudocode)와 복잡도 분석을 포함할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '수학 분야는 Annals of Mathematics, Journal of the AMS 등 최상위 저널과 대한수학회 발행 저널이 핵심 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        '수학 논문의 게재지 선택은 연구의 순수/응용 여부, 세부 분야(대수, 해석, 기하, 조합론 등)에 따라 결정된다. 최상위 종합 저널로는 Annals of Mathematics, Journal of the American Mathematical Society(JAMS), Inventiones Mathematicae가 있으며, 국내에서는 대한수학회지(Journal of the Korean Mathematical Society)와 대한수학회보(Bulletin of the Korean Mathematical Society)가 대표적이다. 응용수학은 SIAM 계열 저널이 주요 대상이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'Annals of Mathematics - 수학 분야 최고 권위 저널',
        'Journal of the American Mathematical Society (JAMS) - AMS 발행 종합 저널',
        '대한수학회지 (J. Korean Math. Soc.) - 국내 대표 수학 저널, KCI 등재',
        'SIAM Journal on Numerical Analysis - 수치해석 분야 최상위 저널',
        'MathSciNet / zbMATH - 수학 전문 인용 데이터베이스',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'MathSciNet의 MR 번호를 참고문헌에 포함하면 검증이 용이하다',
        'arXiv preprint를 먼저 공개하여 우선권을 확보하는 것이 일반적이다',
        'AMS 분류 체계(MSC)를 논문에 반드시 명시할 것',
        '수학 저널은 심사 기간이 1~2년으로 긴 편이므로 일정을 미리 계획할 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '수학 논문 작성 시 논리적 엄밀성, 기호 통일, 가독성을 균형 있게 갖추는 것이 중요하다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '수학 논문은 간결하면서도 빈틈없는 논증이 생명이다. 서론에서 주요 결과를 비전문가도 이해할 수 있는 수준으로 요약하고, 본문에서는 각 단계의 논리적 연결을 명확히 해야 한다. 기호의 남용을 피하고 핵심 아이디어를 자연어로 설명하는 단락을 중간중간 배치하면 논문의 가독성이 크게 향상된다.',
      elements: '작성 체크리스트',
      elementList: [
        '서론에서 주요 정리를 비공식적으로 먼저 설명한 후 정식 기술할 것',
        '증명 전에 증명 전략(proof sketch)을 간략히 제시할 것',
        '복잡한 증명은 여러 보조 정리로 분할하여 가독성을 높일 것',
        '기호 목록(Notation)을 별도 섹션이나 표로 정리할 것',
        '최종 원고를 동료에게 검토(peer reading)받아 논리 오류를 점검할 것',
      ],
      tips: '실전 팁',
      tipList: [
        'TeXStudio나 Overleaf를 활용하여 공동 작업과 버전 관리를 효율화할 것',
        '그림(diagram)을 TikZ로 직접 그려 벡터 품질을 확보할 것',
        '참고문헌은 BibTeX로 관리하고 MathSciNet에서 bib 항목을 다운로드하여 사용할 것',
        '투고 전 저널의 LaTeX 템플릿을 반드시 확인하고 형식에 맞출 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  2. 물리학 (physics)
// ──────────────────────────────────────────────
const physics = [
  {
    title: '논문 구조 특성',
    content: '물리학 논문은 IMRAD(서론-방법-결과-논의) 형식을 기본으로 하며, 이론물리와 실험물리에 따라 강조점이 달라진다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '이론물리 논문은 해밀토니안이나 라그랑지안으로부터 출발하여 수학적 유도 과정을 상세히 기술하고, 예측 결과를 제시한다. 실험물리 논문은 실험 장치 구성, 측정 방법, 데이터 분석을 체계적으로 서술한다. 두 유형 모두 SI 단위를 일관되게 사용하고, 불확도(uncertainty) 표기를 엄격히 준수해야 한다. 그래프와 도표는 물리량의 관계를 명확히 보여주어야 한다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 물리적 동기, 기존 이론/실험 결과 요약',
        '이론적 배경(Theoretical Framework) - 모델 설정과 수학적 유도',
        '실험 방법(Experimental Setup) - 장치 구성, 측정 기법, 교정 절차',
        '결과(Results) - 데이터 제시, 오차 막대(error bar) 포함 그래프',
        '논의(Discussion) - 이론 예측과 실험 결과 비교, 물리적 해석',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '물리량은 반드시 SI 단위로 표기하고 단위 환산이 필요한 경우 명시할 것',
        '실험 데이터에는 계통 오차(systematic error)와 통계 오차(statistical error)를 분리하여 표기할 것',
        '이론 유도에서 핵심 가정(assumption)을 명확히 밝히고 그 정당성을 논의할 것',
        '그림 캡션에 축의 물리량, 단위, 범례를 빠짐없이 기재할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '물리학 연구는 해석적 계산, 수치 시뮬레이션, 정밀 측정 실험 등 다양한 방법론을 조합하여 자연 현상을 탐구한다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '이론물리에서는 섭동론(perturbation theory), 변분법, 재규격화(renormalization), 몬테카를로 시뮬레이션 등을 사용한다. 실험물리에서는 입자 검출기, 레이저 분광, 극저온 장치 등 첨단 장비를 활용하며, 데이터 분석에는 ROOT, Python(NumPy/SciPy), Origin 등을 사용한다. 오차 분석(error analysis)은 물리 실험 논문의 핵심 요소로, 불확도 전파(error propagation)를 정확히 수행해야 한다.',
      elements: '주요 연구 방법',
      elementList: [
        '해석적 방법 - 라그랑지안 역학, 양자장론 계산, 통계역학적 분석',
        '수치 시뮬레이션 - 분자동역학(MD), 몬테카를로(MC), 밀도범함수이론(DFT)',
        '정밀 측정 실험 - 분광학, 산란 실험, 간섭계 측정',
        '데이터 분석 - 최대우도 추정, 베이즈 통계, 카이제곱 적합도 검정',
        '오차 분석 - 가우스 오차 전파, 부트스트랩 방법, 계통 오차 평가',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '시뮬레이션 코드의 검증(validation)과 확인(verification)을 구분하여 기술할 것',
        '측정 장비의 사양(resolution, sensitivity)을 명시하고 교정(calibration) 방법을 설명할 것',
        '유효숫자(significant figures)를 오차 범위에 맞게 적절히 사용할 것',
        '재현 가능하도록 실험 조건(온도, 압력, 진공도 등)을 상세히 기록할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '물리학은 Physical Review Letters, Nature Physics 등 영향력 높은 저널과 한국물리학회 발행 학술지가 주요 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        '물리학 논문의 게재지는 세부 분야(입자물리, 응집물질, 광학, 천체물리 등)와 논문 유형(Letter vs Full Paper)에 따라 선택한다. Physical Review Letters(PRL)는 분야를 막론한 최상위 속보 저널이며, Physical Review 시리즈(A~E)는 분야별 전문 저널이다. 국내에서는 한국물리학회에서 발행하는 New Physics: Sae Mulli(새물리)와 Journal of the Korean Physical Society(JKPS)가 대표적이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'Physical Review Letters (PRL) - 물리학 전 분야 최고 권위 속보 저널',
        'Nature Physics - 분야 횡단적 고영향력 저널',
        'Journal of the Korean Physical Society (JKPS) - 국내 대표 물리학 저널, SCIE 등재',
        'New Physics: Sae Mulli (새물리) - 한국물리학회 한글 저널, KCI 등재',
        'arXiv (hep-th, cond-mat 등) - 물리학 프리프린트 서버, 최신 연구 공유 플랫폼',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'arXiv에 먼저 등록하여 연구 우선권을 확보하고 동료 피드백을 받을 것',
        'PRL은 4페이지 제한이 있으므로 Supplemental Material을 적극 활용할 것',
        'JKPS는 국제 저널이므로 영어로 작성하며 한국 연구자 네트워크를 활용할 것',
        '인용 시 리뷰 논문(Reviews of Modern Physics 등)을 적절히 포함하여 배경을 보완할 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '물리학 논문은 물리적 직관과 수학적 엄밀성을 균형 있게 갖추고, 데이터의 정직한 제시가 핵심이다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '물리학 논문에서는 복잡한 수식 유도를 본문에 모두 담기보다 핵심 결과만 본문에 제시하고 상세 유도는 부록에 싣는 것이 효과적이다. 그래프는 독자가 본문을 읽지 않아도 이해할 수 있도록 자기 완결적(self-contained)으로 작성해야 한다. 이론 예측과 실험 데이터의 일치/불일치를 정량적으로 논의하는 것이 논문의 설득력을 높인다.',
      elements: '작성 체크리스트',
      elementList: [
        '초록에 핵심 수치 결과(정량적 값)를 반드시 포함할 것',
        '그래프에 이론 곡선과 실험 데이터를 함께 표시하여 비교할 것',
        '차원 분석(dimensional analysis)으로 수식의 일관성을 사전 점검할 것',
        '핵심 물리적 메시지를 한 문장으로 요약할 수 있어야 한다',
        '참고문헌은 시간순이 아닌 관련성 순으로 배치하는 것이 일반적이다',
      ],
      tips: '실전 팁',
      tipList: [
        'REVTeX 템플릿을 사용하여 APS 저널 형식에 맞출 것',
        '그림은 최소 300 dpi 이상의 해상도로 제작하며 벡터 형식(EPS, PDF)을 권장한다',
        'Supplemental Material에는 상세 유도, 추가 데이터, 동영상 등을 첨부할 것',
        '투고 전 공동 저자 전원의 기여도(author contribution)를 명시하고 동의를 받을 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  3. 화학 (chemistry)
// ──────────────────────────────────────────────
const chemistry = [
  {
    title: '논문 구조 특성',
    content: '화학 논문은 합성-특성분석-응용의 흐름을 따르며, Supporting Information(SI)이 본문만큼 중요한 역할을 한다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '화학 논문은 새로운 물질의 합성 경로를 제시하고, 다양한 분석 기기(NMR, XRD, MS, IR 등)를 통한 구조 확인 데이터를 체계적으로 배열한다. 유기화학은 반응 메커니즘 규명, 무기화학은 배위 구조 분석, 물리화학은 속도론·열역학 데이터 해석이 핵심이다. Supporting Information에는 상세 실험 절차, 원시 스펙트럼 데이터, 결정학 데이터(CIF 파일) 등을 포함한다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 연구 동기, 기존 합성법의 한계, 목표 물질의 중요성',
        '실험(Experimental / Methods) - 합성 절차, 사용 시약, 분석 기기 조건',
        '결과 및 논의(Results and Discussion) - 특성분석 데이터 해석, 구조-활성 관계',
        'Supporting Information - 상세 절차, 스펙트럼, 추가 실험 데이터',
        '결론(Conclusions) - 핵심 발견 요약 및 후속 연구 방향',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '합성 절차는 재현 가능하도록 시약 양, 반응 시간, 온도를 정확히 기술할 것',
        'NMR 데이터는 화학적 이동(chemical shift), 결합 상수(coupling constant), 적분비를 모두 기재할 것',
        'ORTEP 다이어그램이나 분자 구조 그림을 포함하여 3차원 구조를 시각적으로 제시할 것',
        'SI 파일의 페이지 번호와 그림/표 번호를 본문과 일관되게 연결할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '화학 연구는 합성, 특성분석, 계산화학을 유기적으로 결합하여 물질의 구조와 성질을 규명한다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '합성 화학에서는 선택적 반응(chemo-, regio-, stereo-selectivity)의 달성이 핵심이며, 크로마토그래피(HPLC, GC)를 통한 정제와 순도 확인이 필수이다. 분석 화학에서는 정량 분석의 정밀도(precision)와 정확도(accuracy), 검출 한계(LOD)를 명시해야 한다. 계산화학(DFT, ab initio)은 실험 결과의 이론적 뒷받침에 점점 중요해지고 있다.',
      elements: '주요 연구 방법',
      elementList: [
        '유기합성 - 전합성(total synthesis), 촉매 반응, 플로우 케미스트리',
        '기기분석 - NMR, Mass Spectrometry, X-ray Crystallography, IR/Raman',
        '열분석 - TGA, DSC를 통한 열적 안정성 및 상전이 분석',
        '계산화학 - DFT(B3LYP, M06-2X 등) 기반 에너지·구조 최적화',
        '전기화학 - 순환전압전류법(CV), 임피던스 분광법(EIS)',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '모든 시약의 공급처(vendor), 순도(purity grade)를 명시할 것',
        '기기 분석 조건(주파수, 용매, 온도 등)을 상세히 기록하여 재현성을 보장할 것',
        'DFT 계산 시 사용한 범함수(functional), 기저함수(basis set), 프로그램(Gaussian, ORCA 등)을 명시할 것',
        '수율(yield)은 분리수율(isolated yield)로 보고하고 산출 근거를 밝힐 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '화학 분야는 JACS, Angewandte Chemie 등 최상위 저널과 대한화학회 발행 학술지가 주요 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        '화학 분야의 최상위 종합 저널로는 Journal of the American Chemical Society(JACS), Angewandte Chemie International Edition, Nature Chemistry가 있다. 세부 분야별로는 Organic Letters(유기), Inorganic Chemistry(무기), Journal of Physical Chemistry(물리화학) 등이 있다. 국내에서는 대한화학회가 발행하는 Bulletin of the Korean Chemical Society(BKCS)와 Journal of the Korean Chemical Society(대한화학회지)가 대표적이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'Journal of the American Chemical Society (JACS) - 화학 분야 최고 권위 종합 저널',
        'Angewandte Chemie Int. Ed. - 독일화학회 발행 고영향력 저널',
        'Bulletin of the Korean Chemical Society (BKCS) - 대한화학회 영문 저널, SCIE 등재',
        '대한화학회지 (Journal of the Korean Chemical Society) - 국내 한글 화학 저널, KCI 등재',
        'SciFinder / Reaxys - 화학 문헌 및 반응 검색 데이터베이스',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'JACS와 Angew. Chem.은 Communication 형식(4페이지)이 주력이므로 간결한 서술이 중요하다',
        'CSD(Cambridge Structural Database)에 결정구조 데이터를 등록하고 CCDC 번호를 논문에 명시할 것',
        'Supporting Information의 분량이 본문보다 많은 경우가 흔하므로 체계적으로 구성할 것',
        'ChemDraw 등 전문 소프트웨어로 화학구조식을 정확하고 일관되게 작성할 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '화학 논문 작성 시 재현성 확보, 데이터의 완전한 제시, 구조식의 정확한 표현이 가장 중요하다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '화학 논문에서는 독자가 실험을 재현할 수 있도록 합성 절차를 프로토콜 수준으로 상세히 기술해야 한다. Table of Contents(TOC) 그래픽은 논문의 핵심 내용을 한눈에 전달하는 시각적 요약으로, 게재 여부에 영향을 미칠 수 있다. 반응 스킴(Scheme)은 논리적 순서에 따라 번호를 매기고, 반응 조건(시약, 용매, 온도, 시간)을 화살표 위아래에 명시한다.',
      elements: '작성 체크리스트',
      elementList: [
        '모든 새로운 화합물에 대해 완전한 특성분석 데이터(NMR, MS, EA/HRMS)를 제공할 것',
        '반응 스킴과 분자 구조식은 ACS 스타일 가이드에 맞게 작성할 것',
        'TOC 그래픽을 매력적이고 정보가 풍부하게 제작할 것',
        '약어(Abbreviations)를 처음 사용 시 풀어쓰고 이후 일관되게 사용할 것',
        'Graphical Abstract가 요구되는 저널에서는 핵심 반응이나 구조를 시각화할 것',
      ],
      tips: '실전 팁',
      tipList: [
        'ACS Paragon Plus에 투고 시 Supporting Information의 파일 형식과 크기 제한을 확인할 것',
        '공동 저자 간 역할 분담(CRediT taxonomy)을 미리 정하고 논문에 명시할 것',
        'Open Access 옵션의 비용과 기관 지원 여부를 사전에 확인할 것',
        'Cover Art 공모에 적극 참여하여 논문의 노출도를 높일 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  4. 생물학 (biology)
// ──────────────────────────────────────────────
const biology = [
  {
    title: '논문 구조 특성',
    content: '생물학 논문은 가설 중심의 IMRAD 구조를 따르며, 분자생물학에서 생태학까지 스케일에 따라 구조적 차이가 있다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '분자생물학·세포생물학 논문은 특정 유전자·단백질의 기능을 밝히는 데 초점을 맞추며, 웨스턴 블롯, PCR, 형광현미경 이미지 등 실험 데이터를 체계적으로 제시한다. 생태학 논문은 현장 조사 설계(sampling design), 통계 분석, 종 다양성 지표를 중점적으로 기술한다. 최근에는 생물정보학(bioinformatics)을 활용한 대규모 오믹스(omics) 분석이 필수적이다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 생물학적 질문, 기존 연구의 간극(gap), 가설 제시',
        '재료 및 방법(Materials and Methods) - 실험 생물, 시약, 프로토콜, 통계 방법',
        '결과(Results) - 그림·표를 중심으로 한 객관적 데이터 제시',
        '논의(Discussion) - 가설 검증 여부, 기존 연구와의 비교, 생물학적 의의',
        '데이터 가용성(Data Availability) - 시퀀싱 데이터 등의 공개 저장소 정보',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '이미지 윤리를 철저히 준수하여 웨스턴 블롯 등의 이미지를 부적절하게 조작하지 말 것',
        '생물 연구 윤리(IRB/IACUC 승인)를 Methods 섹션에 반드시 명시할 것',
        '통계 분석에 사용한 소프트웨어(R, GraphPad Prism 등)와 버전을 기재할 것',
        '생물학적 반복(biological replicate)과 기술적 반복(technical replicate)을 명확히 구분할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '생물학 연구는 분자·세포 수준의 실험, 생물정보학 분석, 현장 생태 조사를 결합하여 생명 현상을 탐구한다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '분자생물학에서는 유전자 편집(CRISPR-Cas9), 차세대 시퀀싱(NGS), 단백질 구조 분석(Cryo-EM, AlphaFold)이 핵심 도구이다. 세포생물학은 유세포분석(flow cytometry), 공초점현미경, 세포 배양이 기본이다. 생태학은 표본 설계, 표지-재포획법, 메타군집 분석 등을 사용하며, R의 vegan, phyloseq 패키지를 활용한 통계 분석이 표준이다.',
      elements: '주요 연구 방법',
      elementList: [
        '분자생물학 - CRISPR-Cas9, qRT-PCR, Western Blot, ChIP-seq',
        '생물정보학 - RNA-seq 분석, 메타게놈 분석, 계통수 구축(MEGA, RAxML)',
        '세포생물학 - 유세포분석, 공초점 레이저 현미경, MTT 세포 생존율 분석',
        '생태학 - 방형구(quadrat) 조사, 종 풍부도/다양도 지수, NMDS 서열법',
        '구조생물학 - X-선 결정학, Cryo-EM, NMR 분광법',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '항체 정보(공급사, 클론 번호, 희석 배율)를 상세히 기재하여 재현성을 확보할 것',
        'NGS 데이터는 NCBI SRA/GEO에 등록하고 접근 번호(accession number)를 명시할 것',
        '통계 검정의 선택 근거(정규성 검정, 등분산 검정 결과)를 밝힐 것',
        '동물 실험은 ARRIVE 가이드라인, 인체 유래 시료는 헬싱키 선언을 준수할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '생물학 분야는 Cell, Nature, Science 등 최상위 저널과 한국생물과학협회 발행 학술지가 주요 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        '생물학 최상위 종합 저널로는 Cell, Nature, Science가 있으며, 세부 분야별로 Molecular Cell, Nature Ecology & Evolution, The EMBO Journal 등이 있다. 국내에서는 한국분자·세포생물학회의 Molecules and Cells(MaC), 한국생태학회의 Journal of Ecology and Environment, 한국미생물학회지 등이 대표적이다. PubMed/MEDLINE은 생물학 문헌 검색의 표준 데이터베이스이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'Cell - 생명과학 분야 최고 권위 저널',
        'Nature / Science - 분야 횡단 최상위 종합 저널',
        'Molecules and Cells (MaC) - 한국분자·세포생물학회 영문 저널, SCIE 등재',
        'Journal of Ecology and Environment - 한국생태학회 영문 저널',
        'PubMed / MEDLINE - 생명과학·의학 문헌 검색 데이터베이스',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'bioRxiv에 프리프린트를 먼저 게시하여 피드백을 받고 우선권을 확보할 것',
        '데이터 공유 정책(Data Sharing Policy)에 따라 원시 데이터를 공개 저장소에 등록할 것',
        'Cell/Nature 계열은 Letter+Extended Data 형식이므로 본문 분량 제한에 유의할 것',
        '참고문헌 관리에 Zotero, Mendeley 등을 활용하여 효율성을 높일 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '생물학 논문 작성 시 이미지 품질, 통계적 엄밀성, 데이터 투명성이 핵심이다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '생물학 논문에서 그림(Figure)은 논문의 핵심 메시지를 전달하는 가장 중요한 요소이다. 특히 현미경 이미지, 겔 이미지의 조작은 연구 부정행위로 간주되므로 밝기·대비 조절 시 전체 이미지에 동일하게 적용해야 한다. 통계적 유의성을 표시할 때는 p-value뿐 아니라 효과 크기(effect size)와 신뢰구간(confidence interval)을 함께 보고하는 것이 권장된다.',
      elements: '작성 체크리스트',
      elementList: [
        '모든 그림에 스케일 바(scale bar)를 포함하고 해상도를 300 dpi 이상으로 유지할 것',
        '통계 결과는 검정 방법, 표본 수(n), p-value를 명확히 기재할 것',
        '유전자·단백질 명명법(nomenclature)을 해당 종에 맞게 통일할 것',
        '약어 목록을 제공하고 초록에는 약어 사용을 최소화할 것',
        '이해충돌(conflict of interest) 유무를 반드시 선언할 것',
      ],
      tips: '실전 팁',
      tipList: [
        'BioRender, Adobe Illustrator를 활용하여 전문적인 모식도(schematic)를 제작할 것',
        '그림 배치(Figure Layout)는 저널의 칼럼 폭(single/double column)에 맞게 디자인할 것',
        'Methods 섹션의 프로토콜은 protocols.io에 등록하여 접근성을 높일 것',
        'Reviewer에게 Cover Letter에서 논문의 참신성(novelty)과 중요성을 명확히 어필할 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  5. 지구/환경과학 (earth-science)
// ──────────────────────────────────────────────
const earthScience = [
  {
    title: '논문 구조 특성',
    content: '지구/환경과학 논문은 현장 조사와 실내 분석을 결합하며, 시공간적 스케일에 대한 명확한 기술이 필수적이다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '지구과학 논문은 지질학, 대기과학, 해양학, 환경과학 등 세부 분야에 따라 다양한 구조를 가지지만, 공통적으로 연구 지역(Study Area)에 대한 상세한 기술이 포함된다. 지도, 위성 영상, 지질 단면도 등 공간 데이터의 시각화가 핵심이며, 시계열 분석을 통한 변화 추이 파악이 중요하다. GIS(지리정보시스템)와 원격탐사(Remote Sensing) 데이터의 활용이 필수적이다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 연구 배경, 지구과학적 문제 제기, 선행 연구 요약',
        '연구 지역(Study Area) - 지리적 위치, 지질·기후·환경 특성',
        '자료 및 방법(Data and Methods) - 현장 조사, 시료 채취, 분석 기법, GIS/원격탐사',
        '결과(Results) - 지도, 단면도, 시계열 그래프 등을 통한 데이터 제시',
        '논의(Discussion) - 지구과학적 해석, 다른 지역/시기와의 비교, 환경적 함의',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '연구 지역 지도에 축척, 방위, 좌표계(UTM, WGS84 등)를 반드시 명시할 것',
        '시료 채취 지점(sampling point)을 GPS 좌표와 함께 표/지도로 제시할 것',
        '연대 측정 결과는 방법(방사성탄소, U-Pb 등), 실험실, 보정 정보를 명시할 것',
        '환경 영향 연구는 규제 기준치(환경부 기준 등)와 비교하여 결과를 해석할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '지구/환경과학 연구는 현장 조사, 시료 분석, 원격탐사, 수치 모델링을 유기적으로 결합한다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '현장 조사(field survey)는 지구과학의 근간이며, 시료 채취(sampling)부터 전처리(preprocessing), 기기 분석까지의 전 과정을 체계적으로 기록해야 한다. GIS를 활용한 공간 분석, 위성 영상(Landsat, Sentinel)을 이용한 원격탐사 분석, WRF·CESM 등의 기후 모델링이 주요 방법론이다. 환경과학에서는 오염물질의 거동(fate and transport) 모델링과 위해성 평가(risk assessment)가 핵심이다.',
      elements: '주요 연구 방법',
      elementList: [
        '현장 조사 - 지질 답사, 시추(boring), 수질/대기질 측정, 토양 시료 채취',
        'GIS/원격탐사 - ArcGIS/QGIS 공간 분석, ENVI 영상 처리, NDVI 식생 분석',
        '지화학 분석 - ICP-MS, XRF를 이용한 원소 분석, 안정동위원소 분석',
        '수치 모델링 - WRF(기상), MODFLOW(지하수), SWAT(수문), CESM(기후)',
        '연대 측정 - 방사성탄소(¹⁴C), U-Pb, OSL, 고지자기 연대 측정',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '원격탐사 데이터의 전처리(대기보정, 기하보정) 절차를 명시할 것',
        '수치 모델의 입력 자료, 경계 조건, 매개변수 설정을 상세히 기술할 것',
        '분석 기기의 검출 한계(detection limit)와 정밀도를 보고할 것',
        '현장 조사 시기(계절)가 결과에 미치는 영향을 논의할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '지구/환경과학 분야는 Nature Geoscience, 한국지구과학회지 등이 주요 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        '지구과학 최상위 저널로는 Nature Geoscience, Earth and Planetary Science Letters, Geology가 있으며, 환경과학은 Environmental Science & Technology(ES&T), Water Research가 대표적이다. 국내에서는 한국지구과학회지(Journal of the Korean Earth Science Society), 지질학회지(Journal of the Geological Society of Korea), 한국환경과학회지 등이 주요 저널이며, 한국기상학회의 Asia-Pacific Journal of Atmospheric Sciences(APJAS)도 SCIE 등재 저널이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'Nature Geoscience - 지구과학 분야 최고 권위 저널',
        'Environmental Science & Technology (ES&T) - 환경과학/공학 최상위 저널',
        '한국지구과학회지 (J. Korean Earth Sci. Soc.) - 국내 대표 지구과학 저널, KCI 등재',
        '지질학회지 (J. Geological Soc. Korea) - 한국지질학회 발행, KCI 등재',
        'Asia-Pacific J. Atmospheric Sciences (APJAS) - 한국기상학회 영문 저널, SCIE 등재',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        '공간 데이터를 보충자료(Supplementary)로 제공하거나 공개 저장소(PANGAEA 등)에 등록할 것',
        '기후 데이터를 활용할 경우 데이터 출처(KMA, NOAA 등)와 기간을 명시할 것',
        '지질학적 시간 용어는 국제층서위원회(ICS) 연대표를 따를 것',
        '환경 논문에서는 정책적 시사점(policy implications)을 결론에 포함하면 영향력이 높아진다',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '지구/환경과학 논문은 공간 데이터의 정확한 시각화와 다학제적 접근의 균형이 핵심이다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '지구과학 논문에서 지도는 가장 중요한 시각 자료이므로, 전문 GIS 소프트웨어를 활용하여 고품질로 제작해야 한다. 연구 결과의 시공간적 스케일을 명확히 하고, 지역적 결과를 전지구적 맥락에서 해석하는 능력이 요구된다. 다학제적 성격이 강한 분야이므로 타 분야 독자도 이해할 수 있는 서술이 중요하다.',
      elements: '작성 체크리스트',
      elementList: [
        '지도에 축척 막대(scale bar), 방위 표시, 좌표 격자를 포함할 것',
        '시계열 데이터는 장기 추세(trend)와 주기성(periodicity)을 함께 분석할 것',
        '현장 사진을 포함하여 연구 지역의 실제 상황을 전달할 것',
        '불확실성(uncertainty)을 정량적으로 표현하고 결론에 반영할 것',
        '사용한 GIS 레이어, 위성 영상의 촬영 일자와 해상도를 명시할 것',
      ],
      tips: '실전 팁',
      tipList: [
        'QGIS/ArcGIS Pro로 제작한 지도를 고해상도 벡터 파일(SVG, PDF)로 내보낼 것',
        'GMT(Generic Mapping Tools)를 활용하면 출판 품질의 지도를 자동화 생산할 수 있다',
        'Google Earth Engine을 활용하면 대규모 원격탐사 데이터를 클라우드에서 효율적으로 처리할 수 있다',
        '데이터 보관 시 메타데이터(좌표계, 단위, 측정일 등)를 체계적으로 기록할 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  6. 컴퓨터공학 (computer)
// ──────────────────────────────────────────────
const computer = [
  {
    title: '논문 구조 특성',
    content: '컴퓨터공학 논문은 학회(conference) 중심의 출판 문화를 가지며, 알고리즘 제안-실험-분석의 구조를 따른다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '컴퓨터공학은 저널보다 학회(conference) 논문이 최상위 연구 성과로 인정받는 독특한 출판 문화를 가지고 있다. NeurIPS, ICML, CVPR, ACL 등 최상위 학회는 엄격한 동료심사를 거치며, 수락률이 20~25% 수준이다. 논문 구조는 문제 정의, 관련 연구, 제안 방법(Proposed Method), 실험(Experiments), 결론으로 구성되며, 특히 기존 방법 대비 성능 향상을 정량적으로 입증해야 한다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 문제 정의, 기존 접근법의 한계, 기여(contribution) 요약',
        '관련 연구(Related Work) - 기존 연구와의 차별점을 명확히 기술',
        '제안 방법(Method / Approach) - 알고리즘, 모델 아키텍처, 수학적 정식화',
        '실험(Experiments) - 데이터셋, 평가 지표(metric), 비교 실험, 절제 연구(Ablation Study)',
        '결론(Conclusion) - 핵심 기여 요약, 한계점, 향후 연구 방향',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        'Contribution을 서론 마지막에 번호 매긴 목록으로 명시할 것',
        'Ablation Study를 통해 각 구성 요소의 기여도를 분리하여 검증할 것',
        '학회별 페이지 제한(보통 8~10페이지)을 엄수하고 Appendix를 활용할 것',
        '익명 심사(double-blind) 저널/학회에서는 자기 인용 시 익명화에 유의할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '컴퓨터공학 연구는 알고리즘 설계, 대규모 실험, 이론적 분석을 결합하며, 코드 공개가 점점 필수화되고 있다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '알고리즘/머신러닝 분야에서는 수학적 정식화(formulation), 모델 아키텍처 설계, 손실 함수(loss function) 정의가 핵심이다. 실험은 공개 벤치마크 데이터셋(ImageNet, GLUE, COCO 등)에서 기존 최고 성능(SOTA)과 비교하는 방식으로 이루어진다. 코드와 학습된 모델의 공개(GitHub, Hugging Face)는 재현성 확보와 연구 영향력 확대에 필수적이다.',
      elements: '주요 연구 방법',
      elementList: [
        '알고리즘 설계 - 시간/공간 복잡도 분석, 정확성 증명, 근사 비율(approximation ratio)',
        '딥러닝 - CNN, Transformer, GNN 등 아키텍처 설계 및 학습 전략',
        'Ablation Study - 모델 구성 요소를 하나씩 제거하며 기여도 분석',
        '벤치마크 평가 - 공개 데이터셋에서 SOTA 대비 정량적 성능 비교',
        '통계적 유의성 검증 - 다중 실행(multiple runs)의 평균/표준편차 보고',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '하이퍼파라미터(learning rate, batch size 등)와 탐색 방법을 상세히 기술할 것',
        '실험 환경(GPU 종류, 학습 시간, 메모리 사용량)을 명시하여 재현을 돕을 것',
        '코드를 GitHub에 공개하고 논문에 링크를 포함할 것(익명 심사 시 Anonymous GitHub 활용)',
        '공정한 비교를 위해 baseline 모델의 재현 방법을 명시하거나 공식 구현을 사용할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '컴퓨터공학은 학회 논문이 최상위 연구 성과이며, NeurIPS, CVPR, ACL 등이 대표적이다.',
    details: {
      purpose: '학술지/학회 선택 기준',
      purposeDesc:
        '컴퓨터공학에서는 학회(conference) 논문이 저널 논문보다 높은 위상을 가지는 경우가 많다. 인공지능 분야의 NeurIPS, ICML, ICLR, 컴퓨터 비전의 CVPR, ICCV, ECCV, 자연어처리의 ACL, EMNLP, 시스템의 OSDI, SOSP가 최상위 학회이다. 국내에서는 한국정보과학회의 정보과학회논문지, 한국통신학회논문지 등이 있으며, KCC(한국컴퓨터종합학술대회)가 대표 국내 학회이다.',
      elements: '주요 학술지/학회 및 데이터베이스',
      elementList: [
        'NeurIPS / ICML / ICLR - AI/ML 분야 최상위 3대 학회',
        'CVPR / ICCV - 컴퓨터 비전 분야 최상위 학회',
        '정보과학회논문지 - 한국정보과학회 발행, KCI 등재',
        'IEEE Transactions on PAMI - 패턴인식/머신러닝 최상위 저널',
        'Google Scholar / Semantic Scholar / DBLP - CS 분야 주요 검색 플랫폼',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'arXiv에 프리프린트를 게시하되 학회 투고 시 이중 게재(dual submission) 정책을 확인할 것',
        '학회 카메라 레디(camera-ready) 버전에는 코드 링크, 데이터 링크를 반드시 포함할 것',
        'Google Scholar h-index와 인용 수가 연구 영향력의 주요 지표로 활용된다',
        'OpenReview 시스템의 공개 심사 과정에 대비하여 논문 완성도를 높일 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '컴퓨터공학 논문은 명확한 기여 정의, 공정한 실험 비교, 재현 가능한 결과 제시가 핵심이다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '컴퓨터공학 논문에서 가장 중요한 것은 "무엇이 새로운가(novelty)"를 명확히 전달하는 것이다. 서론의 마지막 단락에 contribution을 구체적으로 나열하고, 실험에서 이를 뒷받침하는 결과를 체계적으로 제시해야 한다. 표(table)와 그래프의 가독성이 심사 결과에 큰 영향을 미치므로, 성능 비교 표에서 최고 성능은 볼드체, 차선은 밑줄로 표시하는 관례를 따른다.',
      elements: '작성 체크리스트',
      elementList: [
        '서론에서 contribution을 3~4개 항목으로 명확히 나열할 것',
        '실험 표에서 SOTA 대비 성능 향상(improvement)을 퍼센트로 명시할 것',
        '알고리즘을 Algorithm 환경(pseudocode)으로 깔끔하게 제시할 것',
        '모델 아키텍처를 도식화(architecture diagram)하여 직관적으로 전달할 것',
        'Limitation 섹션을 추가하여 연구의 한계를 솔직히 기술할 것',
      ],
      tips: '실전 팁',
      tipList: [
        'LaTeX의 학회 템플릿(NeurIPS style, CVPR style 등)을 정확히 사용할 것',
        '그림은 draw.io, Inkscape, matplotlib 등으로 벡터 그래픽을 제작할 것',
        '리뷰어 대응(rebuttal) 시 정량적 실험 결과를 추가하여 설득력을 높일 것',
        '논문 작성 전 관련 Survey/Review 논문을 정리하여 연구 맥락을 파악할 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  7. 전자/전기공학 (electrical)
// ──────────────────────────────────────────────
const electrical = [
  {
    title: '논문 구조 특성',
    content: '전자/전기공학 논문은 회로 설계-시뮬레이션-측정의 삼단 구조를 따르며, 프로토타입 제작과 성능 검증이 핵심이다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '전자/전기공학 논문은 새로운 회로, 시스템, 소자의 설계를 제안하고, 시뮬레이션으로 동작을 검증한 뒤, 실제 프로토타입을 제작하여 측정 결과를 제시하는 구조를 따른다. 반도체 소자, RF 회로, 전력 시스템, 통신 시스템 등 세부 분야에 따라 강조점이 달라지지만, 이론적 분석-시뮬레이션-실험의 3단계 검증은 공통적이다. 회로도(schematic)와 레이아웃(layout)의 명확한 제시가 필수적이다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 설계 목표, 기존 구조의 한계, 성능 지표(FoM) 비교',
        '설계(Design / Architecture) - 회로 구조, 동작 원리, 설계 방정식',
        '시뮬레이션(Simulation) - SPICE/HFSS/ADS 시뮬레이션 결과와 분석',
        '제작 및 측정(Fabrication and Measurement) - 칩/보드 사진, 측정 환경, 실측 결과',
        '성능 비교(Performance Comparison) - 기존 연구와의 정량적 비교 표',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '성능 비교표(performance comparison table)에 주요 FoM을 모두 포함하고 공정(technology node)을 명시할 것',
        '시뮬레이션과 실측 결과의 차이를 분석하고 그 원인을 논의할 것',
        '회로도는 충분한 크기로 그려 소자 값과 노드 이름을 명확히 표시할 것',
        '프로토타입 칩/보드의 면적, 전력 소모를 정량적으로 명시할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '전자/전기공학 연구는 해석적 모델링, EDA 도구를 활용한 시뮬레이션, 프로토타입 제작·측정의 과정을 거친다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '전자/전기공학에서는 먼저 수학적 모델링을 통해 회로/시스템의 동작을 이론적으로 분석한 후, EDA(Electronic Design Automation) 도구로 상세 시뮬레이션을 수행한다. 반도체 설계는 Cadence Virtuoso, RF 회로는 Keysight ADS, 전력 시스템은 PSCAD/EMTP, 안테나는 HFSS/CST를 주로 사용한다. 최종적으로 프로토타입을 제작하여 VNA, 오실로스코프, 스펙트럼 분석기 등으로 실측하여 검증한다.',
      elements: '주요 연구 방법',
      elementList: [
        '아날로그/RF 설계 - 트랜지스터 수준 회로 설계, 소신호·대신호 분석',
        '디지털 설계 - RTL 코딩(Verilog/VHDL), 합성(Synthesis), P&R',
        '전자기 시뮬레이션 - HFSS/CST를 이용한 안테나, 전송선로 해석',
        '전력 시스템 해석 - 조류계산(power flow), 안정도 분석, FACTS 설계',
        '측정 및 특성화 - S-parameter 측정, 노이즈 분석, 전력 효율 측정',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '사용한 공정(CMOS 28nm, GaN HEMT 등)과 PDK 버전을 명시할 것',
        '시뮬레이션 설정(mesh density, boundary condition, convergence criteria)을 상세히 기술할 것',
        '측정 장비의 모델명과 교정(calibration) 방법을 명시할 것',
        '기생 성분(parasitic)의 영향을 post-layout 시뮬레이션으로 확인하고 결과를 포함할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '전자/전기공학 분야는 IEEE Transactions 시리즈가 절대적 위상을 가지며, 대한전자공학회 학술지도 중요하다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        'IEEE(Institute of Electrical and Electronics Engineers)가 발행하는 Transactions 시리즈가 전자/전기공학의 표준 게재지이다. 세부 분야별로 IEEE Journal of Solid-State Circuits(JSSC), IEEE Transactions on Microwave Theory and Techniques(T-MTT), IEEE Transactions on Power Electronics 등이 있다. 국내에서는 대한전자공학회논문지(Journal of the Institute of Electronics and Information Engineers)와 전기학회논문지(Transactions of the Korean Institute of Electrical Engineers)가 대표적이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'IEEE Journal of Solid-State Circuits (JSSC) - 반도체 회로 설계 최상위 저널',
        'IEEE Trans. on Microwave Theory and Techniques (T-MTT) - RF/마이크로웨이브 분야 최상위',
        '대한전자공학회논문지 - 국내 대표 전자공학 저널, KCI 등재',
        '전기학회논문지 (Trans. KIEE) - 한국전기학회 발행, KCI 등재',
        'IEEE Xplore - IEEE/IET 논문 데이터베이스',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'IEEE 저널은 저자 수수료(page charge)와 컬러 인쇄 비용이 있으므로 사전에 예산을 확인할 것',
        'ISSCC, VLSI Symposium 등 최상위 학회 발표 후 저널 확장 논문을 투고하는 것이 일반적이다',
        '특허 출원과 논문 발표의 시점을 조율하여 지식재산권을 보호할 것',
        'IEEE 템플릿(IEEEtran.cls)을 정확히 사용하고 투고 전 IEEE Author Center의 체크리스트를 확인할 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '전자/전기공학 논문은 설계의 참신성, 시뮬레이션-실측 일치도, SOTA 대비 성능 우위를 명확히 보여야 한다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '전자/전기공학 논문에서 Performance Comparison Table은 심사자가 가장 주의 깊게 보는 부분이다. Figure of Merit(FoM)을 적절히 선정하고, 기존 연구 대비 우위를 정량적으로 보여야 한다. 칩 사진(die photo)이나 PCB 사진을 포함하여 실제 제작 여부를 증명하고, 측정 환경(test setup) 사진도 함께 제시하면 신뢰도가 높아진다.',
      elements: '작성 체크리스트',
      elementList: [
        'Performance Comparison Table에 최근 5년 이내 주요 논문을 포함할 것',
        '칩 면적(die area)과 전력 소모(power consumption)를 정확히 보고할 것',
        '시뮬레이션 결과와 측정 결과를 같은 그래프에 겹쳐 그려 비교할 것',
        '회로 블록도(block diagram)에서 전체 시스템 구성을 한눈에 파악할 수 있게 할 것',
        '설계 트레이드오프(trade-off)를 논의하여 설계 철학을 전달할 것',
      ],
      tips: '실전 팁',
      tipList: [
        '회로도는 Cadence나 Visio로 깔끔하게 다시 그려 가독성을 높일 것',
        '측정 결과 그래프에 시뮬레이션 곡선을 함께 표시하여 일치도를 직관적으로 보여줄 것',
        'IEEE 논문 형식의 2단(two-column) 레이아웃에서 그림/표 배치를 최적화할 것',
        '특허 가능성이 있는 핵심 기술은 논문 발표 전 출원을 완료할 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  8. 기계공학 (mechanical)
// ──────────────────────────────────────────────
const mechanical = [
  {
    title: '논문 구조 특성',
    content: '기계공학 논문은 설계-해석-실험의 체계적 구조를 따르며, 유한요소법(FEM)이나 전산유체역학(CFD) 결과가 핵심이다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '기계공학 논문은 기계 시스템, 구조물, 열유체 장치 등의 설계를 제안하고, 수치 해석(FEM, CFD)으로 성능을 예측한 뒤, 실험으로 검증하는 구조를 따른다. 재료역학, 열역학, 유체역학, 동역학의 기본 원리를 바탕으로 설계 근거를 제시하고, 시뮬레이션과 실험 결과의 일치도를 정량적으로 평가한다. CAD 모델, 메쉬(mesh) 독립성 검증, 실험 장치 구성도가 필수적이다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 공학적 문제 정의, 기존 설계/연구의 한계',
        '이론적 배경(Theoretical Background) - 지배 방정식(governing equations), 경계 조건',
        '수치 해석(Numerical Analysis) - FEM/CFD 모델링, 메쉬 수렴성 검증, 결과 해석',
        '실험(Experimental Validation) - 실험 장치, 측정 방법, 실험 결과',
        '결과 비교 및 논의(Results and Discussion) - 해석-실험 비교, 설계 변수 영향 분석',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '메쉬 수렴성 연구(mesh convergence study) 결과를 반드시 포함할 것',
        '경계 조건(boundary conditions)과 초기 조건(initial conditions)을 명확히 기술할 것',
        '실험 장치의 사진과 함께 도식화(schematic diagram)를 제공할 것',
        '해석 결과와 실험 결과의 오차율(%)을 정량적으로 제시할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '기계공학 연구는 해석적 모델링, 유한요소/전산유체 시뮬레이션, 프로토타입 실험을 유기적으로 결합한다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '기계공학의 수치 해석에서는 ANSYS(구조/열/유체), ABAQUS(비선형 구조), COMSOL(다물리 연성), OpenFOAM(오픈소스 CFD)이 주요 도구이다. 유한요소법(FEM)은 구조 응력, 열전달, 진동 해석에, 전산유체역학(CFD)은 유동장 해석에 활용된다. 실험에서는 변형률 게이지, 가속도계, PIV(입자 영상 속도계), 적외선 열화상 등으로 물리량을 측정하며, 설계 최적화에는 위상 최적화(topology optimization), DOE(실험계획법)가 활용된다.',
      elements: '주요 연구 방법',
      elementList: [
        '유한요소법(FEM) - ANSYS/ABAQUS를 이용한 정적·동적 구조 해석',
        '전산유체역학(CFD) - Fluent/OpenFOAM을 이용한 난류, 열전달, 다상 유동 해석',
        '실험 측정 - 변형률 게이지, 가속도 센서, PIV, LDA 유속 측정',
        '설계 최적화 - 위상 최적화, 반응표면법(RSM), 유전 알고리즘(GA)',
        '재료 시험 - 인장/압축/피로 시험, DIC(디지털 이미지 상관법)',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '난류 모델(k-ε, k-ω SST, LES 등)의 선택 근거를 명확히 밝힐 것',
        'FEM에서 요소 유형(element type), 적분 차수, 접촉 조건을 명시할 것',
        '실험 불확도 분석(uncertainty analysis)을 ASME 표준에 따라 수행할 것',
        '시뮬레이션 수렴 이력(residual history)을 제시하여 해의 신뢰성을 입증할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '기계공학 분야는 ASME, Elsevier 계열 저널과 대한기계학회 학술지가 주요 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        'ASME(American Society of Mechanical Engineers) 발행 저널이 기계공학의 표준 게재지이다. Journal of Mechanical Design, Journal of Heat Transfer, Journal of Fluids Engineering 등이 세부 분야별 대표 저널이다. Elsevier의 International Journal of Mechanical Sciences, International Journal of Heat and Mass Transfer도 높은 위상을 가진다. 국내에서는 대한기계학회논문집(Transactions of the KSME)이 A(구조/재료), B(유체/열/에너지) 등으로 분류되어 발행된다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'ASME Journal of Mechanical Design - 기계 설계 분야 대표 저널',
        'International Journal of Heat and Mass Transfer - 열전달 분야 최상위 저널',
        '대한기계학회논문집 (Trans. KSME) - 국내 대표 기계공학 저널, KCI 등재',
        'Journal of Fluid Mechanics - 유체역학 분야 최고 권위 저널',
        'Scopus / Web of Science - 공학 논문 검색 및 인용 분석 데이터베이스',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'ASME 저널은 Discussion & Closure 시스템이 있어 게재 후에도 학술적 토론이 이어질 수 있다',
        '대한기계학회 학술대회(KSME Conference) 발표 후 저널 확장 논문으로 투고하는 것이 일반적이다',
        '시뮬레이션 논문은 실험 검증(experimental validation)이 있으면 게재 확률이 높아진다',
        '참고문헌에 교과서적 내용은 최소화하고 최신 연구 논문 위주로 인용할 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '기계공학 논문은 물리적 직관, 수치 해석의 신뢰성, 실험 검증의 삼박자가 핵심이다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '기계공학 논문에서는 수치 해석 결과를 맹신하지 않고 물리적 타당성을 반드시 검토해야 한다. 해석 결과를 등고선도(contour plot), 유선(streamline), 변형 형상(deformed shape) 등으로 시각화하여 물리적 의미를 전달하는 것이 중요하다. 매개변수 연구(parametric study)를 통해 설계 변수의 영향을 체계적으로 분석하면 논문의 가치가 높아진다.',
      elements: '작성 체크리스트',
      elementList: [
        '지배 방정식을 완전한 형태로 제시하고 각 항의 물리적 의미를 설명할 것',
        '메쉬 수렴성 검증(coarse/medium/fine mesh 비교)을 표 또는 그래프로 제시할 것',
        'CAD 모델과 FEM/CFD 모델의 단순화(simplification) 근거를 밝힐 것',
        '실험 결과와 시뮬레이션 결과를 동일 그래프에 겹쳐 비교할 것',
        '응용 가능성(practical application)을 결론에서 구체적으로 논의할 것',
      ],
      tips: '실전 팁',
      tipList: [
        '시뮬레이션 결과의 등고선도는 색상 맵(colormap)을 통일하고 범례(legend)를 명확히 표시할 것',
        'ParaView, Tecplot 등 전문 후처리 소프트웨어로 고품질 시각화를 제작할 것',
        'ASME 형식의 논문 템플릿을 사용하고 그림/표 크기를 저널 규정에 맞출 것',
        '공동 연구자(실험팀-해석팀)의 역할 분담을 명확히 하고 저자 기여도를 표시할 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  9. 건축/토목 (civil)
// ──────────────────────────────────────────────
const civil = [
  {
    title: '논문 구조 특성',
    content: '건축/토목 논문은 구조 해석, 설계 검증, 시공 사례를 체계적으로 기술하며, 현장 적용성이 중요하다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '건축/토목공학 논문은 구조물의 안전성, 내구성, 시공성, 경제성을 검증하는 데 초점을 맞춘다. 구조공학은 하중 분석-구조 해석-설계 검증의 흐름을, 건축계획은 설계 의도-공간 분석-사용자 평가의 흐름을 따른다. BIM(Building Information Modeling)의 활용이 확대되면서 3D 모델 기반의 설계·시공·유지관리 통합 연구가 증가하고 있다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 구조적/건축적 문제 제기, 기존 설계법의 한계',
        '이론 및 설계 기준(Theory and Design Code) - 적용 기준(KDS, ACI, Eurocode)',
        '해석 모델(Analytical/Numerical Model) - FEM 모델링, 하중 조합, 경계 조건',
        '실험 또는 시공 사례(Experiment / Case Study) - 실대 실험, 시공 현장 데이터',
        '결과 비교 및 설계 제안(Results and Design Recommendations) - 기준 대비 안전율 평가',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '적용한 설계 기준(KDS, KBC, ACI 318, Eurocode 2 등)을 명확히 명시할 것',
        '하중 조합(load combination)과 하중 계수(load factor)를 상세히 기술할 것',
        '구조 해석 결과를 모멘트 다이어그램, 전단력 다이어그램 등으로 시각화할 것',
        '시공 사례 연구는 공사 일정, 비용, 품질 관리 데이터를 포함할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '건축/토목 연구는 구조 해석, BIM 기반 설계, 실대 실험, 현장 모니터링을 결합한다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '구조공학에서는 ETABS, SAP2000, MIDAS Gen 등의 구조 해석 프로그램을 활용하여 건물, 교량의 정적·동적 거동을 분석한다. 지반공학은 PLAXIS, GeoStudio를 이용한 지반-구조물 상호작용 해석을, 건축환경은 EnergyPlus, DesignBuilder를 이용한 에너지 시뮬레이션을 수행한다. BIM(Revit, ArchiCAD)은 설계 단계부터 시공, 유지관리까지의 통합 정보 관리를 가능하게 한다.',
      elements: '주요 연구 방법',
      elementList: [
        '구조 해석 - ETABS/SAP2000/MIDAS를 이용한 선형·비선형 해석, 내진 해석',
        'BIM 기반 설계 - Revit/ArchiCAD를 이용한 3D 모델링, 간섭 검토(clash detection)',
        '실대 실험 - 보·기둥 부재 실험, 접합부 실험, 진동대(shaking table) 실험',
        '지반 해석 - PLAXIS를 이용한 기초, 옹벽, 터널 해석',
        '현장 모니터링 - 구조물 건전성 모니터링(SHM), IoT 센서 기반 데이터 수집',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '콘크리트, 철골 등 재료의 물성치(강도, 탄성계수)와 시험 근거를 명시할 것',
        '비선형 해석 시 재료 모델(소성 모델, 손상 모델)과 수렴 기준을 기술할 것',
        '내진 해석에 사용한 지진파(인공파, 실 계측파)의 특성을 설명할 것',
        '실대 실험에서 계측기 배치(strain gauge, LVDT 위치)를 도면으로 제시할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '건축/토목 분야는 ASCE, 대한건축학회, 한국콘크리트학회 학술지가 주요 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        'ASCE(American Society of Civil Engineers) 발행 저널이 토목공학의 표준 게재지이다. Journal of Structural Engineering, Journal of Geotechnical and Geoenvironmental Engineering 등이 세부 분야별 대표 저널이다. 건축 분야는 Building and Environment, Automation in Construction 등이 높은 위상을 가진다. 국내에서는 대한건축학회논문집, 한국콘크리트학회논문집, 대한토목학회논문집이 대표적이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'ASCE Journal of Structural Engineering - 구조공학 분야 최상위 저널',
        'Automation in Construction - 건설 자동화/BIM 분야 고영향력 저널',
        '대한건축학회논문집 (J. Architectural Inst. of Korea) - 국내 대표 건축학 저널, KCI 등재',
        '한국콘크리트학회논문집 - 콘크리트 구조 전문 저널, KCI 등재',
        '대한토목학회논문집 (J. Korean Soc. Civil Eng.) - 국내 대표 토목 저널, KCI 등재',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        '설계 기준(KDS, ACI, Eurocode)을 참고문헌에 정확한 연도와 판본으로 인용할 것',
        'ASCE 저널은 Discussion 시스템을 통해 게재 후 학술 토론이 활발하다',
        '시공 사례 논문은 현장 사진과 도면을 풍부하게 포함하면 가독성이 높아진다',
        '대한건축학회 학술발표대회를 통해 예비 결과를 발표하고 피드백을 받을 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '건축/토목 논문은 설계 기준 준수, 해석-실험 검증, 현장 적용 가능성을 균형 있게 다루어야 한다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '건축/토목 논문에서는 연구 결과가 실제 설계와 시공에 어떻게 적용될 수 있는지를 구체적으로 제시해야 한다. 설계 기준 대비 안전율 평가, 기존 구조물의 보강 효과 정량화, 새로운 공법의 경제성 분석 등 실무적 가치를 강조하면 논문의 영향력이 높아진다. 도면, 상세도, 시공 사진을 적극 활용하여 연구의 현실성을 전달해야 한다.',
      elements: '작성 체크리스트',
      elementList: [
        '설계 기준의 적용 범위와 논문 연구의 관계를 명확히 기술할 것',
        '해석 모델의 단순화 가정과 그 영향을 논의할 것',
        '실대 실험의 파괴 모드(failure mode)를 사진과 함께 기술할 것',
        '경제성 분석이나 LCC(생애주기비용) 비교를 포함하면 실용적 가치가 높아진다',
        '연구 결과를 설계 지침이나 설계식으로 제안하면 인용 가능성이 높아진다',
      ],
      tips: '실전 팁',
      tipList: [
        'AutoCAD, Revit으로 작성한 도면은 고해상도로 내보내 논문에 포함할 것',
        'BIM 모델의 IFC 파일을 보충자료로 공유하면 연구의 재현성이 높아진다',
        '구조 해석 결과를 색상 등고선(stress/displacement contour)으로 시각화할 것',
        '건설 산업체와의 공동 연구 결과는 산업 적용 사례를 구체적으로 기술할 것',
      ],
    },
  },
];

// ──────────────────────────────────────────────
//  10. 산업공학 (industrial)
// ──────────────────────────────────────────────
const industrial = [
  {
    title: '논문 구조 특성',
    content: '산업공학 논문은 문제 정의-모델링-최적화-검증의 체계적 구조를 따르며, 의사결정 지원이 핵심이다.',
    details: {
      purpose: '구조적 특징과 목적',
      purposeDesc:
        '산업공학 논문은 생산, 물류, 서비스 시스템의 효율을 극대화하기 위한 수리 모델과 최적화 기법을 제안한다. 경영과학(OR), 시뮬레이션, 인간공학/인간요소(Human Factors), 품질공학, 데이터 분석 등 세부 분야에 따라 방법론이 달라지지만, 문제 정의-수학적 모델링-해법 제안-사례 적용의 구조는 공통적이다. 실제 산업 데이터를 활용한 검증이 논문의 가치를 높인다.',
      elements: '핵심 구성 요소',
      elementList: [
        '서론(Introduction) - 산업적 문제 배경, 기존 연구의 한계, 연구 목적',
        '문헌 검토(Literature Review) - 관련 모델 및 해법의 체계적 분류',
        '모델 수립(Model Formulation) - 수리 모델, 목적 함수, 제약 조건',
        '해법 설계(Solution Methodology) - 정확해법/메타휴리스틱/시뮬레이션 설계',
        '수치 실험(Computational Experiments) - 벤치마크 문제, 산업 사례 적용, 민감도 분석',
      ],
      tips: '구조 작성 시 유의 사항',
      tipList: [
        '수리 모델의 의사결정 변수, 매개변수, 집합을 표기법 표(notation table)로 정리할 것',
        '모델의 NP-난해성(NP-hardness) 등 복잡도 분석 결과를 명시할 것',
        '해법의 최적성(optimality) 또는 근사 비율을 이론적·실험적으로 검증할 것',
        '산업 사례 적용 시 데이터 출처와 전처리 과정을 투명하게 기술할 것',
      ],
    },
  },
  {
    title: '연구방법론',
    content: '산업공학 연구는 수리 최적화, 시뮬레이션, 통계적 분석, 인간공학적 실험을 결합한다.',
    details: {
      purpose: '방법론의 핵심 원칙',
      purposeDesc:
        '경영과학(OR) 분야에서는 선형계획법(LP), 정수계획법(IP), 동적계획법(DP), 확률적 모델링이 기본 도구이며, CPLEX, Gurobi, Python(PuLP, Pyomo)로 최적화 문제를 풀어낸다. 시뮬레이션은 Arena, AnyLogic, SimPy를 활용한 이산사건 시뮬레이션(DES)이 대표적이다. 인간공학에서는 인체 측정, 작업 부하 평가(NASA-TLX), 사용성 평가(SUS)가 핵심이며, 품질공학에서는 6시그마, SPC(통계적 공정 관리)가 활용된다.',
      elements: '주요 연구 방법',
      elementList: [
        '수리 최적화 - LP/IP/MIP 모델링, Branch-and-Cut, Column Generation',
        '메타휴리스틱 - 유전 알고리즘(GA), 시뮬레이티드 어닐링(SA), 입자군집 최적화(PSO)',
        '시뮬레이션 - 이산사건 시뮬레이션(DES), 에이전트 기반 모델링(ABM), 몬테카를로',
        '인간공학 실험 - 생체역학적 분석, 눈 추적(eye tracking), 인지 부하 측정',
        '데이터 분석 - 회귀분석, 실험계획법(DOE), 머신러닝 기반 예측 모델',
      ],
      tips: '방법론 기술 시 유의 사항',
      tipList: [
        '최적화 모델의 수식은 표준 표기법(decision variable: x, parameter: uppercase)을 따를 것',
        '메타휴리스틱의 파라미터 설정(population size, mutation rate 등)과 튜닝 방법을 명시할 것',
        '시뮬레이션의 warm-up period, 실행 횟수(replication), 신뢰구간을 보고할 것',
        '인간공학 실험은 IRB 승인, 피험자 수 산정(power analysis) 근거를 제시할 것',
      ],
    },
  },
  {
    title: '주요 학술지 & 인용',
    content: '산업공학 분야는 IISE Transactions, 한국경영과학회지 등이 주요 게재 대상이다.',
    details: {
      purpose: '학술지 선택 기준',
      purposeDesc:
        '산업공학 최상위 종합 저널로는 IISE Transactions(구 IIE Transactions), Manufacturing & Service Operations Management(M&SOM)이 있다. OR 분야는 Operations Research, Management Science, Mathematical Programming이 최상위이며, 인간공학은 Human Factors, Ergonomics가 대표적이다. 국내에서는 한국경영과학회지(Journal of the Korean Operations Research and Management Science Society), 대한산업공학회지(Journal of the Korean Institute of Industrial Engineers)가 대표적이다.',
      elements: '주요 학술지 및 데이터베이스',
      elementList: [
        'IISE Transactions - 산업공학 종합 최상위 저널',
        'Operations Research - 경영과학(OR) 분야 최고 권위 저널',
        '한국경영과학회지 (J. Korean OR/MS Soc.) - 국내 대표 OR/MS 저널, KCI 등재',
        '대한산업공학회지 (J. Korean Inst. Industrial Eng.) - 국내 대표 산업공학 저널, KCI 등재',
        'INFORMS / KIIE - 관련 학회 및 학술 데이터베이스',
      ],
      tips: '인용 및 출판 유의 사항',
      tipList: [
        'OR/MS 저널은 이론적 기여와 실무적 영향을 모두 요구하므로 균형 잡힌 논문을 작성할 것',
        '대한산업공학회 추계/춘계 학술대회에서 예비 결과를 발표하고 피드백을 받을 것',
        '최적화 코드와 테스트 인스턴스를 공개하여 결과의 재현성을 보장할 것',
        '산업체 데이터를 사용할 경우 기밀 유지 범위를 사전에 협의하고 논문에 명시할 것',
      ],
    },
  },
  {
    title: '실전 작성 팁',
    content: '산업공학 논문은 모델의 실용성, 해법의 효율성, 산업 적용 가능성을 균형 있게 제시해야 한다.',
    details: {
      purpose: '효과적 논문 작성의 핵심',
      purposeDesc:
        '산업공학 논문에서는 수리 모델이 실제 산업 문제를 충분히 반영하는지, 제안 해법이 기존 방법 대비 얼마나 효율적인지를 명확히 보여야 한다. 수치 실험에서는 다양한 규모(small/medium/large)의 인스턴스에서 성능을 검증하고, 실제 산업 데이터 적용 결과를 함께 제시하면 설득력이 높아진다. 민감도 분석(sensitivity analysis)을 통해 핵심 매개변수의 영향을 파악하고 관리자에게 통찰을 제공하는 것이 중요하다.',
      elements: '작성 체크리스트',
      elementList: [
        '수리 모델을 표준 형태(목적함수, 제약조건 번호 매기기)로 깔끔하게 제시할 것',
        '수치 실험 결과를 표(CPU 시간, 목적함수 값, 최적성 갭)로 체계적으로 정리할 것',
        '해법의 수렴 속도를 반복 횟수별 그래프로 시각화할 것',
        '민감도 분석 결과를 관리적 시사점(managerial insight)으로 해석할 것',
        '실무자가 활용할 수 있도록 알고리즘의 구현 용이성을 논의할 것',
      ],
      tips: '실전 팁',
      tipList: [
        '최적화 모델과 해법 코드를 GitHub에 공개하여 재현 가능성을 높일 것',
        '벤치마크 인스턴스(OR-Library, TSPLIB 등)에서 기존 최적해와 비교할 것',
        '시뮬레이션 결과의 통계적 유의성을 확인하기 위해 충분한 반복 실행을 수행할 것',
        '논문의 결론에서 산업계를 위한 구체적인 실행 권고사항(actionable recommendations)을 제시할 것',
      ],
    },
  },
];

// ============================================================
//  내보내기 (Export)
// ============================================================

export const naturalScienceKo = {
  math,
  physics,
  chemistry,
  biology,
  'earth-science': earthScience,
};

export const engineeringKo = {
  computer,
  electrical,
  mechanical,
  civil,
  industrial,
};
