import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getApplications, deleteApplication } from '../../utils/thesisGuidanceStorage';
import '../../styles/admin.css';

const AdminThesisGuidance = () => {
  const { t, lang } = useLanguage();
  const [applications, setApplications] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const load = async () => {
      const data = await getApplications({ status: statusFilter || undefined });
      setApplications(data);
    };
    load();
  }, [statusFilter]);

  const handleDelete = async (id, name) => {
    if (!window.confirm(t('site.admin.confirmDelete') + `\n\n"${name}"`)) return;
    await deleteApplication(id);
    setApplications(prev => prev.filter(a => a.id !== id));
  };

  const statusLabel = (s) => {
    const labels = {
      pending: lang === 'ko' ? '대기중' : 'Pending',
      reviewing: lang === 'ko' ? '검토중' : 'Reviewing',
      accepted: lang === 'ko' ? '승인' : 'Accepted',
      rejected: lang === 'ko' ? '반려' : 'Rejected',
    };
    return labels[s] || s;
  };

  const statusColor = {
    pending: '#6B7280',
    reviewing: '#0046C8',
    accepted: '#00855A',
    rejected: '#DC2626',
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <div className="admin-content-header">
          <h2>{lang === 'ko' ? '논문지도 관리' : 'Guidance Management'}</h2>
        </div>

        <div className="admin-filters">
          {['', 'pending', 'reviewing', 'accepted', 'rejected'].map(s => (
            <button
              key={s}
              className={`admin-filter-btn ${statusFilter === s ? 'active' : ''}`}
              onClick={() => setStatusFilter(s)}
            >
              {s === '' ? (lang === 'ko' ? '전체' : 'All') : statusLabel(s)}
            </button>
          ))}
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{lang === 'ko' ? '이름' : 'Name'}</th>
                <th>{lang === 'ko' ? '전공' : 'Major'}</th>
                <th>{lang === 'ko' ? '논문 주제' : 'Topic'}</th>
                <th>{t('site.admin.status')}</th>
                <th>{t('site.admin.date')}</th>
                <th>{t('site.admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? applications.map(app => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.major}</td>
                  <td className="truncate">{app.topic}</td>
                  <td>
                    <span className="admin-status-badge" style={{ background: statusColor[app.status] }}>
                      {statusLabel(app.status)}
                    </span>
                  </td>
                  <td>{app.createdAt || app.created_at?.split('T')[0]}</td>
                  <td>
                    <div className="admin-actions">
                      <Link to={`/admin/guidance/edit/${app.id}`} className="admin-btn">{t('site.admin.edit')}</Link>
                      <button className="admin-btn danger" onClick={() => handleDelete(app.id, app.name)}>{t('site.admin.delete')}</button>
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

export default AdminThesisGuidance;
