-- ============================================
-- Papers - Supabase Schema
-- 연구 프로젝트, 커뮤니티 게시글 테이블
-- (comments 테이블은 기존 것 사용)
-- ============================================

-- 1. Research Projects 테이블 (기존 projects 테이블과 충돌 방지)
CREATE TABLE IF NOT EXISTS research_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  field TEXT NOT NULL CHECK (field IN ('humanities', 'natural-science', 'engineering', 'medical', 'arts')),
  status TEXT NOT NULL DEFAULT 'recruiting' CHECK (status IN ('recruiting', 'in_progress', 'completed')),
  leader_id UUID REFERENCES auth.users(id),
  leader_name TEXT,
  leader_email TEXT,
  members INT DEFAULT 1,
  max_members INT DEFAULT 5,
  deadline DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Community Posts 테이블
CREATE TABLE IF NOT EXISTS community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT NOT NULL CHECK (category IN ('qna', 'review', 'study')),
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT,
  author_email TEXT,
  views INT DEFAULT 0,
  replies INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- RLS (Row Level Security)
-- ============================================

-- Research Projects RLS
ALTER TABLE research_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "research_projects_select_all" ON research_projects
  FOR SELECT USING (true);

CREATE POLICY "research_projects_insert_auth" ON research_projects
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "research_projects_update_owner_or_admin" ON research_projects
  FOR UPDATE USING (
    auth.uid() = leader_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

CREATE POLICY "research_projects_delete_owner_or_admin" ON research_projects
  FOR DELETE USING (
    auth.uid() = leader_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

-- Community Posts RLS
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "community_posts_select_all" ON community_posts
  FOR SELECT USING (true);

CREATE POLICY "community_posts_insert_auth" ON community_posts
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "community_posts_update_owner_or_admin" ON community_posts
  FOR UPDATE USING (
    auth.uid() = author_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

CREATE POLICY "community_posts_delete_owner_or_admin" ON community_posts
  FOR DELETE USING (
    auth.uid() = author_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

-- 3. Thesis Guidance Applications 테이블
CREATE TABLE IF NOT EXISTS thesis_guidance_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  major TEXT NOT NULL,
  topic TEXT NOT NULL,
  schedule TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','reviewing','accepted','rejected')),
  applicant_id UUID REFERENCES auth.users(id),
  applicant_email TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Thesis Guidance Applications RLS
ALTER TABLE thesis_guidance_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "thesis_guidance_applications_select_all" ON thesis_guidance_applications
  FOR SELECT USING (true);

CREATE POLICY "thesis_guidance_applications_insert_auth" ON thesis_guidance_applications
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "thesis_guidance_applications_update_owner_or_admin" ON thesis_guidance_applications
  FOR UPDATE USING (
    auth.uid() = applicant_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

CREATE POLICY "thesis_guidance_applications_delete_owner_or_admin" ON thesis_guidance_applications
  FOR DELETE USING (
    auth.uid() = applicant_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

-- ============================================
-- Indexes
-- ============================================

CREATE INDEX IF NOT EXISTS idx_research_projects_field ON research_projects(field);
CREATE INDEX IF NOT EXISTS idx_research_projects_status ON research_projects(status);
CREATE INDEX IF NOT EXISTS idx_community_posts_category ON community_posts(category);
CREATE INDEX IF NOT EXISTS idx_thesis_guidance_applications_status ON thesis_guidance_applications(status);
