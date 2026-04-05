import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getApplicationById, updateApplication } from '../../utils/thesisGuidanceStorage';
import '../../styles/admin.css';

const AdminThesisGuidanceForm = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: '',
    major: '',
    topic: '',
    schedule: '',
    message: '',
    status: 'pending',
    applicantEmail: '',
    createdAt: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const app = await getApplicationById(id);
      if (app) {
        setForm({
          name: app.name || '',
          major: app.major || '',
          topic: app.topic || '',
          schedule: app.schedule || '',
          message: app.message || '',
          status: app.status || 'pending',
          applicantEmail: app.applicantEmail || app.applicant_email || '',
          createdAt: app.createdAt || app.created_at?.split('T')[0] || '',
        });
      }
    };
    load();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateApplication(id, { status: form.status });
      navigate('/admin/guidance');
    } catch (err: any) {
      console.error('Application update error:', err);
    } finally {
      setLoading(false);
    }
  };

  const statuses = [
    { value: 'pending', label: lang === 'ko' ? '대기중' : 'Pending' },
    { value: 'reviewing', label: lang === 'ko' ? '검토중' : 'Reviewing' },
    { value: 'accepted', label: lang === 'ko' ? '승인' : 'Accepted' },
    { value: 'rejected', label: lang === 'ko' ? '반려' : 'Rejected' },
  ];

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2>{lang === 'ko' ? '논문 멘토링 신청 상세' : 'Mentoring Application Detail'}</h2>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '이름' : 'Name'}</label>
            <input type="text" value={form.name} readOnly style={{ background: '#f3f4f6' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '이메일' : 'Email'}</label>
            <input type="text" value={form.applicantEmail} readOnly style={{ background: '#f3f4f6' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '전공' : 'Major'}</label>
            <input type="text" value={form.major} readOnly style={{ background: '#f3f4f6' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '논문 주제' : 'Topic'}</label>
            <input type="text" value={form.topic} readOnly style={{ background: '#f3f4f6' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '희망 일정' : 'Preferred Schedule'}</label>
            <input type="text" value={form.schedule} readOnly style={{ background: '#f3f4f6' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '추가 메시지' : 'Additional Message'}</label>
            <textarea value={form.message} readOnly style={{ minHeight: '120px', background: '#f3f4f6' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '신청일' : 'Applied Date'}</label>
            <input type="text" value={form.createdAt} readOnly style={{ background: '#f3f4f6' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '상태' : 'Status'}</label>
            <select value={form.status} onChange={(e) => setForm(prev => ({ ...prev, status: e.target.value }))}>
              {statuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div className="board-form-actions">
            <button type="button" className="board-btn" onClick={() => navigate('/admin/guidance')}>
              {lang === 'ko' ? '취소' : 'Cancel'}
            </button>
            <button type="submit" className="board-btn primary" disabled={loading}>
              {loading ? (lang === 'ko' ? '저장 중...' : 'Saving...') : (lang === 'ko' ? '저장' : 'Save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminThesisGuidanceForm;
