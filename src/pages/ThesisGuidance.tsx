import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { createApplication } from '../utils/thesisGuidanceStorage';

const ThesisGuidance = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  useAOS();

  const [form, setForm] = useState({
    name: '',
    major: '',
    topic: '',
    schedule: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createApplication({
        ...form,
        applicant_id: user?.id,
        applicant_email: user?.email,
      });
      setSubmitted(true);
    } catch (err: any) {
      console.error('Guidance application error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <SEOHead title={t('site.lab.guidance.title')} />
        <section className="page-header">
          <div className="container">
            <h2>{t('site.lab.guidance.title')}</h2>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="empty-state" data-aos="fade-up">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
                {t('site.lab.guidance.success')}
              </h3>
              <p>{t('site.lab.guidance.successDesc')}</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead title={t('site.lab.guidance.title')} description={t('site.lab.guidance.subtitle')} />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.lab.guidance.title')}</h2>
          <p>{t('site.lab.guidance.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-intro">
            <p>{t('site.lab.guidance.desc')}</p>
          </div>

          <form className="guidance-form" onSubmit={handleSubmit} data-aos="fade-up">
            <div className="form-group">
              <label>{t('site.lab.guidance.name')}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t('site.lab.guidance.namePlaceholder')}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('site.lab.guidance.major')}</label>
              <input
                type="text"
                name="major"
                value={form.major}
                onChange={handleChange}
                placeholder={t('site.lab.guidance.majorPlaceholder')}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('site.lab.guidance.topic')}</label>
              <input
                type="text"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                placeholder={t('site.lab.guidance.topicPlaceholder')}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('site.lab.guidance.schedule')}</label>
              <input
                type="text"
                name="schedule"
                value={form.schedule}
                onChange={handleChange}
                placeholder={t('site.lab.guidance.schedulePlaceholder')}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('site.lab.guidance.message')}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t('site.lab.guidance.messagePlaceholder')}
                rows={4}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={submitting} style={{ width: '100%' }}>
              {submitting ? t('site.lab.guidance.submitting') : t('site.lab.guidance.submit')}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ThesisGuidance;
