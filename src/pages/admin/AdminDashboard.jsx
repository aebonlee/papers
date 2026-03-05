import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getProjects, getProjectsCount } from '../../utils/projectStorage';
import { getPosts, getPostsCount } from '../../utils/communityStorage';
import { getApplicationsCount } from '../../utils/thesisGuidanceStorage';
import '../../styles/admin.css';

const statusColors = { recruiting: '#00855A', in_progress: '#0046C8', completed: '#6B7280' };

const AdminDashboard = () => {
  const { t, lang } = useLanguage();
  const [stats, setStats] = useState({ totalProjects: 0, recruitingProjects: 0, totalPosts: 0, totalGuidance: 0 });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [projects, posts, projectCount, postCount, guidanceCount] = await Promise.all([
        getProjects(),
        getPosts(),
        getProjectsCount(),
        getPostsCount(),
        getApplicationsCount(),
      ]);
      const recruiting = projects.filter(p => p.status === 'recruiting').length;
      setStats({ totalProjects: projectCount, recruitingProjects: recruiting, totalPosts: postCount, totalGuidance: guidanceCount });
      setRecentProjects(projects.slice(0, 5));
      setRecentPosts(posts.slice(0, 5));
    };
    load();
  }, []);

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <div className="admin-content-header">
          <h2>{t('site.admin.dashboard')}</h2>
        </div>

        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="stat-label">{t('site.admin.totalProjects')}</div>
            <div className="stat-value">{stats.totalProjects}</div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-label">{t('site.admin.recruitingProjects')}</div>
            <div className="stat-value">{stats.recruitingProjects}</div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-label">{t('site.admin.totalPosts')}</div>
            <div className="stat-value">{stats.totalPosts}</div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-label">{lang === 'ko' ? '논문지도 신청' : 'Guidance Applications'}</div>
            <div className="stat-value">{stats.totalGuidance}</div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="admin-table-wrapper">
          <div className="admin-table-header">
            <h3>{t('site.admin.recentProjects')}</h3>
            <Link to="/admin/projects" className="admin-btn">{t('site.admin.viewAll')}</Link>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('site.admin.title')}</th>
                <th>{t('site.admin.field')}</th>
                <th>{t('site.admin.status')}</th>
                <th>{t('site.admin.date')}</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.length > 0 ? recentProjects.map(project => (
                <tr key={project.id}>
                  <td className="truncate">
                    <Link to={`/admin/projects/edit/${project.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {project.title}
                    </Link>
                  </td>
                  <td>{project.field}</td>
                  <td>
                    <span className="admin-status-badge" style={{ background: statusColors[project.status] }}>
                      {project.status === 'recruiting' ? t('site.projects.recruiting') :
                       project.status === 'in_progress' ? t('site.projects.inProgress') :
                       t('site.projects.completed')}
                    </span>
                  </td>
                  <td>{project.createdAt || project.created_at?.split('T')[0]}</td>
                </tr>
              )) : (
                <tr><td colSpan="4" className="admin-empty">{t('site.admin.noData')}</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Recent Posts */}
        <div className="admin-table-wrapper">
          <div className="admin-table-header">
            <h3>{t('site.admin.recentPosts')}</h3>
            <Link to="/admin/community" className="admin-btn">{t('site.admin.viewAll')}</Link>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('site.admin.title')}</th>
                <th>{t('site.admin.category')}</th>
                <th>{t('site.admin.author')}</th>
                <th>{t('site.admin.date')}</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.length > 0 ? recentPosts.map(post => (
                <tr key={post.id}>
                  <td className="truncate">
                    <Link to={`/admin/community/edit/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.category === 'qna' ? 'Q&A' : post.category === 'review' ? (lang === 'ko' ? '논문 리뷰' : 'Paper Review') : (lang === 'ko' ? '스터디' : 'Study')}</td>
                  <td>{post.author?.name || post.author_name || '-'}</td>
                  <td>{post.createdAt || post.created_at?.split('T')[0]}</td>
                </tr>
              )) : (
                <tr><td colSpan="4" className="admin-empty">{t('site.admin.noData')}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
