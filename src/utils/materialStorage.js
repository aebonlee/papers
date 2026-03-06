import getSupabase from './supabase';

function normalizeMaterial(row) {
  if (!row) return null;
  return {
    ...row,
    titleKo: row.title || '',
    titleEn: row.title_en || '',
    descKo: row.description || '',
    descEn: row.description_en || '',
    fileUrl: row.file_url || '',
    createdAt: row.created_at ? row.created_at.split('T')[0] : '',
  };
}

function toSupabaseRow(data) {
  return {
    title: data.title,
    title_en: data.title_en || '',
    description: data.description || '',
    description_en: data.description_en || '',
    category: data.category,
    type: data.type || 'pdf',
    file_url: data.file_url || '',
  };
}

const sampleMaterials = [
  {
    id: '1',
    title: '학위논문 구조 가이드 (PDF)',
    title_en: 'Thesis Structure Guide (PDF)',
    description: '학위논문의 기본 구성과 각 장별 작성 요령을 정리한 자료입니다.',
    description_en: 'A guide to the basic structure and writing tips for each chapter of a thesis.',
    category: 'structure',
    type: 'pdf',
    file_url: '#',
    titleKo: '학위논문 구조 가이드 (PDF)',
    titleEn: 'Thesis Structure Guide (PDF)',
    descKo: '학위논문의 기본 구성과 각 장별 작성 요령을 정리한 자료입니다.',
    descEn: 'A guide to the basic structure and writing tips for each chapter of a thesis.',
    fileUrl: '#',
    createdAt: '2026-02-01'
  },
  {
    id: '2',
    title: '연구방법론 비교 차트',
    title_en: 'Research Methodology Comparison Chart',
    description: '양적·질적·혼합 연구방법의 특징을 한눈에 비교할 수 있는 차트입니다.',
    description_en: 'A chart comparing the characteristics of quantitative, qualitative, and mixed methods.',
    category: 'methodology',
    type: 'pdf',
    file_url: '#',
    titleKo: '연구방법론 비교 차트',
    titleEn: 'Research Methodology Comparison Chart',
    descKo: '양적·질적·혼합 연구방법의 특징을 한눈에 비교할 수 있는 차트입니다.',
    descEn: 'A chart comparing the characteristics of quantitative, qualitative, and mixed methods.',
    fileUrl: '#',
    createdAt: '2026-01-28'
  },
  {
    id: '3',
    title: '학술 논문 작성 체크리스트',
    title_en: 'Academic Paper Writing Checklist',
    description: '논문 제출 전 점검해야 할 사항들을 정리한 체크리스트입니다.',
    description_en: 'A checklist of items to review before submitting your paper.',
    category: 'writing',
    type: 'pdf',
    file_url: '#',
    titleKo: '학술 논문 작성 체크리스트',
    titleEn: 'Academic Paper Writing Checklist',
    descKo: '논문 제출 전 점검해야 할 사항들을 정리한 체크리스트입니다.',
    descEn: 'A checklist of items to review before submitting your paper.',
    fileUrl: '#',
    createdAt: '2026-01-20'
  },
  {
    id: '4',
    title: 'SPSS 기초 실습 자료',
    title_en: 'SPSS Basic Practice Materials',
    description: 'SPSS를 활용한 기초 통계분석 실습 자료입니다.',
    description_en: 'Basic statistical analysis practice materials using SPSS.',
    category: 'statistics',
    type: 'pdf',
    file_url: '#',
    titleKo: 'SPSS 기초 실습 자료',
    titleEn: 'SPSS Basic Practice Materials',
    descKo: 'SPSS를 활용한 기초 통계분석 실습 자료입니다.',
    descEn: 'Basic statistical analysis practice materials using SPSS.',
    fileUrl: '#',
    createdAt: '2026-01-15'
  },
  {
    id: '5',
    title: '참고문헌 인용 형식 요약표',
    title_en: 'Citation Style Summary Table',
    description: 'APA, MLA, Chicago, Vancouver 인용 형식을 비교 정리한 요약표입니다.',
    description_en: 'A summary table comparing APA, MLA, Chicago, and Vancouver citation styles.',
    category: 'structure',
    type: 'pdf',
    file_url: '#',
    titleKo: '참고문헌 인용 형식 요약표',
    titleEn: 'Citation Style Summary Table',
    descKo: 'APA, MLA, Chicago, Vancouver 인용 형식을 비교 정리한 요약표입니다.',
    descEn: 'A summary table comparing APA, MLA, Chicago, and Vancouver citation styles.',
    fileUrl: '#',
    createdAt: '2026-01-10'
  },
  {
    id: '6',
    title: '설문지 설계 템플릿',
    title_en: 'Survey Design Template',
    description: '양적 연구를 위한 설문지 설계 템플릿과 작성 가이드입니다.',
    description_en: 'A survey design template and writing guide for quantitative research.',
    category: 'methodology',
    type: 'doc',
    file_url: '#',
    titleKo: '설문지 설계 템플릿',
    titleEn: 'Survey Design Template',
    descKo: '양적 연구를 위한 설문지 설계 템플릿과 작성 가이드입니다.',
    descEn: 'A survey design template and writing guide for quantitative research.',
    fileUrl: '#',
    createdAt: '2026-01-05'
  }
];

export async function getMaterials(filter = {}) {
  const supabase = getSupabase();
  if (supabase) {
    let query = supabase.from('lecture_materials').select('*').order('created_at', { ascending: false });
    if (filter.category) query = query.eq('category', filter.category);
    const { data } = await query;
    return (data || []).map(normalizeMaterial);
  }

  let result = [...sampleMaterials];
  if (filter.category) result = result.filter(m => m.category === filter.category);
  return result;
}

export async function getMaterialById(id) {
  const supabase = getSupabase();
  if (supabase) {
    const { data } = await supabase.from('lecture_materials').select('*').eq('id', id).single();
    return normalizeMaterial(data);
  }
  return sampleMaterials.find(m => m.id === id) || null;
}

export async function createMaterial(material) {
  const supabase = getSupabase();
  if (supabase) {
    const row = toSupabaseRow(material);
    const { data, error } = await supabase.from('lecture_materials').insert(row).select().single();
    if (error) throw error;
    return normalizeMaterial(data);
  }
  const newMaterial = {
    ...material,
    id: String(Date.now()),
    titleKo: material.title,
    titleEn: material.title_en || '',
    descKo: material.description || '',
    descEn: material.description_en || '',
    fileUrl: material.file_url || '',
    createdAt: new Date().toISOString().split('T')[0]
  };
  sampleMaterials.unshift(newMaterial);
  return newMaterial;
}

export async function updateMaterial(id, updates) {
  const supabase = getSupabase();
  if (supabase) {
    const row = {};
    if (updates.title !== undefined) row.title = updates.title;
    if (updates.title_en !== undefined) row.title_en = updates.title_en;
    if (updates.description !== undefined) row.description = updates.description;
    if (updates.description_en !== undefined) row.description_en = updates.description_en;
    if (updates.category !== undefined) row.category = updates.category;
    if (updates.type !== undefined) row.type = updates.type;
    if (updates.file_url !== undefined) row.file_url = updates.file_url;
    const { data, error } = await supabase.from('lecture_materials').update(row).eq('id', id).select().single();
    if (error) throw error;
    return normalizeMaterial(data);
  }
  const idx = sampleMaterials.findIndex(m => m.id === id);
  if (idx !== -1) {
    sampleMaterials[idx] = { ...sampleMaterials[idx], ...updates };
    return sampleMaterials[idx];
  }
  return null;
}

export async function deleteMaterial(id) {
  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from('lecture_materials').delete().eq('id', id);
    if (error) throw error;
    return true;
  }
  const idx = sampleMaterials.findIndex(m => m.id === id);
  if (idx !== -1) sampleMaterials.splice(idx, 1);
  return true;
}

export async function getMaterialsCount() {
  const supabase = getSupabase();
  if (supabase) {
    const { count } = await supabase.from('lecture_materials').select('*', { count: 'exact', head: true });
    return count || 0;
  }
  return sampleMaterials.length;
}
