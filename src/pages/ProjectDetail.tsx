import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import CommentSection from '../components/CommentSection';
import { getProjectById } from '../utils/projectStorage';

const fieldLabels = {
  ko: { humanities: '인문사회', 'natural-science': '자연과학', engineering: '공학', medical: '의학/보건', arts: '예술/체육' },
  en: { humanities: 'Humanities', 'natural-science': 'Natural Sci.', engineering: 'Engineering', medical: 'Medical', arts: 'Arts' }
};

const statusColors = { recruiting: '#00855A', in_progress: '#0046C8', completed: '#6B7280' };

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t, lang } = useLanguage();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getProjectById(projectId);
      setProject(data);
      setLoading(false);
    };
    load();
  }, [projectId]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <section className="section">
        <div className="container text-center">
          <h2>404</h2>
          <p>{lang === 'ko' ? '프로젝트를 찾을 수 없습니다.' : 'Project not found.'}</p>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '20px' }}>
            {lang === 'ko' ? '프로젝트 목록으로' : 'Back to Projects'}
          </Link>
        </div>
      </section>
    );
  }

  const labels = fieldLabels[lang] || fieldLabels.ko;
  const statusKey = project.status === 'recruiting' ? 'recruiting' : project.status === 'in_progress' ? 'inProgress' : 'completed';

  return (
    <>
      <SEOHead title={project.title} description={project.description} />

      <section className="page-header">
        <div className="container">
          <h2>{project.title}</h2>
          <p>{labels[project.field]}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-detail-layout">
            {/* Main content */}
            <div className="project-detail-main">
              <div className="detail-card">
                <h3>{t('site.projects.projectDesc')}</h3>
                <p className="project-full-desc">{project.description}</p>
              </div>

              {/* Discussion */}
              <div className="detail-card">
                <h3>{t('site.projects.discussion')}</h3>
                <CommentSection postType="project" postId={projectId} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="project-detail-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-item">
                  <strong>{t('site.projects.status')}</strong>
                  <span className="project-status" style={{ background: statusColors[project.status] }}>
                    {t(`site.projects.${statusKey}`)}
                  </span>
                </div>
                <div className="sidebar-item">
                  <strong>{t('site.projects.leader')}</strong>
                  <span>{project.leader.name}</span>
                </div>
                <div className="sidebar-item">
                  <strong>{t('site.projects.members')}</strong>
                  <span>{project.members} / {project.maxMembers}</span>
                </div>
                <div className="sidebar-item">
                  <strong>{t('site.projects.deadline')}</strong>
                  <span>{project.deadline}</span>
                </div>
                <div className="sidebar-item">
                  <strong>{t('site.projects.field')}</strong>
                  <span>{labels[project.field]}</span>
                </div>

                {project.status === 'recruiting' && project.members < project.maxMembers && (
                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                    {t('site.projects.joinProject')}
                  </button>
                )}
              </div>

              <Link to="/projects" className="btn btn-secondary" style={{ width: '100%', marginTop: '12px' }}>
                {lang === 'ko' ? '← 목록으로' : '← Back to List'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
