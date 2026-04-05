import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminSidebar from '../../components/AdminSidebar';
import { getMaterials, deleteMaterial } from '../../utils/materialStorage';
import '../../styles/admin.css';

const AdminMaterials = () => {
  const { t, lang } = useLanguage();
  const [materials, setMaterials] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const load = async () => {
      const data = await getMaterials({ category: categoryFilter || undefined });
      setMaterials(data);
    };
    load();
  }, [categoryFilter]);

  const handleDelete = async (id, title) => {
    if (!window.confirm(t('site.admin.confirmDelete') + `\n\n"${title}"`)) return;
    await deleteMaterial(id);
    setMaterials(prev => prev.filter(m => m.id !== id));
  };

  const categoryLabel = (cat) => {
    if (cat === 'structure') return lang === 'ko' ? '논문구조' : 'Paper Structure';
    if (cat === 'methodology') return lang === 'ko' ? '연구방법론' : 'Methodology';
    if (cat === 'writing') return lang === 'ko' ? '학술적 글쓰기' : 'Academic Writing';
    if (cat === 'statistics') return lang === 'ko' ? '통계분석' : 'Statistics';
    return cat;
  };

  const typeLabel = (type) => {
    if (type === 'pdf') return 'PDF';
    if (type === 'doc') return 'DOC';
    if (type === 'video') return lang === 'ko' ? '영상' : 'Video';
    return type;
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <div className="admin-content-header">
          <h2>{lang === 'ko' ? '학습자료 관리' : 'Materials Management'}</h2>
          <Link to="/admin/materials/new" className="admin-btn primary">{t('site.admin.create')}</Link>
        </div>

        <div className="admin-filters">
          {['', 'structure', 'methodology', 'writing', 'statistics'].map(c => (
            <button
              key={c}
              className={`admin-filter-btn ${categoryFilter === c ? 'active' : ''}`}
              onClick={() => setCategoryFilter(c)}
            >
              {c === '' ? (lang === 'ko' ? '전체' : 'All') : categoryLabel(c)}
            </button>
          ))}
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('site.admin.title')}</th>
                <th>{t('site.admin.category')}</th>
                <th>{lang === 'ko' ? '타입' : 'Type'}</th>
                <th>{t('site.admin.date')}</th>
                <th>{t('site.admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {materials.length > 0 ? materials.map(mat => (
                <tr key={mat.id}>
                  <td className="truncate">{mat.title || mat.titleKo}</td>
                  <td>{categoryLabel(mat.category)}</td>
                  <td>{typeLabel(mat.type)}</td>
                  <td>{mat.createdAt || mat.created_at?.split('T')[0]}</td>
                  <td>
                    <div className="admin-actions">
                      <Link to={`/admin/materials/edit/${mat.id}`} className="admin-btn">{t('site.admin.edit')}</Link>
                      <button className="admin-btn danger" onClick={() => handleDelete(mat.id, mat.title || mat.titleKo)}>{t('site.admin.delete')}</button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={5} className="admin-empty">{t('site.admin.noData')}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminMaterials;
