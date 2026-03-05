/**
 * 사이트 설정 파일
 * Papers - 대학원생 논문작성 학습 & 연구 협업 플랫폼
 */

const site = {
  // 사이트 기본 정보
  name: 'Papers',
  nameKo: '논문작성 학습 & 연구 협업',
  description: '대학원생을 위한 논문작성 학습 자료와 연구자 협업 플랫폼',
  url: 'https://papers.dreamitbiz.com',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    main: 'Papers',
    sub: 'DreamIT Biz',
  },

  // 테마 컬러
  themeColor: '#0046C8',

  // 네비게이션 메뉴
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.writingGuide',
      path: '/guide',
      activePath: '/guide',
      dropdown: [
        { path: '/guide/structure', labelKey: 'site.nav.paperStructure' },
        { path: '/guide/methodology', labelKey: 'site.nav.methodology' },
        { path: '/guide/writing', labelKey: 'site.nav.academicWriting' },
        { path: '/guide/reference', labelKey: 'site.nav.reference' },
        { path: '/guide/statistics', labelKey: 'site.nav.statistics' },
        { path: '/guide/ethics', labelKey: 'site.nav.ethics' }
      ]
    },
    {
      labelKey: 'site.nav.fieldResources',
      path: '/fields',
      activePath: '/fields',
      dropdown: [
        { path: '/fields/humanities', labelKey: 'site.nav.humanities' },
        { path: '/fields/natural-science', labelKey: 'site.nav.naturalScience' },
        { path: '/fields/engineering', labelKey: 'site.nav.engineering' },
        { path: '/fields/medical', labelKey: 'site.nav.medical' },
        { path: '/fields/arts', labelKey: 'site.nav.arts' }
      ]
    },
    {
      labelKey: 'site.nav.researchLab',
      path: '/lab',
      activePath: '/lab',
      dropdown: [
        { path: '/lab/lectures', labelKey: 'site.nav.onlineLectures' },
        { path: '/lab/live', labelKey: 'site.nav.liveLectures' },
        { path: '/lab/materials', labelKey: 'site.nav.lectureMaterials' },
        { path: '/lab/guidance', labelKey: 'site.nav.thesisGuidance' }
      ]
    },
    { path: '/projects', labelKey: 'site.nav.projects', activePath: '/projects' },
    { path: '/community', labelKey: 'nav.community', activePath: '/community' }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/guide', labelKey: 'site.nav.writingGuide' },
    { path: '/fields', labelKey: 'site.nav.fieldResources' },
    { path: '/lab', labelKey: 'site.nav.researchLab' },
    { path: '/projects', labelKey: 'site.nav.projects' },
    { path: '/community', labelKey: 'nav.community' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'AHP 연구 플랫폼', url: 'https://ahp-basic.dreamitbiz.com' },
    { name: '핵심역량 자가측정', url: 'https://competency.dreamitbiz.com' }
  ]
};

export default site;
