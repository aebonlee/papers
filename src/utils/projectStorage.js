import getSupabase from './supabase';

// 샘플 프로젝트 데이터 (Supabase 미연결 시 사용)
const sampleProjects = [
  {
    id: '1',
    title: 'AI 기반 교육 효과성 연구',
    description: '인공지능 튜터링 시스템이 대학생의 학습 성과에 미치는 영향을 분석하는 연구 프로젝트입니다. 실험군과 대조군을 설정하여 양적 연구를 진행합니다.',
    field: 'engineering',
    status: 'recruiting',
    leader: { name: '김연구', email: 'researcher@example.com' },
    members: 3,
    maxMembers: 6,
    deadline: '2026-06-30',
    createdAt: '2026-01-15'
  },
  {
    id: '2',
    title: '노인 건강증진 프로그램 개발',
    description: '지역사회 노인을 대상으로 한 통합 건강증진 프로그램을 개발하고 효과를 검증하는 혼합연구 프로젝트입니다.',
    field: 'medical',
    status: 'in_progress',
    leader: { name: '이보건', email: 'health@example.com' },
    members: 5,
    maxMembers: 5,
    deadline: '2026-09-30',
    createdAt: '2025-11-01'
  },
  {
    id: '3',
    title: '한국 현대소설의 트라우마 서사 연구',
    description: '2000년대 이후 한국 현대소설에 나타난 트라우마 서사의 양상과 의미를 질적으로 분석합니다.',
    field: 'humanities',
    status: 'recruiting',
    leader: { name: '박문학', email: 'literature@example.com' },
    members: 2,
    maxMembers: 4,
    deadline: '2026-12-31',
    createdAt: '2026-02-20'
  },
  {
    id: '4',
    title: '미세플라스틱이 해양생태계에 미치는 영향',
    description: '해양 환경에서 미세플라스틱의 축적과 생태계 영향을 연구합니다. 현장 샘플링과 실험실 분석을 병행합니다.',
    field: 'natural-science',
    status: 'in_progress',
    leader: { name: '최환경', email: 'eco@example.com' },
    members: 4,
    maxMembers: 6,
    deadline: '2026-08-31',
    createdAt: '2025-12-10'
  },
  {
    id: '5',
    title: '무용 치료가 청소년 정서에 미치는 효과',
    description: '무용 기반 예술치료 프로그램이 청소년의 정서 조절과 자아존중감에 미치는 영향을 혼합연구로 탐구합니다.',
    field: 'arts',
    status: 'completed',
    leader: { name: '정예술', email: 'arts@example.com' },
    members: 3,
    maxMembers: 3,
    deadline: '2025-12-31',
    createdAt: '2025-06-01'
  },
  {
    id: '6',
    title: '블록체인 기반 학습 이력 관리 시스템',
    description: '블록체인 기술을 활용하여 학습자의 학습 이력을 안전하게 관리하고 공유하는 시스템을 설계·개발합니다.',
    field: 'engineering',
    status: 'recruiting',
    leader: { name: '한기술', email: 'tech@example.com' },
    members: 2,
    maxMembers: 5,
    deadline: '2026-10-31',
    createdAt: '2026-03-01'
  }
];

export async function getProjects(filter = {}) {
  const supabase = getSupabase();
  if (supabase) {
    let query = supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (filter.field) query = query.eq('field', filter.field);
    if (filter.status) query = query.eq('status', filter.status);
    const { data } = await query;
    return data || [];
  }

  let result = [...sampleProjects];
  if (filter.field) result = result.filter(p => p.field === filter.field);
  if (filter.status) result = result.filter(p => p.status === filter.status);
  return result;
}

export async function getProjectById(id) {
  const supabase = getSupabase();
  if (supabase) {
    const { data } = await supabase.from('projects').select('*').eq('id', id).single();
    return data;
  }
  return sampleProjects.find(p => p.id === id) || null;
}

export async function createProject(project) {
  const supabase = getSupabase();
  if (supabase) {
    const { data, error } = await supabase.from('projects').insert(project).select().single();
    if (error) throw error;
    return data;
  }
  const newProject = { ...project, id: String(Date.now()), createdAt: new Date().toISOString().split('T')[0], members: 1 };
  sampleProjects.unshift(newProject);
  return newProject;
}
