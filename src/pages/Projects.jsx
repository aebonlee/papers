import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { getProjects } from '../utils/projectStorage';

const fieldLabels = {
  ko: { humanities: '인문사회', 'natural-science': '자연과학', engineering: '공학', medical: '의학/보건', arts: '예술/체육' },
  en: { humanities: 'Humanities', 'natural-science': 'Natural Sci.', engineering: 'Engineering', medical: 'Medical', arts: 'Arts' }
};

const statusColors = { recruiting: '#00855A', in_progress: '#0046C8', completed: '#6B7280' };

const Projects = () => {
  const { t, lang } = useLanguage();
  useAOS();
  const [projects, setProjects] = useState([]);
  const [fieldFilter, setFieldFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const load = async () => {
      const data = await getProjects({ field: fieldFilter || undefined, status: statusFilter || undefined });
      setProjects(data);
    };
    load();
  }, [fieldFilter, statusFilter]);

  const fields = ['humanities', 'natural-science', 'engineering', 'medical', 'arts'];
  const labels = fieldLabels[lang] || fieldLabels.ko;

  return (
    <>
      <SEOHead title={t('site.projects.title')} description={t('site.projects.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.projects.title')}</h2>
          <p>{t('site.projects.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-filters">
            <div className="filter-group">
              <button className={`filter-btn ${!fieldFilter ? 'active' : ''}`} onClick={() => setFieldFilter('')}>
                {t('site.projects.allFields')}
              </button>
              {fields.map(f => (
                <button key={f} className={`filter-btn ${fieldFilter === f ? 'active' : ''}`} onClick={() => setFieldFilter(f)}>
                  {labels[f]}
                </button>
              ))}
            </div>
            <div className="filter-group">
              <button className={`filter-btn ${!statusFilter ? 'active' : ''}`} onClick={() => setStatusFilter('')}>
                {lang === 'ko' ? '전체 상태' : 'All Status'}
              </button>
              <button className={`filter-btn ${statusFilter === 'recruiting' ? 'active' : ''}`} onClick={() => setStatusFilter('recruiting')}>
                {t('site.projects.recruiting')}
              </button>
              <button className={`filter-btn ${statusFilter === 'in_progress' ? 'active' : ''}`} onClick={() => setStatusFilter('in_progress')}>
                {t('site.projects.inProgress')}
              </button>
              <button className={`filter-btn ${statusFilter === 'completed' ? 'active' : ''}`} onClick={() => setStatusFilter('completed')}>
                {t('site.projects.completed')}
              </button>
            </div>
          </div>

          {projects.length > 0 ? (
            <div className="projects-grid">
              {projects.map((project, i) => {
                const statusKey = project.status === 'recruiting' ? 'recruiting' : project.status === 'in_progress' ? 'inProgress' : 'completed';
                return (
                  <div className="project-card" key={project.id} data-aos="fade-up" data-aos-delay={i * 80}>
                    <div className="project-header">
                      <span className="project-field-tag">{labels[project.field]}</span>
                      <span className="project-status" style={{ background: statusColors[project.status] }}>
                        {t(`site.projects.${statusKey}`)}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-meta">
                      <span>{t('site.projects.leader')}: {project.leader.name}</span>
                      <span>{t('site.projects.members')}: {project.members}/{project.maxMembers}</span>
                      <span>{t('site.projects.deadline')}: {project.deadline}</span>
                    </div>
                    <Link to={`/projects/${project.id}`} className="btn btn-secondary project-btn">
                      {t('site.projects.viewDetail')}
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <p>{t('site.projects.noProjects')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
