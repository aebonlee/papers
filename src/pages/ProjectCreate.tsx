import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import SEOHead from '../components/SEOHead';
import { createProject } from '../utils/projectStorage';

const ProjectCreate = () => {
  const { t, lang } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    description: '',
    field: 'engineering',
    maxMembers: 5,
    deadline: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'maxMembers' ? Number(value) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);

    try {
      await createProject({
        title: form.title,
        description: form.description,
        field: form.field,
        status: 'recruiting',
        leader_id: user?.id,
        leader_name: profile?.display_name || user?.email?.split('@')[0] || '',
        leader_email: user?.email || '',
        leader: { name: profile?.display_name || user?.email?.split('@')[0] || '', email: user?.email || '' },
        members: 1,
        maxMembers: form.maxMembers,
        max_members: form.maxMembers,
        deadline: form.deadline || null,
      });
      navigate('/projects');
    } catch (err: any) {
      console.error('Project create error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { value: 'humanities', label: lang === 'ko' ? '인문사회' : 'Humanities' },
    { value: 'natural-science', label: lang === 'ko' ? '자연과학' : 'Natural Science' },
    { value: 'engineering', label: lang === 'ko' ? '공학' : 'Engineering' },
    { value: 'medical', label: lang === 'ko' ? '의학/보건' : 'Medical' },
    { value: 'arts', label: lang === 'ko' ? '예술/체육' : 'Arts' },
  ];

  return (
    <>
      <SEOHead title={t('site.admin.createProject')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.admin.createProject')}</h2>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="board-write" onSubmit={handleSubmit}>
            <h2>{t('site.admin.createProject')}</h2>

            <div className="board-form-group">
              <label>{t('site.projects.projectName')}</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder={lang === 'ko' ? '프로젝트명을 입력하세요' : 'Enter project name'} />
            </div>

            <div className="board-form-group">
              <label>{t('site.projects.description')}</label>
              <textarea name="description" value={form.description} onChange={handleChange} placeholder={lang === 'ko' ? '프로젝트에 대해 설명해주세요' : 'Describe your project'} />
            </div>

            <div className="board-form-row">
              <div className="board-form-group">
                <label>{t('site.projects.field')}</label>
                <select name="field" value={form.field} onChange={handleChange}>
                  {fields.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>
              <div className="board-form-group">
                <label>{t('site.projects.maxMembers')}</label>
                <input type="number" name="maxMembers" value={form.maxMembers} onChange={handleChange} min="1" max="50" />
              </div>
            </div>

            <div className="board-form-group">
              <label>{t('site.projects.deadline')}</label>
              <input type="date" name="deadline" value={form.deadline} onChange={handleChange} />
            </div>

            <div className="board-form-actions">
              <button type="button" className="board-btn" onClick={() => navigate('/projects')}>{lang === 'ko' ? '취소' : 'Cancel'}</button>
              <button type="submit" className="board-btn primary" disabled={loading}>
                {loading ? (lang === 'ko' ? '생성 중...' : 'Creating...') : t('site.projects.create')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProjectCreate;
