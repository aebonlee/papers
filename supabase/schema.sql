-- ============================================
-- Papers - Supabase Schema
-- 프로젝트, 커뮤니티 게시글, 댓글 테이블
-- ============================================

-- 1. Projects 테이블
CREATE TABLE IF NOT EXISTS projects (
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

-- 3. Comments 테이블
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL,
  post_type TEXT NOT NULL CHECK (post_type IN ('project', 'community')),
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- RLS (Row Level Security)
-- ============================================

-- Projects RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "projects_select_all" ON projects
  FOR SELECT USING (true);

CREATE POLICY "projects_insert_auth" ON projects
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "projects_update_owner_or_admin" ON projects
  FOR UPDATE USING (
    auth.uid() = leader_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

CREATE POLICY "projects_delete_owner_or_admin" ON projects
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

-- Comments RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "comments_select_all" ON comments
  FOR SELECT USING (true);

CREATE POLICY "comments_insert_auth" ON comments
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "comments_update_owner_or_admin" ON comments
  FOR UPDATE USING (
    auth.uid() = author_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

CREATE POLICY "comments_delete_owner_or_admin" ON comments
  FOR DELETE USING (
    auth.uid() = author_id
    OR auth.jwt() ->> 'email' IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr')
  );

-- ============================================
-- Indexes
-- ============================================

CREATE INDEX IF NOT EXISTS idx_projects_field ON projects(field);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_community_posts_category ON community_posts(category);
CREATE INDEX IF NOT EXISTS idx_comments_post ON comments(post_id, post_type);
