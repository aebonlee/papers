import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { getPosts } from '../utils/communityStorage';

const categoryIcons = { qna: '❓', review: '📋', study: '📚' };
const categoryColors = { qna: '#0046C8', review: '#C87200', study: '#00855A' };

const Community = () => {
  const { t } = useLanguage();
  useAOS();
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const load = async () => {
      const data = await getPosts({ category: category || undefined });
      setPosts(data);
    };
    load();
  }, [category]);

  const categories = [
    { key: '', label: t('site.community.allPosts') },
    { key: 'qna', label: t('site.community.qna') },
    { key: 'review', label: t('site.community.review') },
    { key: 'study', label: t('site.community.study') }
  ];

  return (
    <>
      <SEOHead title={t('site.community.title')} description={t('site.community.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.community.title')}</h2>
          <p>{t('site.community.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="community-filters">
            <div className="filter-group">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-btn ${category === cat.key ? 'active' : ''}`}
                  onClick={() => setCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {posts.length > 0 ? (
            <div className="posts-list">
              {posts.map((post, i) => {
                const catKey = post.category === 'qna' ? 'qna' : post.category === 'review' ? 'review' : 'study';
                return (
                  <Link to={`/community/${post.id}`} className="post-card" key={post.id} data-aos="fade-up" data-aos-delay={i * 60}>
                    <div className="post-category" style={{ background: categoryColors[post.category] }}>
                      {categoryIcons[post.category]} {t(`site.community.${catKey}`)}
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-preview">{post.content.slice(0, 100)}...</p>
                    <div className="post-meta">
                      <span>{t('site.community.author')}: {post.author.name}</span>
                      <span>{t('site.community.views')}: {post.views}</span>
                      <span>{t('site.community.replies')}: {post.replies}</span>
                      <span>{post.createdAt}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <p>{t('site.community.noPosts')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Community;
