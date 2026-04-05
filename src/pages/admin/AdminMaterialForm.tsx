import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminSidebar from '../../components/AdminSidebar';
import FileUpload from '../../components/FileUpload';
import { getMaterialById, createMaterial, updateMaterial } from '../../utils/materialStorage';
import '../../styles/admin.css';

const AdminMaterialForm = () => {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: '',
    title_en: '',
    description: '',
    description_en: '',
    category: 'structure',
    type: 'pdf',
    file_url: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const load = async () => {
        const mat = await getMaterialById(id);
        if (mat) {
          setForm({
            title: mat.title || mat.titleKo || '',
            title_en: mat.title_en || mat.titleEn || '',
            description: mat.description || mat.descKo || '',
            description_en: mat.description_en || mat.descEn || '',
            category: mat.category || 'structure',
            type: mat.type || 'pdf',
            file_url: mat.file_url || mat.fileUrl || '',
          });
        }
      };
      load();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);

    try {
      if (isEdit) {
        await updateMaterial(id, form);
      } else {
        await createMaterial(form);
      }
      navigate('/admin/materials');
    } catch (err: any) {
      console.error('Material save error:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'structure', label: lang === 'ko' ? '논문구조' : 'Paper Structure' },
    { value: 'methodology', label: lang === 'ko' ? '연구방법론' : 'Methodology' },
    { value: 'writing', label: lang === 'ko' ? '학술적 글쓰기' : 'Academic Writing' },
    { value: 'statistics', label: lang === 'ko' ? '통계분석' : 'Statistics' },
  ];

  const types = [
    { value: 'pdf', label: 'PDF' },
    { value: 'doc', label: lang === 'ko' ? '문서 (DOC)' : 'Document (DOC)' },
    { value: 'video', label: lang === 'ko' ? '영상 (YouTube)' : 'Video (YouTube)' },
  ];

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2>{isEdit ? t('site.admin.edit') : t('site.admin.create')} - {lang === 'ko' ? '학습자료' : 'Material'}</h2>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '제목 (한국어)' : 'Title (Korean)'}</label>
            <input type="text" name="title" value={form.title} onChange={handleChange} required />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '제목 (영어)' : 'Title (English)'}</label>
            <input type="text" name="title_en" value={form.title_en} onChange={handleChange} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '설명 (한국어)' : 'Description (Korean)'}</label>
            <textarea name="description" value={form.description} onChange={handleChange} style={{ minHeight: '100px' }} />
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '설명 (영어)' : 'Description (English)'}</label>
            <textarea name="description_en" value={form.description_en} onChange={handleChange} style={{ minHeight: '100px' }} />
          </div>

          <div className="board-form-group">
            <label>{t('site.admin.category')}</label>
            <select name="category" value={form.category} onChange={handleChange}>
              {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <div className="board-form-group">
            <label>{lang === 'ko' ? '자료 타입' : 'Material Type'}</label>
            <select name="type" value={form.type} onChange={handleChange}>
              {types.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          {form.type === 'video' ? (
            <div className="board-form-group">
              <label>{lang === 'ko' ? 'YouTube URL' : 'YouTube URL'}</label>
              <input
                type="url"
                name="file_url"
                value={form.file_url}
                onChange={handleChange}
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
          ) : (
            <div className="board-form-group">
              <label>{lang === 'ko' ? '파일 업로드' : 'File Upload'}</label>
              <FileUpload
                value={form.file_url}
                onChange={(url) => setForm(prev => ({ ...prev, file_url: url }))}
                folder="materials"
                accept={form.type === 'pdf' ? '.pdf' : '.doc,.docx,.ppt,.pptx'}
              />
            </div>
          )}

          <div className="board-form-actions">
            <button type="button" className="board-btn" onClick={() => navigate('/admin/materials')}>{t('site.admin.cancel')}</button>
            <button type="submit" className="board-btn primary" disabled={loading}>
              {loading ? (lang === 'ko' ? '저장 중...' : 'Saving...') : t('site.admin.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminMaterialForm;
