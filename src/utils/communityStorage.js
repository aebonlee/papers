import getSupabase from './supabase';

// Supabase row(snake_case) → 컴포넌트 형식(camelCase + nested) 변환
function normalizePost(row) {
  if (!row) return null;
  return {
    ...row,
    author: { name: row.author_name || '', email: row.author_email || '' },
    createdAt: row.created_at ? row.created_at.split('T')[0] : row.createdAt,
  };
}

// 컴포넌트 데이터 → Supabase insert용 변환
function toSupabaseRow(data) {
  return {
    title: data.title,
    content: data.content,
    category: data.category,
    author_id: data.author_id,
    author_name: data.author_name || data.author?.name || '',
    author_email: data.author_email || data.author?.email || '',
  };
}

const samplePosts = [
  {
    id: '1',
    title: '석사논문 서론 작성 시 연구 배경 범위는 어느 정도가 적당한가요?',
    content: '서론에서 연구 배경을 너무 넓게 잡으면 초점이 흐려지고, 너무 좁으면 연구의 필요성이 약해지는 것 같습니다. 적정 범위에 대한 조언을 부탁드립니다.',
    category: 'qna',
    author: { name: '김석사', email: 'master@example.com' },
    views: 156,
    replies: 8,
    createdAt: '2026-03-01'
  },
  {
    id: '2',
    title: '[리뷰 요청] 교육공학 분야 연구방법 부분 피드백 부탁드립니다',
    content: '교육공학 분야의 석사 논문 연구방법 부분을 작성했습니다. 설문조사 설계와 표본추출에 대한 피드백을 받고 싶습니다.',
    category: 'review',
    author: { name: '이교육', email: 'edu@example.com' },
    views: 89,
    replies: 5,
    createdAt: '2026-02-28'
  },
  {
    id: '3',
    title: '[스터디 모집] SPSS 통계분석 스터디 (매주 토요일)',
    content: '매주 토요일 오전 10시에 온라인으로 SPSS 통계분석 스터디를 진행합니다. 기초부터 회귀분석까지 함께 공부할 분을 모집합니다. 현재 3명이며 5명까지 모집합니다.',
    category: 'study',
    author: { name: '박통계', email: 'stats@example.com' },
    views: 234,
    replies: 12,
    createdAt: '2026-02-25'
  },
  {
    id: '4',
    title: 'APA 7판에서 2차 인용 표기법이 궁금합니다',
    content: '원전을 직접 구할 수 없어 2차 인용을 해야 하는데, APA 7판에서의 정확한 표기 방법을 알고 싶습니다.',
    category: 'qna',
    author: { name: '최참고', email: 'ref@example.com' },
    views: 312,
    replies: 15,
    createdAt: '2026-02-20'
  },
  {
    id: '5',
    title: '[스터디 모집] 질적 연구방법론 함께 공부하실 분',
    content: '근거이론, 현상학적 연구, 내러티브 연구 등 질적 연구방법론을 함께 공부할 대학원생을 모집합니다.',
    category: 'study',
    author: { name: '정질적', email: 'qual@example.com' },
    views: 178,
    replies: 7,
    createdAt: '2026-02-18'
  },
  {
    id: '6',
    title: '[리뷰 요청] 간호학 논문 문헌고찰 구성에 대한 피드백',
    content: '간호학 석사논문의 문헌고찰 부분을 주제별로 정리했는데, 구성이 논리적인지 피드백 부탁드립니다.',
    category: 'review',
    author: { name: '한간호', email: 'nurse@example.com' },
    views: 67,
    replies: 3,
    createdAt: '2026-02-15'
  },
  {
    id: '7',
    title: '🎉 KCI 등재지에 첫 논문이 게재되었습니다!',
    content: '2년간 준비한 교육공학 분야 논문이 드디어 KCI 등재지에 게재 승인되었습니다. 심사 과정에서 3차례 수정을 거쳤고, 이 커뮤니티에서 받은 피드백이 큰 도움이 되었습니다. 감사합니다!',
    category: 'showcase',
    author: { name: '윤게재', email: 'publish@example.com' },
    views: 245,
    replies: 18,
    createdAt: '2026-02-12'
  },
  {
    id: '8',
    title: '📅 2026년 상반기 주요 학술지 투고 마감일 안내',
    content: '2026년 상반기 주요 학술지 투고 마감일을 정리했습니다.\n- 한국교육학연구: 3월 31일\n- 경영학연구: 4월 15일\n- 한국심리학회지: 5월 1일\n투고 준비 중이신 분들 참고하세요.',
    category: 'schedule',
    author: { name: '조일정', email: 'schedule@example.com' },
    views: 189,
    replies: 6,
    createdAt: '2026-02-10'
  }
];

export async function getPosts(filter = {}) {
  const supabase = getSupabase();
  if (supabase) {
    let query = supabase.from('pp_community_posts').select('*').order('created_at', { ascending: false });
    if (filter.category) query = query.eq('category', filter.category);
    const { data } = await query;
    return (data || []).map(normalizePost);
  }

  let result = [...samplePosts];
  if (filter.category) result = result.filter(p => p.category === filter.category);
  return result;
}

export async function getPostById(id) {
  const supabase = getSupabase();
  if (supabase) {
    const { data } = await supabase.from('pp_community_posts').select('*').eq('id', id).single();
    return normalizePost(data);
  }
  return samplePosts.find(p => p.id === id) || null;
}

export async function createPost(post) {
  const supabase = getSupabase();
  if (supabase) {
    const row = toSupabaseRow(post);
    const { data, error } = await supabase.from('pp_community_posts').insert(row).select().single();
    if (error) throw error;
    return normalizePost(data);
  }
  const newPost = { ...post, id: String(Date.now()), views: 0, replies: 0, createdAt: new Date().toISOString().split('T')[0] };
  samplePosts.unshift(newPost);
  return newPost;
}

export async function updatePost(id, updates) {
  const supabase = getSupabase();
  if (supabase) {
    const row = {};
    if (updates.title !== undefined) row.title = updates.title;
    if (updates.content !== undefined) row.content = updates.content;
    if (updates.category !== undefined) row.category = updates.category;
    if (updates.author_name !== undefined || updates.author?.name !== undefined)
      row.author_name = updates.author_name || updates.author?.name;
    if (updates.author_email !== undefined || updates.author?.email !== undefined)
      row.author_email = updates.author_email || updates.author?.email;
    const { data, error } = await supabase.from('pp_community_posts').update(row).eq('id', id).select().single();
    if (error) throw error;
    return normalizePost(data);
  }
  const idx = samplePosts.findIndex(p => p.id === id);
  if (idx !== -1) {
    samplePosts[idx] = { ...samplePosts[idx], ...updates };
    return samplePosts[idx];
  }
  return null;
}

export async function deletePost(id) {
  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from('pp_community_posts').delete().eq('id', id);
    if (error) throw error;
    return true;
  }
  const idx = samplePosts.findIndex(p => p.id === id);
  if (idx !== -1) samplePosts.splice(idx, 1);
  return true;
}

export async function getPostsCount() {
  const supabase = getSupabase();
  if (supabase) {
    const { count } = await supabase.from('pp_community_posts').select('*', { count: 'exact', head: true });
    return count || 0;
  }
  return samplePosts.length;
}
