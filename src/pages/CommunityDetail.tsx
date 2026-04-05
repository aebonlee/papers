import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import SEOHead from '../components/SEOHead';
import CommentSection from '../components/CommentSection';
import { getPostById, deletePost } from '../utils/communityStorage';

const categoryColors = { qna: '#0046C8', review: '#C87200', study: '#00855A', showcase: '#FFB800', schedule: '#00A0B0' };

const CommunityDetail = () => {
  const { postId } = useParams();
  const { t, lang } = useLanguage();
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getPostById(postId);
      setPost(data);
      setLoading(false);
    };
    load();
  }, [postId]);

  const isOwner = user && post && (
    user.id === post.author_id ||
    user.email === post.author?.email ||
    user.email === post.author_email
  );

  const canManage = isOwner || isAdmin;

  const handleDelete = async () => {
    const msg = lang === 'ko' ? '정말 삭제하시겠습니까?' : 'Are you sure you want to delete?';
    if (!window.confirm(msg + `\n\n"${post.title}"`)) return;
    try {
      await deletePost(post.id);
      navigate('/community');
    } catch (err: any) {
      console.error('Delete error:', err);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <section className="section">
        <div className="container text-center">
          <h2>404</h2>
          <p>{lang === 'ko' ? '게시글을 찾을 수 없습니다.' : 'Post not found.'}</p>
          <Link to="/community" className="btn btn-primary" style={{ marginTop: '20px' }}>
            {lang === 'ko' ? '커뮤니티로 돌아가기' : 'Back to Community'}
          </Link>
        </div>
      </section>
    );
  }

  const catKey = post.category;

  return (
    <>
      <SEOHead title={post.title} description={post.content.slice(0, 160)} />

      <section className="page-header">
        <div className="container">
          <span className="post-detail-category" style={{ background: categoryColors[post.category] }}>
            {t(`site.community.${catKey}`)}
          </span>
          <h2>{post.title}</h2>
          <div className="post-detail-meta">
            <span>{post.author?.name || post.author_name}</span>
            <span>{post.createdAt}</span>
            <span>{t('site.community.views')}: {post.views}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="post-detail-content">
            <p>{post.content}</p>
          </div>

          {canManage && (
            <div className="post-detail-actions" style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', margin: '24px 0' }}>
              <Link to={`/community/edit/${post.id}`} className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '14px' }}>
                {lang === 'ko' ? '수정' : 'Edit'}
              </Link>
              <button onClick={handleDelete} className="btn" style={{ padding: '8px 20px', fontSize: '14px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                {lang === 'ko' ? '삭제' : 'Delete'}
              </button>
            </div>
          )}

          <div className="post-detail-comments">
            <CommentSection postType="community" postId={postId} />
          </div>

          <div className="text-center mt-4">
            <Link to="/community" className="btn btn-secondary">
              {lang === 'ko' ? '← 목록으로 돌아가기' : '← Back to List'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityDetail;
