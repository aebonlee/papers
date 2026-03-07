// 전공별 자료 상세 데이터
// 24개 세부 전공 × 4개 섹션 × 2개 언어 (ko/en)

import { naturalScienceKo, engineeringKo } from './fieldData_science_eng_ko';
import { medicalKo, artsKo } from './fieldData_medical_arts_ko';
import { humanitiesEn } from './fieldData_humanities_en';
import { naturalScienceEn, engineeringEn } from './fieldData_science_eng_en';
import { medicalEn, artsEn } from './fieldData_medical_arts_en';

export const categories = [
  {
    key: 'humanities',
    icon: '📖',
    color: '#C8102E',
    name: { ko: '인문사회', en: 'Humanities & Social Sciences' },
    fields: [
      { id: 'education', icon: '🎓', name: { ko: '교육학', en: 'Education' }, desc: { ko: '교육 현상과 학습 과정에 대한 체계적 연구', en: 'Systematic study of educational phenomena and learning processes' } },
      { id: 'lifelong-edu', icon: '📚', name: { ko: '평생교육', en: 'Lifelong Education' }, desc: { ko: '성인학습과 평생학습 체제 연구', en: 'Adult learning and lifelong learning system research' } },
      { id: 'social-welfare', icon: '🤝', name: { ko: '사회복지학', en: 'Social Welfare' }, desc: { ko: '사회복지 실천과 정책에 대한 연구', en: 'Research on social welfare practice and policy' } },
      { id: 'psychology', icon: '🧠', name: { ko: '심리학', en: 'Psychology' }, desc: { ko: '인간의 마음과 행동에 대한 과학적 연구', en: 'Scientific study of human mind and behavior' } },
      { id: 'business', icon: '💼', name: { ko: '경영학', en: 'Business Administration' }, desc: { ko: '조직 경영과 전략에 대한 연구', en: 'Research on organizational management and strategy' } },
      { id: 'public-admin', icon: '🏛️', name: { ko: '행정학', en: 'Public Administration' }, desc: { ko: '공공정책과 행정 과정 연구', en: 'Research on public policy and administrative processes' } },
      { id: 'literature', icon: '✍️', name: { ko: '문학/어문학', en: 'Literature & Linguistics' }, desc: { ko: '텍스트 분석과 언어 현상 연구', en: 'Text analysis and linguistic phenomena research' } }
    ]
  },
  {
    key: 'naturalScience',
    icon: '🔬',
    color: '#0046C8',
    name: { ko: '자연과학', en: 'Natural Sciences' },
    fields: [
      { id: 'math', icon: '📐', name: { ko: '수학', en: 'Mathematics' }, desc: { ko: '순수수학과 응용수학 연구', en: 'Pure and applied mathematics research' } },
      { id: 'physics', icon: '⚛️', name: { ko: '물리학', en: 'Physics' }, desc: { ko: '물질과 에너지의 근본 법칙 연구', en: 'Study of fundamental laws of matter and energy' } },
      { id: 'chemistry', icon: '🧪', name: { ko: '화학', en: 'Chemistry' }, desc: { ko: '물질의 구조, 성질, 반응 연구', en: 'Study of structure, properties, and reactions of matter' } },
      { id: 'biology', icon: '🧬', name: { ko: '생물학', en: 'Biology' }, desc: { ko: '생명 현상과 생물체의 구조·기능 연구', en: 'Study of life phenomena and organism structure/function' } },
      { id: 'earth-science', icon: '🌍', name: { ko: '지구/환경과학', en: 'Earth & Environmental Science' }, desc: { ko: '지구 시스템과 환경 변화 연구', en: 'Study of Earth systems and environmental change' } }
    ]
  },
  {
    key: 'engineering',
    icon: '⚙️',
    color: '#C87200',
    name: { ko: '공학', en: 'Engineering' },
    fields: [
      { id: 'computer', icon: '💻', name: { ko: '컴퓨터공학', en: 'Computer Science' }, desc: { ko: 'AI, 소프트웨어, 시스템 연구', en: 'AI, software, and systems research' } },
      { id: 'electrical', icon: '⚡', name: { ko: '전자/전기공학', en: 'Electrical Engineering' }, desc: { ko: '회로, 통신, 반도체 연구', en: 'Circuits, communications, and semiconductor research' } },
      { id: 'mechanical', icon: '🔧', name: { ko: '기계공학', en: 'Mechanical Engineering' }, desc: { ko: '열역학, 유체역학, 로봇공학 연구', en: 'Thermodynamics, fluid mechanics, and robotics research' } },
      { id: 'civil', icon: '🏗️', name: { ko: '건축/토목', en: 'Architecture & Civil Eng.' }, desc: { ko: '구조설계, 건축계획, 인프라 연구', en: 'Structural design, architecture planning, infrastructure research' } },
      { id: 'industrial', icon: '📊', name: { ko: '산업공학', en: 'Industrial Engineering' }, desc: { ko: '최적화, 품질관리, 시스템 설계', en: 'Optimization, quality management, systems design' } }
    ]
  },
  {
    key: 'medical',
    icon: '🏥',
    color: '#00855A',
    name: { ko: '의학/보건', en: 'Medical & Health Sciences' },
    fields: [
      { id: 'medicine', icon: '⚕️', name: { ko: '의학', en: 'Medicine' }, desc: { ko: '임상연구와 기초의학 연구', en: 'Clinical and basic medical research' } },
      { id: 'nursing', icon: '💉', name: { ko: '간호학', en: 'Nursing' }, desc: { ko: '간호실무와 환자케어 연구', en: 'Nursing practice and patient care research' } },
      { id: 'pharmacy', icon: '💊', name: { ko: '약학', en: 'Pharmacy' }, desc: { ko: '약물 개발과 약리학 연구', en: 'Drug development and pharmacology research' } },
      { id: 'public-health', icon: '🏥', name: { ko: '보건학', en: 'Public Health' }, desc: { ko: '역학, 보건정책, 건강증진 연구', en: 'Epidemiology, health policy, and health promotion research' } }
    ]
  },
  {
    key: 'arts',
    icon: '🎨',
    color: '#8B1AC8',
    name: { ko: '예술/체육', en: 'Arts & Sports' },
    fields: [
      { id: 'fine-arts', icon: '🖼️', name: { ko: '미술/디자인', en: 'Fine Arts & Design' }, desc: { ko: '시각예술과 디자인 이론 연구', en: 'Visual arts and design theory research' } },
      { id: 'music', icon: '🎵', name: { ko: '음악학', en: 'Music' }, desc: { ko: '음악이론, 음악교육, 음악학 연구', en: 'Music theory, music education, musicology research' } },
      { id: 'sports', icon: '🏃', name: { ko: '체육/스포츠과학', en: 'Sports Science' }, desc: { ko: '운동생리, 스포츠심리, 운동역학', en: 'Exercise physiology, sport psychology, biomechanics' } }
    ]
  }
];

export const subFieldColors = {
  education: '#C8102E', 'lifelong-edu': '#C8102E', 'social-welfare': '#C8102E',
  psychology: '#C8102E', business: '#C8102E', 'public-admin': '#C8102E', literature: '#C8102E',
  math: '#0046C8', physics: '#0046C8', chemistry: '#0046C8', biology: '#0046C8', 'earth-science': '#0046C8',
  computer: '#C87200', electrical: '#C87200', mechanical: '#C87200', civil: '#C87200', industrial: '#C87200',
  medicine: '#00855A', nursing: '#00855A', pharmacy: '#00855A', 'public-health': '#00855A',
  'fine-arts': '#8B1AC8', music: '#8B1AC8', sports: '#8B1AC8'
};

const humanitiesKo = {
    education: [
      {
        title: '논문 구조 특성',
        content: '교육학 논문은 교육 현상에 대한 이론적 탐구와 실증적 검증을 결합하는 구조를 갖습니다. 서론에서 교육적 문제를 제기하고, 이론적 배경에서 교육철학 및 교육심리학적 토대를 정립한 뒤, 연구방법과 결과를 체계적으로 제시합니다.',
        details: {
          purpose: '논문 구조의 핵심 목적',
          purposeDesc: '교육 현장의 문제를 학문적으로 분석하고, 이론과 실천의 간극을 좁히기 위한 체계적 논증 구조를 제공합니다.',
          elements: '필수 구성 요소',
          elementList: [
            '서론: 교육적 맥락과 문제 제기, 연구의 필요성 및 목적 진술',
            '이론적 배경: 교육과정론, 교수-학습 이론, 교육평가 이론 등 관련 선행연구 고찰',
            '연구방법: 연구 설계(실험, 조사, 질적연구), 연구 대상, 측정 도구, 분석 방법 기술',
            '연구결과: 통계 분석 또는 질적 분석 결과를 표, 그래프, 내러티브로 제시',
            '논의 및 결론: 교육적 시사점 도출, 정책적 함의, 후속 연구 제안'
          ],
          tips: '작성 시 유의사항',
          tipList: [
            '교육 현장과의 연계성을 명확히 하여 실천적 함의를 강조하십시오',
            '연구 대상(학생, 교사, 학부모 등)의 윤리적 보호 절차를 명시하십시오',
            '교육과정 관련 연구는 해당 시기의 국가 교육과정 문서를 정확히 인용하십시오',
            '양적 연구와 질적 연구의 혼합방법(Mixed Methods)을 사용할 경우 통합 근거를 제시하십시오'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '교육학은 양적 연구, 질적 연구, 혼합 연구를 모두 활발히 활용하는 분야입니다. 실험연구, 조사연구, 문화기술지, 사례연구, 내러티브 탐구, 실행연구 등 다양한 방법론이 적용됩니다.',
        details: {
          purpose: '연구방법론의 핵심 목적',
          purposeDesc: '교육 현상의 복잡성을 다각적으로 이해하고, 교육적 개입의 효과를 과학적으로 검증하기 위한 체계적 방법을 제공합니다.',
          elements: '주요 연구방법',
          elementList: [
            '실험연구: 사전-사후 통제집단 설계, 준실험설계를 통한 교육 프로그램 효과 검증',
            '조사연구: 설문지(리커트 척도), 구조화된 면담을 통한 교육 실태 및 인식 조사',
            '질적 연구: 심층면담, 참여관찰, 문서분석을 통한 교육 경험과 의미 탐구',
            '실행연구(Action Research): 교사가 직접 수업을 개선하며 연구하는 현장 밀착형 연구',
            '혼합연구: 양적 데이터와 질적 데이터를 순차적 또는 동시적으로 통합하여 분석'
          ],
          tips: '방법론 선택 시 유의사항',
          tipList: [
            'IRB(기관생명윤리위원회) 승인 절차를 반드시 거치고, 승인 번호를 논문에 명시하십시오',
            '측정 도구의 신뢰도(Cronbach α)와 타당도(구인타당도, 내용타당도)를 보고하십시오',
            '질적 연구의 경우 신뢰성 확보를 위한 삼각검증(triangulation) 절차를 기술하십시오',
            '연구 참여자 표집 방법과 표본 크기의 적절성에 대한 근거를 제시하십시오'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '교육학 분야의 학술지는 한국연구재단 등재지를 중심으로 다양한 하위 분야별 전문 학술지가 발행되고 있으며, APA 스타일을 기반으로 한 인용 형식이 주로 사용됩니다.',
        details: {
          purpose: '학술지 및 인용의 핵심 목적',
          purposeDesc: '교육학 연구의 학문적 기여를 공인된 학술 채널을 통해 공유하고, 선행연구와의 학문적 연결을 체계적으로 구축합니다.',
          elements: '주요 학술지',
          elementList: [
            '교육학연구 (Korean Journal of Educational Research) - 한국교육학회 발행, 교육학 전반',
            '교육과정연구 (The Journal of Curriculum Studies) - 한국교육과정학회, 교육과정 및 수업 연구',
            '교육심리연구 (Korean Journal of Educational Psychology) - 한국교육심리학회, 학습심리 및 발달',
            '교육공학연구 (Journal of Educational Technology) - 한국교육공학회, 교육 미디어 및 이러닝',
            '한국교육학연구 (The Korea Educational Review) - 안암교육학회, 교육 정책 및 제도 연구'
          ],
          tips: '인용 시 유의사항',
          tipList: [
            'APA 7판 스타일을 기본으로 하되, 투고 학술지의 투고 규정을 반드시 확인하십시오',
            '국내 문헌은 저자명(연도) 형식으로, 해외 문헌은 성(연도) 형식으로 구분하여 인용하십시오',
            '교육부 고시, 교육과정 문서 등 정책 문서는 발행 기관과 고시 번호를 정확히 기재하십시오',
            '최근 5년 이내의 문헌을 중심으로 인용하되, 이론적 토대가 되는 고전 문헌도 포함하십시오'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '교육학 논문 작성에서는 이론과 실천의 연계, 교육 현장에 대한 깊은 이해, 체계적인 연구 설계가 핵심입니다. 연구 주제의 교육적 의의를 명확히 하고, 현장 적용 가능성을 제시하는 것이 중요합니다.',
        details: {
          purpose: '실전 작성의 핵심 목적',
          purposeDesc: '완성도 높은 교육학 논문을 효율적으로 작성하기 위한 실천적 전략과 노하우를 제공합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '연구 문제를 "~에 미치는 영향", "~에 대한 인식", "~의 경험과 의미" 등 명확한 형태로 진술하십시오',
            '이론적 배경은 핵심 이론 2-3개를 깊이 있게 다루되, 연구 문제와의 연결 고리를 명시하십시오',
            '연구 대상 선정 이유와 연구 현장(학교급, 지역 등)의 맥락적 정보를 충분히 기술하십시오',
            '교육적 시사점은 교사, 학교, 교육정책 차원으로 구분하여 구체적으로 제안하십시오',
            '제한점을 솔직히 기술하고, 이를 보완할 수 있는 후속 연구 방향을 구체적으로 제시하십시오'
          ],
          tips: '추가 실전 조언',
          tipList: [
            '국가 교육정책 동향(2022 개정 교육과정 등)과 연구 주제의 시의성을 연결하십시오',
            '통계 분석 시 효과크기(Cohen\'s d, η² 등)를 반드시 보고하여 실질적 의미를 제시하십시오',
            '질적 연구에서는 연구자의 반성적 성찰(reflexivity)을 별도 섹션으로 기술하십시오',
            '논문 투고 전 교육학 전공 동료에게 동료검토(peer review)를 받아 논리적 허점을 점검하십시오'
          ]
        }
      }
    ],

    'lifelong-edu': [
      {
        title: '논문 구조 특성',
        content: '평생교육 논문은 성인학습자의 특성과 평생학습 체제를 중심으로, 학습 참여, 프로그램 개발, 지역사회 교육, 인력개발 등의 주제를 다룹니다. 교육학의 기본 구조를 따르되, 성인학습 이론과 현장 적용성을 강조합니다.',
        details: {
          purpose: '논문 구조의 핵심 목적',
          purposeDesc: '평생학습 현장의 실천적 과제를 학문적으로 체계화하고, 성인학습의 독특한 특성을 반영한 연구 구조를 구축합니다.',
          elements: '필수 구성 요소',
          elementList: [
            '서론: 평생학습 사회의 맥락에서 연구의 필요성 제기, 정책적·실천적 배경 서술',
            '이론적 배경: Knowles의 성인학습이론(Andragogy), 전환학습(Mezirow), 자기주도학습, 경험학습 등',
            '연구방법: 프로그램 참여자 대상 조사, 기관 운영 분석, 학습 경험에 대한 질적 탐구',
            '연구결과: 학습 참여율, 만족도, 역량 변화 등 정량적 결과와 학습 의미 등 정성적 결과',
            '논의 및 결론: 평생교육 정책 제언, 프로그램 개선 방안, 학습자 지원 체계 제안'
          ],
          tips: '작성 시 유의사항',
          tipList: [
            '성인학습자의 다양성(연령, 학력, 직업, 학습 동기)을 연구 설계에 반영하십시오',
            '평생교육법, 학점은행제, 독학학위제 등 관련 제도적 맥락을 정확히 기술하십시오',
            '학습 성과를 단기적 만족도를 넘어 역량 변화, 삶의 질 변화 등 장기적 관점에서 논의하십시오',
            '국제기구(UNESCO, OECD)의 평생학습 정책 동향을 비교 맥락으로 활용하십시오'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '평생교육 연구는 성인학습의 복합적 특성을 반영하여 질적 연구와 혼합 연구가 활발히 활용됩니다. 프로그램 평가 연구, 요구 분석, 사례연구, 내러티브 탐구, 지역사회 기반 참여연구 등이 대표적입니다.',
        details: {
          purpose: '연구방법론의 핵심 목적',
          purposeDesc: '성인학습 경험의 심층적 이해와 평생교육 프로그램의 효과성을 과학적으로 평가하기 위한 적합한 방법을 선택합니다.',
          elements: '주요 연구방법',
          elementList: [
            '프로그램 평가연구: CIPP 모형(Context-Input-Process-Product), Kirkpatrick 4단계 모형 적용',
            '요구분석(Needs Assessment): Borich 요구도, The Locus for Focus 모델을 활용한 교육 요구 도출',
            '내러티브 탐구: 성인학습자의 생애사적 학습 경험과 전환학습 과정을 심층 분석',
            '지역사회 기반 참여연구(CBPR): 지역 주민과 함께 교육 문제를 발굴하고 해결하는 협력적 연구',
            'IPA(Importance-Performance Analysis): 교육 프로그램 속성의 중요도와 만족도를 매트릭스로 분석'
          ],
          tips: '방법론 선택 시 유의사항',
          tipList: [
            '성인학습자의 자발적 참여를 보장하고, 연구 참여 동의서에 학습 중단 권리를 명시하십시오',
            '프로그램 효과 연구 시 사전-사후 검사 외에 추수 검사(follow-up)를 포함하여 지속 효과를 확인하십시오',
            'FGI(Focus Group Interview)를 활용할 경우, 그룹 구성의 동질성/이질성 기준을 명시하십시오',
            '온라인 학습 연구 시 LMS 학습 로그 데이터와 자기보고식 데이터를 함께 활용하십시오'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '평생교육 분야는 교육학의 하위 분야이면서도 독자적인 학술 공동체를 형성하고 있으며, HRD(인적자원개발), 지역사회교육, 시민교육 등과 학제적 연결이 활발합니다.',
        details: {
          purpose: '학술지 및 인용의 핵심 목적',
          purposeDesc: '평생교육 연구의 학술적 기여를 전문 학술지를 통해 확산하고, 관련 분야와의 학제적 대화를 촉진합니다.',
          elements: '주요 학술지',
          elementList: [
            '평생교육학연구 (Journal of Lifelong Education) - 한국평생교육학회, 평생교육 전반',
            'Andragogy Today: Interdisciplinary Journal of Adult & Continuing Education - 한국성인교육학회',
            '평생학습사회 (Journal of Lifelong Learning Society) - 한국방송통신대학교 원격교육연구소',
            'HRD연구 (The Korean Journal of Human Resource Development) - 한국인력개발학회',
            '직업교육연구 (The Journal of Vocational Education Research) - 한국직업교육학회'
          ],
          tips: '인용 시 유의사항',
          tipList: [
            '평생교육법, 시행령, 시행규칙 등 법령 인용 시 최신 개정 현황을 확인하십시오',
            'UNESCO의 GRALE(Global Report on Adult Learning and Education) 등 국제 보고서를 적극 인용하십시오',
            '학점은행제, K-MOOC, 국가평생교육진흥원 통계 자료 등 공신력 있는 데이터를 활용하십시오',
            '인적자원개발(HRD), 사회교육, 성인교육 등 유사 용어의 학술적 정의를 명확히 구분하여 사용하십시오'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '평생교육 논문은 현장 실천성과 정책적 시의성이 특히 중요합니다. 학습자 중심의 관점을 유지하면서도 거시적 평생학습 체제와의 연결을 놓치지 않아야 합니다.',
        details: {
          purpose: '실전 작성의 핵심 목적',
          purposeDesc: '평생교육 현장의 실천적 가치를 학문적으로 정당화하고, 정책 수립에 기여할 수 있는 논문을 작성합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '연구 대상이 되는 평생교육 기관(평생학습관, 주민자치센터, 대학 부설 기관 등)의 유형을 명확히 구분하십시오',
            '학습자의 참여 동기를 Houle의 유형론, 자기결정성 이론 등 이론적 틀로 분석하십시오',
            '프로그램 개발 연구는 ADDIE 모형(분석-설계-개발-실행-평가) 등 체계적 절차를 따르십시오',
            '지역 특성(도시/농촌, 고령화율, 교육 인프라 등)이 학습 참여에 미치는 맥락적 영향을 기술하십시오',
            '연구 결과를 평생교육 정책(제5차 평생교육진흥 기본계획 등)과 연계하여 시사점을 도출하십시오'
          ],
          tips: '추가 실전 조언',
          tipList: [
            '성인학습자 인터뷰 시 라포(rapport) 형성에 충분한 시간을 할애하고, 이를 방법론 섹션에 기술하십시오',
            '디지털 리터러시, AI 시대 평생학습 등 최신 트렌드를 반영하여 연구의 시의성을 높이십시오',
            '학습 참여 장애 요인(시간, 비용, 정보 부족 등)을 Cross의 장애 모형 등으로 분석하십시오',
            '국내외 평생교육 우수 사례를 벤치마킹 관점에서 비교·분석하여 시사점을 풍부하게 하십시오'
          ]
        }
      }
    ],

    'social-welfare': [
      {
        title: '논문 구조 특성',
        content: '사회복지학 논문은 사회 문제에 대한 복지적 개입과 정책 분석을 중심으로, 실천(practice)과 정책(policy)의 두 축을 기반으로 합니다. 클라이언트 관점의 실천 연구와 거시적 정책 연구가 균형을 이룹니다.',
        details: {
          purpose: '논문 구조의 핵심 목적',
          purposeDesc: '사회적 약자의 문제를 과학적으로 분석하고, 효과적인 복지 개입과 정책 대안을 학문적으로 제시합니다.',
          elements: '필수 구성 요소',
          elementList: [
            '서론: 사회적 이슈(빈곤, 돌봄, 차별 등)의 현황과 연구의 필요성, 연구 목적과 연구 문제 제시',
            '이론적 배경: 생태체계이론, 강점관점, 임파워먼트 이론, 사회정의론 등 복지 이론 고찰',
            '연구방법: 2차 자료(복지패널 등) 분석, 설문조사, 심층면담, 프로그램 효과성 평가 등',
            '연구결과: 회귀분석, 구조방정식 결과 또는 질적 주제 분석 결과를 체계적으로 제시',
            '논의 및 결론: 실천적 함의(개입 전략), 정책적 함의(제도 개선), 연구의 한계와 후속 과제'
          ],
          tips: '작성 시 유의사항',
          tipList: [
            '연구 대상(클라이언트)의 취약성을 고려하여 윤리적 보호 절차를 강화하고 상세히 기술하십시오',
            '사회복지 실천 현장(지역사회복지관, 아동보호기관 등)의 맥락을 충분히 기술하십시오',
            '복지 수혜자의 자기결정권과 존엄성을 존중하는 연구 태도를 방법론에 반영하십시오',
            '정책 분석 시 관련 법령(사회보장기본법, 사회복지사업법 등)의 최신 개정 내용을 반영하십시오'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '사회복지학은 실증적 실천(evidence-based practice)을 지향하며, 대규모 패널 데이터 분석부터 사례연구, 참여적 실행연구까지 폭넓은 방법론을 활용합니다. 특히 2차 자료 분석이 양적 연구에서 큰 비중을 차지합니다.',
        details: {
          purpose: '연구방법론의 핵심 목적',
          purposeDesc: '복지 현상의 인과관계를 실증적으로 규명하고, 사회복지 프로그램의 효과를 과학적으로 평가합니다.',
          elements: '주요 연구방법',
          elementList: [
            '패널 데이터 분석: 한국복지패널, 고령화연구패널, 아동패널 등 종단 데이터를 활용한 인과 분석',
            '구조방정식모형(SEM): 매개효과, 조절효과 검증을 통한 복지 변인 간 구조적 관계 분석',
            '프로그램 효과성 평가: 단일사례설계(single-subject design), 실험·준실험설계를 통한 개입 효과 검증',
            '질적 사례연구: 복지 서비스 이용자의 생활 경험과 의미를 심층적으로 탐구',
            '정책 분석: Kingdon의 다중흐름모형, Sabatier의 옹호연합모형 등을 적용한 복지정책 과정 분석'
          ],
          tips: '방법론 선택 시 유의사항',
          tipList: [
            '패널 데이터 사용 시 표본 탈락(attrition)에 따른 편향(bias)을 점검하고 보정 방법을 기술하십시오',
            '취약계층 연구 시 게이트키퍼(gatekeepers)를 통한 접근 과정을 투명하게 기술하십시오',
            '척도 사용 시 한국 표준화 여부를 확인하고, 원척도와 번안 과정을 상세히 밝히십시오',
            '혼합연구 시 양적·질적 결과의 통합(integration) 전략을 명확히 제시하십시오'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '사회복지학 학술지는 실천 영역(아동, 노인, 장애인 등)과 방법 영역(정책, 행정, 상담 등)에 따라 세분화되어 있으며, 학제적 연구가 활발합니다.',
        details: {
          purpose: '학술지 및 인용의 핵심 목적',
          purposeDesc: '사회복지 연구의 학술적 성과를 전문 학술지를 통해 공유하고, 근거 기반 실천의 학문적 토대를 강화합니다.',
          elements: '주요 학술지',
          elementList: [
            '한국사회복지학 (Korean Journal of Social Welfare) - 한국사회복지학회, 사회복지 전반',
            '사회복지연구 (Social Welfare Review) - 한국사회복지연구회, 복지 이론 및 실증 연구',
            '한국사회복지행정학 (Journal of Korean Social Welfare Administration) - 한국사회복지행정학회',
            '비판사회정책 (Critical Social Policy) - 비판과 대안을 위한 사회복지학회',
            '정신건강과 사회복지 (Mental Health and Social Work) - 한국정신건강사회복지학회'
          ],
          tips: '인용 시 유의사항',
          tipList: [
            'APA 7판을 기본으로 하되, 한국사회복지학회 등 투고 학술지의 고유 양식을 우선 적용하십시오',
            '한국복지패널 등 2차 자료를 사용할 경우 데이터 출처, 조사 연도, 표본 설계를 정확히 인용하십시오',
            '사회복지 관련 법령은 법제처 국가법령정보센터의 최신 법령을 기준으로 인용하십시오',
            '해외 복지 제도 비교 시 OECD 사회지출 통계, Esping-Andersen의 복지국가 유형론 등을 적절히 인용하십시오'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '사회복지학 논문은 학문적 엄밀성과 함께 현장 실천성, 사회적 책무성이 요구됩니다. 연구 결과가 실제 복지 현장과 정책에 어떻게 기여할 수 있는지를 구체적으로 제시해야 합니다.',
        details: {
          purpose: '실전 작성의 핵심 목적',
          purposeDesc: '사회적 약자를 위한 실천적·정책적 대안을 학문적으로 뒷받침하는 완성도 높은 논문을 작성합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '연구 문제가 사회복지 가치(사회정의, 인권, 평등)와 어떻게 연결되는지 서론에서 명확히 하십시오',
            '클라이언트 집단(아동, 노인, 장애인, 이주민 등)의 특수성을 이론적 배경에서 충분히 다루십시오',
            '변인 간 관계 모형을 연구모형 그림(figure)으로 시각화하여 가설을 명확히 제시하십시오',
            '실천적 함의를 미시(개인), 중시(기관), 거시(정책) 수준으로 구분하여 구체적으로 제안하십시오',
            '사회적 소수자 연구 시 당사자 관점(insider perspective)과 연구자 관점의 균형을 유지하십시오'
          ],
          tips: '추가 실전 조언',
          tipList: [
            '변인명을 한국어와 영어로 병기하고, 조작적 정의를 명확히 제시하십시오',
            '통제변인(성별, 연령, 소득수준 등)의 선정 근거를 선행연구에 기반하여 설명하십시오',
            '현장 접근이 어려운 대상(노숙인, 가정폭력 피해자 등)의 경우 표집 전략을 상세히 기술하십시오',
            '연구 결과의 일반화 가능성과 한계를 솔직히 논의하고, 대안적 해석 가능성도 검토하십시오'
          ]
        }
      }
    ],

    psychology: [
      {
        title: '논문 구조 특성',
        content: '심리학 논문은 과학적 엄밀성을 강조하며, 가설 검증적 구조를 기본으로 합니다. APA 스타일에 충실한 IMRAD(Introduction-Method-Results-and-Discussion) 구조가 표준이며, 측정의 객관성과 재현 가능성을 중시합니다.',
        details: {
          purpose: '논문 구조의 핵심 목적',
          purposeDesc: '인간의 인지, 정서, 행동에 대한 가설을 체계적으로 검증하고, 재현 가능한 과학적 증거를 제공합니다.',
          elements: '필수 구성 요소',
          elementList: [
            '서론: 연구 현상의 이론적 배경, 선행연구 검토, 가설 도출(방향적/비방향적 가설 구분)',
            '방법: 참여자(인구통계학적 특성), 측정 도구(척도의 신뢰도·타당도), 실험 절차, 분석 방법',
            '결과: 기술통계량, 추론통계(t-test, ANOVA, 회귀분석, SEM 등) 결과를 표와 함께 제시',
            '논의: 가설 지지/기각 여부 해석, 이론적 함의, 선행연구와의 비교, 실용적 시사점',
            '참고문헌: APA 7판 형식의 엄격한 참고문헌 목록'
          ],
          tips: '작성 시 유의사항',
          tipList: [
            '가설은 서론의 마지막 부분에 구체적이고 검증 가능한 형태로 명시하십시오',
            '측정 도구의 원 개발자, 번안 과정, 본 연구에서의 Cronbach α 값을 모두 보고하십시오',
            '결과 섹션에서는 해석 없이 통계적 사실만 기술하고, 해석은 논의 섹션에서 수행하십시오',
            '효과크기, 신뢰구간, 통계적 검정력(power) 정보를 함께 보고하십시오'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '심리학은 실험법을 핵심 방법론으로 하면서도 조사연구, 상관연구, 종단연구, 메타분석 등 다양한 방법을 활용합니다. 최근에는 신경과학적 방법(fMRI, EEG)과 컴퓨터 기반 실험도 증가하고 있습니다.',
        details: {
          purpose: '연구방법론의 핵심 목적',
          purposeDesc: '심리적 구성개념을 객관적으로 측정하고, 변인 간 인과관계를 과학적으로 규명합니다.',
          elements: '주요 연구방법',
          elementList: [
            '실험연구: 독립변인 조작, 무선할당, 통제조건을 갖춘 실험실 및 현장 실험(between/within-subjects)',
            '조사연구: 표준화된 심리검사(BDI, STAI, SCL-90-R 등)를 활용한 대규모 설문 조사',
            '구조방정식모형(SEM): 잠재변인 간 구조적 관계, 매개·조절효과 검증(AMOS, Mplus 활용)',
            '메타분석: 다수의 선행연구 결과를 통합하여 효과크기를 산출하고 조절변인을 분석',
            '질적 연구: IPA(해석적 현상학적 분석), 합의적 질적 연구(CQR), 근거이론을 통한 심리적 경험 탐구'
          ],
          tips: '방법론 선택 시 유의사항',
          tipList: [
            '실험 연구 시 요구특성(demand characteristics)과 실험자 효과를 통제하기 위한 절차를 기술하십시오',
            '자기보고식 척도의 공통방법편향(common method bias) 가능성을 논의하고 대안을 제시하십시오',
            '심리학 연구의 재현 가능성(replicability)을 높이기 위해 사전등록(pre-registration)을 고려하십시오',
            '표본 크기 산정 시 G*Power 등을 활용한 통계적 검정력 분석 결과를 보고하십시오'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '심리학은 세부 전공(임상, 상담, 사회, 발달, 인지, 산업/조직 등)별로 전문 학술지가 분화되어 있으며, 국제적으로 APA 저널의 영향력이 큽니다.',
        details: {
          purpose: '학술지 및 인용의 핵심 목적',
          purposeDesc: '심리학 연구의 과학적 기여를 전문 학술지를 통해 발표하고, APA 기준의 체계적 인용을 통해 학문적 신뢰성을 확보합니다.',
          elements: '주요 학술지',
          elementList: [
            '한국심리학회지: 일반 (Korean Journal of Psychology: General) - 한국심리학회, 심리학 전반',
            '한국심리학회지: 상담 및 심리치료 (Korean Journal of Counseling and Psychotherapy) - 상담심리 전문',
            '한국심리학회지: 사회 및 성격 (Korean Journal of Social and Personality Psychology) - 사회심리학',
            '한국심리학회지: 발달 (Korean Journal of Developmental Psychology) - 발달심리학',
            '한국심리학회지: 인지 및 생물 (Korean Journal of Cognitive and Biological Psychology) - 인지/신경심리'
          ],
          tips: '인용 시 유의사항',
          tipList: [
            'APA 7판 형식을 엄격히 준수하되, DOI(Digital Object Identifier)를 가능한 한 포함하십시오',
            '심리검사 도구 인용 시 원 개발 논문과 한국판 타당화 논문을 모두 인용하십시오',
            'DSM-5 등 진단 체계를 인용할 경우 정확한 판본과 진단 코드를 기재하십시오',
            '메타분석 논문을 인용할 때는 개별 원연구도 함께 확인하고 맥락에 맞게 인용하십시오'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '심리학 논문은 과학적 글쓰기의 전형을 보여주는 분야입니다. 논리적 엄밀성, 측정의 정밀성, 결과 보고의 투명성이 핵심이며, 재현 가능한 연구를 지향해야 합니다.',
        details: {
          purpose: '실전 작성의 핵심 목적',
          purposeDesc: '과학적 엄밀성과 실용적 가치를 겸비한 심리학 논문을 효율적으로 작성합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '구성개념(construct)의 조작적 정의를 명확히 하고, 측정 도구와의 대응 관계를 분명히 하십시오',
            '연구모형을 그림(path diagram)으로 시각화하고, 각 경로에 대한 가설을 번호로 구분하여 제시하십시오',
            '표(Table)는 APA 형식(3선 표: 상단선, 헤더 구분선, 하단선)으로 작성하고 기술통계량을 포함하십시오',
            '논의 섹션에서 대안적 설명(alternative explanations)을 검토하여 논증의 깊이를 더하십시오',
            '임상·상담 연구의 경우 사례 기술 시 내담자 개인정보 보호를 위한 비식별화 처리를 명시하십시오'
          ],
          tips: '추가 실전 조언',
          tipList: [
            '변인 간 상관행렬(correlation matrix)을 표로 제시하여 다중공선성 여부를 독자가 확인할 수 있게 하십시오',
            '매개효과 검증 시 부트스트래핑(bootstrapping) 방법을 사용하고 간접효과의 95% 신뢰구간을 보고하십시오',
            '연구 참여자의 인구통계학적 특성(성별, 연령, 학력 등)을 상세한 표로 제시하십시오',
            'Open Science 원칙에 따라 데이터, 분석 코드, 측정 도구의 공유 가능성을 논의하십시오'
          ]
        }
      }
    ],

    business: [
      {
        title: '논문 구조 특성',
        content: '경영학 논문은 기업 경영의 이론적 모형을 수립하고 실증적으로 검증하는 구조를 기본으로 합니다. 재무, 마케팅, 인사조직, 전략, 운영관리, MIS 등 세부 분야에 따라 방법론적 특성이 다양합니다.',
        details: {
          purpose: '논문 구조의 핵심 목적',
          purposeDesc: '기업과 조직의 경영 현상에 대한 이론적 모형을 제시하고, 데이터를 통해 가설을 검증하여 경영적 시사점을 도출합니다.',
          elements: '필수 구성 요소',
          elementList: [
            '서론: 경영 현상의 문제 제기, 연구 공백(research gap) 식별, 연구의 이론적·실무적 기여 예고',
            '이론적 배경 및 가설 설정: 자원기반이론(RBV), 거래비용이론, 대리인이론 등 핵심 이론과 가설 도출',
            '연구방법: 표본과 데이터 수집(설문, 재무제표, DB), 변수의 조작적 정의, 분석 모형 설명',
            '실증 분석 결과: 기술통계, 상관분석, 회귀분석/SEM/패널분석 등 가설 검증 결과',
            '결론 및 시사점: 이론적 기여(theoretical contribution), 실무적 시사점(managerial implications), 한계점'
          ],
          tips: '작성 시 유의사항',
          tipList: [
            'Research gap을 명확히 제시하여 본 연구의 학문적 기여(contribution)를 서론에서 강조하십시오',
            '변수의 조작적 정의에서 측정 항목, 척도 출처, 응답 형식을 구체적으로 기술하십시오',
            '내생성(endogeneity) 문제를 인지하고, 도구변수(IV), 이중차분법(DID) 등 대안을 고려하십시오',
            '실무적 시사점은 추상적 제언이 아닌 기업이 실행 가능한 구체적 전략으로 제시하십시오'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '경영학은 대규모 실증 분석이 주류를 이루며, 설문 기반 연구, 재무 데이터 분석, 실험연구, 사례연구 등 다양한 방법론이 활용됩니다. 최근에는 빅데이터 분석, 텍스트 마이닝, 머신러닝도 증가하고 있습니다.',
        details: {
          purpose: '연구방법론의 핵심 목적',
          purposeDesc: '경영 현상의 인과관계를 실증적으로 규명하고, 이론적 모형의 설명력을 데이터를 통해 검증합니다.',
          elements: '주요 연구방법',
          elementList: [
            '설문 기반 SEM: PLS-SEM, CB-SEM을 활용한 잠재변인 간 구조적 관계 검증(SmartPLS, AMOS)',
            '패널 데이터 분석: 기업 재무 데이터(KIS-VALUE, FnGuide)를 활용한 고정효과/랜덤효과 모형',
            '이벤트 스터디(Event Study): 특정 사건(M&A, 공시 등)이 주가에 미치는 비정상수익률(CAR) 분석',
            '사례연구(Case Study): Yin의 다중사례설계, Eisenhardt의 이론구축적 사례연구 방법론 적용',
            '실험연구: 소비자 의사결정, 조직행동 분야에서의 시나리오 기반 실험 및 A/B 테스트'
          ],
          tips: '방법론 선택 시 유의사항',
          tipList: [
            '설문 연구 시 Harman의 단일요인 검증 등으로 공통방법편향(CMB)을 점검하십시오',
            '재무 데이터 분석 시 이상치(outlier) 처리(winsorizing), 산업/연도 통제를 명시하십시오',
            'PLS-SEM 사용 시 반영적(reflective) vs. 형성적(formative) 측정모형의 구분 근거를 제시하십시오',
            '매개효과 분석 시 Baron & Kenny 방식 대신 Process Macro 또는 부트스트래핑 방법을 사용하십시오'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '경영학 학술지는 세부 전공별로 분화되어 있으며, 국내 KCI 등재지와 함께 SSCI급 해외 학술지 투고도 활발합니다. 재무, 마케팅, 인사조직, MIS 등 각 분야별 탑 학술지가 구분됩니다.',
        details: {
          purpose: '학술지 및 인용의 핵심 목적',
          purposeDesc: '경영학 연구의 학술적 기여를 공인된 학술지를 통해 발표하고, 이론과 실증의 학문적 연결망을 구축합니다.',
          elements: '주요 학술지',
          elementList: [
            '경영학연구 (Korean Management Review) - 한국경영학회, 경영학 전반의 대표 학술지',
            '마케팅연구 (Journal of Korean Marketing Association) - 한국마케팅학회, 소비자행동·마케팅 전략',
            '재무연구 (The Korean Journal of Finance) - 한국재무학회, 기업재무·투자론·금융시장',
            '인사조직연구 (Korean Journal of Management) - 한국인사조직학회, 조직행동·인적자원관리',
            '경영정보학연구 (Information Systems Review) - 한국경영정보학회, IT/IS·디지털 전환'
          ],
          tips: '인용 시 유의사항',
          tipList: [
            '경영학 세부 분야별 인용 스타일(APA vs. Chicago vs. 학술지 고유 양식)을 확인하십시오',
            '기업 데이터(KIS-VALUE, DART 공시자료 등) 인용 시 데이터베이스명, 추출 기간, 변수 정의를 명시하십시오',
            '해외 탑 저널(AMJ, AMR, SMJ, JM, JF 등)의 이론적 논문을 핵심 근거로 적극 활용하십시오',
            '산업 보고서, 컨설팅 자료(McKinsey, BCG 등)는 학술 문헌을 보완하는 용도로 적절히 인용하십시오'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '경영학 논문은 이론적 기여와 실무적 시사점의 균형이 중요합니다. 학문적 엄밀성을 유지하면서도 기업 경영 현장에 실질적으로 도움이 되는 연구 결과를 제시해야 합니다.',
        details: {
          purpose: '실전 작성의 핵심 목적',
          purposeDesc: '이론과 실무의 가교 역할을 하는 경영학 논문을 전략적이고 체계적으로 작성합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '서론에서 "So what?" 질문에 답하여 연구의 이론적·실무적 기여를 3가지 이내로 명확히 제시하십시오',
            '가설은 이론적 근거(theoretical rationale)를 단계적으로 제시한 후 논리적 귀결로 도출하십시오',
            '연구모형 그림에서 독립변인→매개변인→종속변인의 경로와 조절변인의 위치를 명확히 표시하십시오',
            '강건성 검증(robustness check): 대안적 측정, 대안적 표본, 대안적 분석 방법으로 결과의 일관성을 확인하십시오',
            '경쟁 가설(competing hypotheses)을 제시하여 본 연구의 이론적 차별성을 부각하십시오'
          ],
          tips: '추가 실전 조언',
          tipList: [
            '연구 변인의 측정 항목은 부록(Appendix)에 전문을 수록하여 재현 가능성을 높이십시오',
            '확인적 요인분석(CFA) 결과표에 요인적재량, AVE, CR, 판별타당도(HTMT)를 포함하십시오',
            'VIF(분산팽창지수)를 보고하여 다중공선성 문제가 없음을 확인하십시오',
            '국내 기업 사례를 활용할 경우 기업의 동의를 구하거나 익명 처리 여부를 밝히십시오'
          ]
        }
      }
    ],

    'public-admin': [
      {
        title: '논문 구조 특성',
        content: '행정학 논문은 공공정책과 행정 현상에 대한 이론적 분석과 실증적 검증을 기반으로 합니다. 정책 과정, 관료제, 공공서비스, 거버넌스, 재정 등 다양한 주제를 다루며, 정부 자료와 공공 데이터를 활용한 분석이 특징적입니다.',
        details: {
          purpose: '논문 구조의 핵심 목적',
          purposeDesc: '정부와 공공 부문의 현상을 학문적으로 분석하고, 정책 대안과 행정 개선 방안을 과학적 근거에 기반하여 제시합니다.',
          elements: '필수 구성 요소',
          elementList: [
            '서론: 정책 이슈 또는 행정 현상의 문제 제기, 연구의 시의성과 정책적 필요성 강조',
            '이론적 배경: 신공공관리론(NPM), 거버넌스 이론, 제도주의, 정책네트워크론 등 행정학 이론 검토',
            '연구 설계: 분석 단위(중앙/지방정부, 공무원, 정책사업 등), 데이터 출처, 분석 모형 기술',
            '분석 결과: 정량적 분석(회귀, 패널, DEA 등) 또는 정성적 분석(정책사례, 비교행정) 결과 제시',
            '정책적 함의 및 결론: 구체적 정책 제언, 행정 개혁 방안, 연구의 한계와 향후 과제'
          ],
          tips: '작성 시 유의사항',
          tipList: [
            '정책 환경의 변화(정권 교체, 법률 개정 등)가 연구 결과 해석에 미치는 영향을 고려하십시오',
            '분석 단위(개인/조직/지역/국가)를 명확히 하고, 생태학적 오류(ecological fallacy)를 경계하십시오',
            '공공데이터(정부 통계, 예산서, 감사 보고서 등)의 신뢰성과 한계를 투명하게 논의하십시오',
            '정책 제언 시 실현 가능성, 예산 소요, 이해관계자 반응 등 실행 조건을 고려하여 제시하십시오'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '행정학은 정량적 분석과 정성적 분석을 모두 활용하며, 특히 정부 통계와 행정 데이터를 활용한 실증 분석, 정책 사례 분석, 비교행정 연구 등이 특징적입니다.',
        details: {
          purpose: '연구방법론의 핵심 목적',
          purposeDesc: '공공 부문의 복잡한 현상을 과학적으로 분석하고, 정책 효과를 객관적으로 평가하기 위한 방법론적 기반을 제공합니다.',
          elements: '주요 연구방법',
          elementList: [
            '정책평가: 이중차분법(DID), 회귀불연속설계(RDD), 성향점수매칭(PSM) 등 준실험적 인과추론 방법',
            '효율성 분석: DEA(자료포락분석), SFA(확률적 프론티어 분석)을 활용한 공공서비스 효율성 측정',
            '패널 데이터 분석: 지방자치단체 재정 데이터, 공무원 인사 데이터 등을 활용한 종단 분석',
            '질적 비교분석(QCA): 정책 사례를 체계적으로 비교하여 인과적 조건의 조합을 도출',
            '정책 담론 분석: 정책 문서, 국회 회의록, 언론 보도 등에 대한 비판적 담론 분석(CDA)'
          ],
          tips: '방법론 선택 시 유의사항',
          tipList: [
            '인과추론 방법 사용 시 핵심 가정(평행추세, SUTVA 등)의 충족 여부를 검증하고 보고하십시오',
            '공공데이터의 측정 오류, 결측값 처리 방법을 투명하게 기술하십시오',
            '비교행정 연구 시 사례 선택의 기준(최대유사/최대상이 체계 설계 등)을 명확히 제시하십시오',
            '설문조사 시 공무원 대상 연구의 경우 응답 편향(사회적 바람직성 편향) 가능성을 논의하십시오'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '행정학 학술지는 행정 일반, 정책학, 지방자치, 재정 등 세부 분야별로 분화되어 있으며, 정치학, 경제학, 법학과의 학제적 연구도 활발합니다.',
        details: {
          purpose: '학술지 및 인용의 핵심 목적',
          purposeDesc: '행정학 연구의 학술적 기여를 전문 학술지를 통해 발표하고, 정책 결정에 기여하는 학문적 근거를 축적합니다.',
          elements: '주요 학술지',
          elementList: [
            '한국행정학보 (Korean Public Administration Review) - 한국행정학회, 행정학 전반의 대표 학술지',
            '한국정책학회보 (Korean Policy Studies Review) - 한국정책학회, 정책 분석 및 평가',
            '행정논총 (Korean Journal of Public Administration) - 서울대학교 행정대학원, 행정이론 및 사례',
            '지방행정연구 (The Korea Local Administration Review) - 한국지방행정연구원, 지방자치·분권',
            '한국거버넌스학회보 (The Korean Governance Review) - 한국거버넌스학회, 거버넌스·협치 연구'
          ],
          tips: '인용 시 유의사항',
          tipList: [
            '법률, 시행령, 조례 등 법령 인용 시 법제처 국가법령정보센터를 통해 최신 개정 내용을 확인하십시오',
            '정부 보고서(감사원, 국회예산정책처, 한국행정연구원 등)를 인용할 때 발행 기관과 연도를 정확히 기재하십시오',
            '비교행정 연구 시 OECD Government at a Glance, World Bank Governance Indicators 등 국제 지표를 활용하십시오',
            '해외 행정학 저널(PAR, JPART, Governance 등)의 이론적 논문을 적극적으로 인용하십시오'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '행정학 논문은 학문적 엄밀성과 정책적 실용성의 균형이 핵심입니다. 이론에 기반한 분석을 수행하면서도 정책 현장에 실질적으로 기여할 수 있는 함의를 도출해야 합니다.',
        details: {
          purpose: '실전 작성의 핵심 목적',
          purposeDesc: '정책 결정과 행정 개선에 기여하는 학문적 근거를 제공하는 완성도 높은 논문을 작성합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '연구 주제가 현 정부의 국정과제 또는 주요 정책 아젠다와 어떻게 연결되는지 서론에서 밝히십시오',
            '분석 단위에 맞는 적절한 이론적 프레임워크를 선택하고, 이론 간 경쟁적 관점을 비교 검토하십시오',
            '종속변인(정책 성과, 행정 효율성 등)의 측정 방법과 데이터 출처를 투명하게 기술하십시오',
            '정책적 함의를 단기/중기/장기로 구분하거나, 중앙/지방 차원으로 나누어 구체적으로 제시하십시오',
            '연구 결과의 외적 타당성(generalizability)을 다른 지역/시기/정책 영역으로의 적용 가능성 관점에서 논의하십시오'
          ],
          tips: '추가 실전 조언',
          tipList: [
            'e-나라지표, 지방재정365, KOSIS 등 공공데이터 포털에서 신뢰할 수 있는 데이터를 확보하십시오',
            '정책 변동 시점(법률 시행일, 제도 개편일)을 정확히 파악하여 준실험적 분석의 처리 시점으로 활용하십시오',
            '행정학 고유의 개념(공공가치, 책임성, 대응성, 형평성 등)을 이론적으로 엄밀하게 정의하십시오',
            '정책 대상 집단(수혜자, 규제 대상자)의 관점을 연구 설계에 포함하여 정책 수용성을 높이십시오'
          ]
        }
      }
    ],

    literature: [
      {
        title: '논문 구조 특성',
        content: '문학/어문학 논문은 텍스트에 대한 깊이 있는 해석과 언어 현상에 대한 분석을 핵심으로 합니다. 실증적 가설 검증보다는 해석학적 논증, 비평적 분석, 언어학적 기술이 주를 이루며, 인문학적 글쓰기 전통을 따릅니다.',
        details: {
          purpose: '논문 구조의 핵심 목적',
          purposeDesc: '문학 작품의 의미를 다층적으로 해석하거나, 언어 현상의 체계적 기술과 분석을 통해 인문학적 지식을 확장합니다.',
          elements: '필수 구성 요소',
          elementList: [
            '서론: 연구 대상(작품, 작가, 언어 현상)의 학문적 의의, 기존 연구사 검토, 연구의 관점과 방법 제시',
            '본론(분석): 작품 분석(주제, 서사구조, 인물, 문체), 언어 분석(음운, 형태, 통사, 의미, 화용론적 분석)',
            '해석 및 논증: 분석 결과에 대한 이론적 해석, 비평적 관점 적용(페미니즘, 탈식민주의, 생태비평 등)',
            '선행연구와의 대화: 기존 연구와의 차별점, 새로운 해석의 기여점을 논증적으로 제시',
            '결론: 연구의 학문적 기여, 해석의 확장 가능성, 후속 연구 방향 제시'
          ],
          tips: '작성 시 유의사항',
          tipList: [
            '원전(primary text) 인용을 충분히 하되, 인용문의 맥락과 분석적 의미를 반드시 설명하십시오',
            '문학 이론(구조주의, 후기구조주의, 정신분석비평 등)을 적용할 때 이론의 핵심 개념을 명확히 정의하십시오',
            '어문학 논문에서 용례(example) 제시 시 출처, 문맥, 글로싱(glossing)을 정확히 기재하십시오',
            '비교문학 연구 시 비교의 기준(주제, 문체, 시대적 배경 등)을 명시적으로 설정하십시오'
          ]
        }
      },
      {
        title: '연구방법론',
        content: '문학/어문학은 해석학적 방법, 비평 이론 적용, 코퍼스 언어학, 문헌학적 방법 등을 주로 활용합니다. 최근에는 디지털 인문학(Digital Humanities), 계량문헌학, 코퍼스 기반 분석 등 정량적 방법도 확대되고 있습니다.',
        details: {
          purpose: '연구방법론의 핵심 목적',
          purposeDesc: '문학 텍스트의 의미를 심층적으로 해석하고, 언어 구조와 사용 양상을 체계적으로 기술·분석합니다.',
          elements: '주요 연구방법',
          elementList: [
            '텍스트 분석(Close Reading): 작품의 문체, 서사구조, 상징, 비유 등을 면밀히 분석하는 전통적 방법',
            '비평 이론 적용: 페미니즘, 탈식민주의, 생태비평, 정신분석, 신역사주의 등 특정 이론적 렌즈 적용',
            '코퍼스 언어학: 세종코퍼스, 한국어 코퍼스 등 대규모 언어 자료를 활용한 정량적 언어 분석',
            '문헌학적 방법: 고전 텍스트의 교감, 해제, 번역, 원전 비평 등 문헌학적 연구',
            '디지털 인문학: 텍스트 마이닝, 네트워크 분석, 시각화 등 디지털 기법을 활용한 문학/언어 연구'
          ],
          tips: '방법론 선택 시 유의사항',
          tipList: [
            '해석적 연구에서 주관적 해석과 논증적 해석의 차이를 인식하고, 텍스트 근거를 충분히 제시하십시오',
            '비평 이론을 기계적으로 적용하기보다 텍스트의 고유한 특성과 이론의 상호작용을 보여주십시오',
            '코퍼스 분석 시 코퍼스의 구성(크기, 장르, 시기), 검색 도구, 통계 방법을 명시하십시오',
            '고전 텍스트 연구 시 판본(edition) 선택의 근거와 표기법(현대 맞춤법 vs. 원문 표기)을 밝히십시오'
          ]
        }
      },
      {
        title: '주요 학술지 & 인용',
        content: '문학/어문학 학술지는 국문학, 영문학, 중문학, 일문학, 불문학 등 언어권별, 그리고 문학과 언어학 분야별로 세분화되어 있습니다. 시카고/투라비안 스타일과 MLA 스타일이 주로 사용됩니다.',
        details: {
          purpose: '학술지 및 인용의 핵심 목적',
          purposeDesc: '문학/어문학 연구의 학술적 기여를 전문 학술지를 통해 공유하고, 해석 공동체 내에서의 학문적 대화를 촉진합니다.',
          elements: '주요 학술지',
          elementList: [
            '국어국문학 (Korean Language and Literature) - 국어국문학회, 한국어학과 한국문학 전반',
            '한국현대문학연구 (The Journal of Korean Modern Literature) - 한국현대문학회, 근현대 한국문학',
            '한국어학 (Korean Linguistics) - 한국어학회, 한국어의 구조와 사용에 대한 언어학적 연구',
            '민족문학사연구 (Journal of Korean Literary History) - 민족문학사학회, 문학사적 관점의 연구',
            '비교문학 (Korean Journal of Comparative Literature) - 한국비교문학회, 비교문학 및 세계문학'
          ],
          tips: '인용 시 유의사항',
          tipList: [
            '문학 작품 인용 시 판본(초판, 개정판, 전집 등)과 쪽수를 정확히 표기하십시오',
            '고전 문학 인용 시 원문과 현대어 번역을 병기하고, 번역의 출처를 밝히십시오',
            '외국 문학 연구 시 원어 인용과 한국어 번역을 함께 제시하고, 번역자를 명시하십시오',
            'MLA, Chicago/Turabian 등 해당 학술지가 요구하는 인용 스타일을 정확히 따르십시오'
          ]
        }
      },
      {
        title: '실전 작성 팁',
        content: '문학/어문학 논문은 논증의 깊이, 텍스트 분석의 치밀함, 그리고 학술적 글쓰기의 품격이 핵심 평가 기준입니다. 독창적인 해석과 체계적인 논증 구조의 균형이 중요합니다.',
        details: {
          purpose: '실전 작성의 핵심 목적',
          purposeDesc: '독창적인 해석과 치밀한 논증을 통해 문학/어문학 분야에 학문적으로 기여하는 논문을 작성합니다.',
          elements: '핵심 작성 전략',
          elementList: [
            '연구사 검토를 통해 기존 해석의 흐름을 정리하고, 본 연구의 "새로운 관점"이 무엇인지 명확히 하십시오',
            '작품 분석 시 거시적 구조(서사, 주제)와 미시적 분석(문체, 수사, 이미지)을 유기적으로 연결하십시오',
            '이론적 틀을 적용할 때 작품 텍스트에서 직접 근거를 추출하여 해석의 실증성을 확보하십시오',
            '비교 분석 시 표면적 유사성에 그치지 않고, 차이의 원인(문화적, 역사적, 미학적)을 깊이 탐구하십시오',
            '어문학 논문에서 용례 분석 시 최소대립쌍(minimal pair), 교체 검증(substitution test) 등 체계적 방법을 사용하십시오'
          ],
          tips: '추가 실전 조언',
          tipList: [
            '논문 제목은 연구 대상과 관점을 함축적으로 드러내되, 지나치게 비유적인 표현은 지양하십시오',
            '주석(footnote/endnote)을 활용하여 본문의 흐름을 방해하지 않으면서 보충 정보를 제공하십시오',
            '인문학적 글쓰기의 미덕(명료성, 논리성, 문체의 격조)을 의식적으로 추구하십시오',
            '학회 발표를 통해 사전 피드백을 받고, 이를 논문에 반영하여 논증의 완성도를 높이십시오'
          ]
        }
      }
    ],

};

export const detailData = {
  ko: {
    ...humanitiesKo,
    ...naturalScienceKo,
    ...engineeringKo,
    ...medicalKo,
    ...artsKo,
  },
  en: {
    ...humanitiesEn,
    ...naturalScienceEn,
    ...engineeringEn,
    ...medicalEn,
    ...artsEn,
  }
};
