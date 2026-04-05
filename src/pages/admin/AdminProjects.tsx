import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getProjects, deleteProject } from '../../utils/projectStorage';
import '../../styles/admin.css';

const statusColors = { recruiting: '#00855A', in_progress: '#0046C8', completed: '#6B7280' };

const fieldLabels = {
  ko: { humanities: '인문사회', 'natural-science': '자연과학', engineering: '공학', medical: '의학/보건', arts: '예술/체육' },
  en: { humanities: 'Humanities', 'natural-science': 'Natural Sci.', engineering: 'Engineering', medical: 'Medical', arts: 'Arts' }
};

const AdminProjects = () => {
  const { t, lang } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const labels = fieldLabels[lang] || fieldLabels.ko;

  useEffect(() => {
    const load = async () => {
      const data = await getProjects({ status: statusFilter || undefined });
      setProjects(data);
    };
    load();
  }, [statusFilter]);

  const handleDelete = async (id, title) => {
    if (!window.confirm(t('site.admin.confirmDelete') + `\n\n"${title}"`)) return;
    await deleteProject(id);
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <div className="admin-content-header">
          <h2>{t('site.admin.projects')}</h2>
          <Link to="/admin/projects/new" className="admin-btn primary">{t('site.admin.create')}</Link>
        </div>

        <div className="admin-filters">
          {['', 'recruiting', 'in_progress', 'completed'].map(s => (
            <button
              key={s}
              className={`admin-filter-btn ${statusFilter === s ? 'active' : ''}`}
              onClick={() => setStatusFilter(s)}
            >
              {s === '' ? (lang === 'ko' ? '전체' : 'All') :
               s === 'recruiting' ? t('site.projects.recruiting') :
               s === 'in_progress' ? t('site.projects.inProgress') :
               t('site.projects.completed')}
            </button>
          ))}
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('site.admin.title')}</th>
                <th>{t('site.admin.field')}</th>
                <th>{t('site.admin.status')}</th>
                <th>{lang === 'ko' ? '리더' : 'Leader'}</th>
                <th>{t('site.admin.date')}</th>
                <th>{t('site.admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? projects.map(project => (
                <tr key={project.id}>
                  <td className="truncate">{project.title}</td>
                  <td>{labels[project.field] || project.field}</td>
                  <td>
                    <span className="admin-status-badge" style={{ background: statusColors[project.status] }}>
                      {project.status === 'recruiting' ? t('site.projects.recruiting') :
                       project.status === 'in_progress' ? t('site.projects.inProgress') :
                       t('site.projects.completed')}
                    </span>
                  </td>
                  <td>{project.leader?.name || project.leader_name || '-'}</td>
                  <td>{project.createdAt || project.created_at?.split('T')[0]}</td>
                  <td>
                    <div className="admin-actions">
                      <Link to={`/admin/projects/edit/${project.id}`} className="admin-btn">{t('site.admin.edit')}</Link>
                      <button className="admin-btn danger" onClick={() => handleDelete(project.id, project.title)}>{t('site.admin.delete')}</button>
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

export default AdminProjects;
