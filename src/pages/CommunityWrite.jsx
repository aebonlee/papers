import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import SEOHead from '../components/SEOHead';
import { createPost } from '../utils/communityStorage';

const CommunityWrite = () => {
  const { t, lang } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    content: '',
    category: 'qna',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);

    try {
      await createPost({
        title: form.title,
        content: form.content,
        category: form.category,
        author_id: user?.id,
        author_name: profile?.display_name || user?.email?.split('@')[0] || '',
        author_email: user?.email || '',
        author: { name: profile?.display_name || user?.email?.split('@')[0] || '', email: user?.email || '' },
      });
      navigate('/community');
    } catch (err) {
      console.error('Post create error:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'qna', label: 'Q&A' },
    { value: 'review', label: lang === 'ko' ? '논문 리뷰' : 'Paper Review' },
    { value: 'study', label: lang === 'ko' ? '스터디 모집' : 'Study Groups' },
  ];

  return (
    <>
      <SEOHead title={t('site.admin.writePost')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.admin.writePost')}</h2>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="board-write" onSubmit={handleSubmit}>
            <h2>{t('site.admin.writePost')}</h2>

            <div className="board-form-group">
              <label>{t('site.community.postTitle')}</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder={lang === 'ko' ? '제목을 입력하세요' : 'Enter title'} />
            </div>

            <div className="board-form-group">
              <label>{t('site.community.category')}</label>
              <select name="category" value={form.category} onChange={handleChange}>
                {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>

            <div className="board-form-group">
              <label>{t('site.community.postContent')}</label>
              <textarea name="content" value={form.content} onChange={handleChange} placeholder={lang === 'ko' ? '내용을 입력하세요' : 'Enter content'} />
            </div>

            <div className="board-form-actions">
              <button type="button" className="board-btn" onClick={() => navigate('/community')}>{lang === 'ko' ? '취소' : 'Cancel'}</button>
              <button type="submit" className="board-btn primary" disabled={loading}>
                {loading ? (lang === 'ko' ? '등록 중...' : 'Posting...') : t('site.community.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CommunityWrite;
