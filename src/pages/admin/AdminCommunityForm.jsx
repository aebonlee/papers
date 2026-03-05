import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getPostById, createPost, updatePost } from '../../utils/communityStorage';
import '../../styles/admin.css';

const AdminCommunityForm = () => {
  const { t, lang } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: '',
    content: '',
    category: 'qna',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const load = async () => {
        const post = await getPostById(id);
        if (post) {
          setForm({
            title: post.title || '',
            content: post.content || '',
            category: post.category || 'qna',
          });
        }
      };
      load();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);

    try {
      if (isEdit) {
        await updatePost(id, {
          title: form.title,
          content: form.content,
          category: form.category,
        });
      } else {
        await createPost({
          title: form.title,
          content: form.content,
          category: form.category,
          author_id: user?.id,
          author_name: profile?.display_name || user?.email?.split('@')[0] || '',
          author_email: user?.email || '',
          author: { name: profile?.display_name || user?.email?.split('@')[0] || '', email: user?.email || '' },
        });
      }
      navigate('/admin/community');
    } catch (err) {
      console.error('Post save error:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'qna', label: 'Q&A' },
    { value: 'review', label: lang === 'ko' ? '논문 리뷰' : 'Paper Review' },
    { value: 'study', label: lang === 'ko' ? '스터디 모집' : 'Study Groups' },
    { value: 'showcase', label: lang === 'ko' ? '논문게재 자랑' : 'Paper Showcase' },
    { value: 'schedule', label: lang === 'ko' ? '게재일정안내' : 'Publication Schedule' },
  ];

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2>{isEdit ? t('site.admin.edit') : t('site.admin.create')} - {t('site.admin.communityForm')}</h2>

          <div className="board-form-group">
            <label>{t('site.admin.title')}</label>
            <input type="text" name="title" value={form.title} onChange={handleChange} required />
          </div>

          <div className="board-form-group">
            <label>{t('site.admin.category')}</label>
            <select name="category" value={form.category} onChange={handleChange}>
              {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '내용' : 'Content'}</label>
            <textarea name="content" value={form.content} onChange={handleChange} style={{ minHeight: '250px' }} />
          </div>

          <div className="board-form-actions">
            <button type="button" className="board-btn" onClick={() => navigate('/admin/community')}>{t('site.admin.cancel')}</button>
            <button type="submit" className="board-btn primary" disabled={loading}>
              {loading ? (lang === 'ko' ? '저장 중...' : 'Saving...') : t('site.admin.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCommunityForm;
