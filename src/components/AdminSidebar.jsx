import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const AdminSidebar = () => {
  const { t, lang } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { path: '/admin', label: t('site.admin.dashboard'), icon: 'dashboard' },
    { path: '/admin/projects', label: t('site.admin.projects'), icon: 'projects' },
    { path: '/admin/community', label: t('site.admin.community'), icon: 'community' },
    { path: '/admin/materials', label: lang === 'ko' ? '학습자료 관리' : 'Materials Management', icon: 'materials' },
    { path: '/admin/guidance', label: lang === 'ko' ? '논문 멘토링 관리' : 'Mentoring Management', icon: 'guidance' },
  ];

  const isActive = (path) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <Link to="/">
          <h3>Papers Admin</h3>
        </Link>
      </div>
      <nav className="admin-sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`admin-sidebar-link ${isActive(item.path) ? 'active' : ''}`}
          >
            {item.icon === 'dashboard' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            )}
            {item.icon === 'projects' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            )}
            {item.icon === 'community' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            )}
            {item.icon === 'materials' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            )}
            {item.icon === 'guidance' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            )}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="admin-sidebar-footer">
        <Link to="/" className="admin-sidebar-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          <span>{lang === 'ko' ? '사이트로 돌아가기' : 'Back to Site'}</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
