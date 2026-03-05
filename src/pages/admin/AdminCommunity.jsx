import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getPosts, deletePost } from '../../utils/communityStorage';
import '../../styles/admin.css';

const AdminCommunity = () => {
  const { t, lang } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const load = async () => {
      const data = await getPosts({ category: categoryFilter || undefined });
      setPosts(data);
    };
    load();
  }, [categoryFilter]);

  const handleDelete = async (id, title) => {
    if (!window.confirm(t('site.admin.confirmDelete') + `\n\n"${title}"`)) return;
    await deletePost(id);
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const categoryLabel = (cat) => {
    if (cat === 'qna') return 'Q&A';
    if (cat === 'review') return lang === 'ko' ? '논문 리뷰' : 'Paper Review';
    return lang === 'ko' ? '스터디' : 'Study';
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <div className="admin-content-header">
          <h2>{t('site.admin.community')}</h2>
          <Link to="/admin/community/new" className="admin-btn primary">{t('site.admin.create')}</Link>
        </div>

        <div className="admin-filters">
          {['', 'qna', 'review', 'study'].map(c => (
            <button
              key={c}
              className={`admin-filter-btn ${categoryFilter === c ? 'active' : ''}`}
              onClick={() => setCategoryFilter(c)}
            >
              {c === '' ? (lang === 'ko' ? '전체' : 'All') : categoryLabel(c)}
            </button>
          ))}
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('site.admin.title')}</th>
                <th>{t('site.admin.category')}</th>
                <th>{t('site.admin.author')}</th>
                <th>{lang === 'ko' ? '조회' : 'Views'}</th>
                <th>{t('site.admin.date')}</th>
                <th>{t('site.admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0 ? posts.map(post => (
                <tr key={post.id}>
                  <td className="truncate">{post.title}</td>
                  <td>{categoryLabel(post.category)}</td>
                  <td>{post.author?.name || post.author_name || '-'}</td>
                  <td>{post.views}</td>
                  <td>{post.createdAt || post.created_at?.split('T')[0]}</td>
                  <td>
                    <div className="admin-actions">
                      <Link to={`/admin/community/edit/${post.id}`} className="admin-btn">{t('site.admin.edit')}</Link>
                      <button className="admin-btn danger" onClick={() => handleDelete(post.id, post.title)}>{t('site.admin.delete')}</button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan="6" className="admin-empty">{t('site.admin.noData')}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCommunity;
