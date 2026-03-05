import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getProjectById, createProject, updateProject } from '../../utils/projectStorage';
import '../../styles/admin.css';

const AdminProjectForm = () => {
  const { t, lang } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: '',
    description: '',
    field: 'engineering',
    status: 'recruiting',
    maxMembers: 5,
    deadline: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const load = async () => {
        const project = await getProjectById(id);
        if (project) {
          setForm({
            title: project.title || '',
            description: project.description || '',
            field: project.field || 'engineering',
            status: project.status || 'recruiting',
            maxMembers: project.maxMembers || project.max_members || 5,
            deadline: project.deadline || '',
          });
        }
      };
      load();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'maxMembers' ? Number(value) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);

    try {
      if (isEdit) {
        await updateProject(id, {
          title: form.title,
          description: form.description,
          field: form.field,
          status: form.status,
          max_members: form.maxMembers,
          deadline: form.deadline || null,
        });
      } else {
        await createProject({
          title: form.title,
          description: form.description,
          field: form.field,
          status: form.status,
          leader_id: user?.id,
          leader_name: profile?.display_name || user?.email?.split('@')[0] || '',
          leader_email: user?.email || '',
          leader: { name: profile?.display_name || user?.email?.split('@')[0] || '', email: user?.email || '' },
          members: 1,
          maxMembers: form.maxMembers,
          max_members: form.maxMembers,
          deadline: form.deadline || null,
        });
      }
      navigate('/admin/projects');
    } catch (err) {
      console.error('Project save error:', err);
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

  const statuses = [
    { value: 'recruiting', label: t('site.projects.recruiting') },
    { value: 'in_progress', label: t('site.projects.inProgress') },
    { value: 'completed', label: t('site.projects.completed') },
  ];

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2>{isEdit ? t('site.admin.edit') : t('site.admin.create')} - {t('site.admin.projectForm')}</h2>

          <div className="board-form-group">
            <label>{t('site.admin.title')}</label>
            <input type="text" name="title" value={form.title} onChange={handleChange} required />
          </div>

          <div className="board-form-group">
            <label>{t('site.admin.description')}</label>
            <textarea name="description" value={form.description} onChange={handleChange} style={{ minHeight: '150px' }} />
          </div>

          <div className="board-form-row">
            <div className="board-form-group">
              <label>{t('site.admin.field')}</label>
              <select name="field" value={form.field} onChange={handleChange}>
                {fields.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
              </select>
            </div>
            <div className="board-form-group">
              <label>{t('site.admin.status')}</label>
              <select name="status" value={form.status} onChange={handleChange}>
                {statuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
          </div>

          <div className="board-form-row">
            <div className="board-form-group">
              <label>{lang === 'ko' ? '최대 인원' : 'Max Members'}</label>
              <input type="number" name="maxMembers" value={form.maxMembers} onChange={handleChange} min="1" max="50" />
            </div>
            <div className="board-form-group">
              <label>{lang === 'ko' ? '마감일' : 'Deadline'}</label>
              <input type="date" name="deadline" value={form.deadline} onChange={handleChange} />
            </div>
          </div>

          <div className="board-form-actions">
            <button type="button" className="board-btn" onClick={() => navigate('/admin/projects')}>{t('site.admin.cancel')}</button>
            <button type="submit" className="board-btn primary" disabled={loading}>
              {loading ? (lang === 'ko' ? '저장 중...' : 'Saving...') : t('site.admin.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProjectForm;
