import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const AdminSidebar = () => {
  const { t, lang } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { path: '/admin', label: t('site.admin.dashboard'), icon: 'dashboard' },
    { path: '/admin/projects', label: t('site.admin.projects'), icon: 'projects' },
    { path: '/admin/community', label: t('site.admin.community'), icon: 'community' },
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
